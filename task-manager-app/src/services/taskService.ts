// src/services/taskService.ts

import axios from 'axios';
import { APP_CONFIG } from '../config/appConfig';
import { Task } from '../types';

const API_BASE_URL = `${APP_CONFIG.api.baseUrl}${APP_CONFIG.api.endpoints.tasks}`;

export const fetchTasks = async (
    page: number,
    limit: number,
    searchTerm = '',
    priority = '',
    status = ''
): Promise<{ tasks: Task[]; currentPage: number; totalPages: number }> => {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        searchTerm,
        priority,
        status,
    });

    console.log('Fetching tasks with params:', params.toString());

    try {
        const response = await axios.get<{ tasks: Task[]; currentPage: number; totalPages: number }>(
            `${API_BASE_URL}?${params.toString()}`
        );

        console.log('Received response:', response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    console.log('Creating task:', task);

    try {
        const response = await axios.post<Task>(API_BASE_URL, task);
        console.log('Created task:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export const updateTask = async (id: string, task: Partial<Task>): Promise<Task> => {
    console.log('Updating task:', id, task);

    try {
        const response = await axios.put<Task>(`${API_BASE_URL}/${id}`, task);
        console.log('Updated task:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export const deleteTask = async (id: string): Promise<void> => {
    console.log('Deleting task:', id);

    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
        console.log('Task deleted successfully');
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};