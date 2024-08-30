const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let tasks = [];
let idCounter = 1;

// Load tasks from JSON file at server start
const loadTasks = () => {
    const dataPath = path.join(__dirname, 'tasks.json');
    if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath);
        tasks = JSON.parse(fileContent);
        if (tasks.length > 0) {
            idCounter = tasks[tasks.length - 1].id + 1; // Устанавливаем idCounter на основе последнего id
        }
    } else {
        console.error('tasks.json not found. Starting with an empty task list.');
    }
};

// Call the loadTasks function to initialize tasks
loadTasks();

// Routes

// Get all tasks with pagination and filtering
app.get('/api/tasks', (req, res) => {
    let filteredTasks = [...tasks];

    // Filtering by title or description
    const searchTerm = req.query.searchTerm || '';
    if (searchTerm) {
        filteredTasks = filteredTasks.filter(task =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Filtering by priority
    const priorityFilter = req.query.priority || '';
    if (priorityFilter) {
        filteredTasks = filteredTasks.filter(task => task.priority === priorityFilter);
    }

    // Filtering by status
    const statusFilter = req.query.status || '';
    if (statusFilter) {
        filteredTasks = filteredTasks.filter(task => task.status === statusFilter);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedTasks = filteredTasks.slice(startIndex, endIndex);

    res.json({
        tasks: paginatedTasks,
        currentPage: page,
        totalPages: Math.ceil(filteredTasks.length / limit)
    });
});

// Get a task by ID
app.get('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Create a new task
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: idCounter++,
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'todo',
        priority: req.body.priority || 'medium',
        dueDate: req.body.dueDate || null,
    };
    console.log(newTask)
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update an existing task
app.put('/api/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));

    if (task) {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        task.priority = req.body.priority || task.priority;

        if (req.body.dueDate === '') {
            task.dueDate = '';
        } else if (req.body.dueDate) {
            task.dueDate = req.body.dueDate;
        }

        console.log(task);
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
    res.status(204).end();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
