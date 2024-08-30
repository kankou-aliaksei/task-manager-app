// @file src/components/Dashboard.tsx

import React, { useState } from 'react';
import TaskAddForm from './TaskForm/TaskAddForm';
import TaskList from './TaskList';
import Search from './Search';
import Filter from './Filter';
import Button from './Common/Button.styles';
import { taskPriorityOptions, taskStatusOptions } from '../types';
import { useFilters } from '../hooks/useFilters.ts';


const Dashboard: React.FC = () => {
    const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
    const [isAddingTask, setIsAddingTask] = useState(false);

    const { filters, handleSearchChange, handleFilterChange } = useFilters();

    const resetView = () => {
        setEditingTaskId(null);
        setIsAddingTask(false);
    };

    const handleEditStart = (taskId: string) => setEditingTaskId(taskId);
    const handleAddStart = () => setIsAddingTask(true);

    return (
        <div className="container mx-auto p-4">
            {!isAddingTask && !editingTaskId && (
                <Button onClick={handleAddStart}>Add a task</Button>
            )}

            {isAddingTask && (
                <div className="mt-4">
                    <TaskAddForm onSuccess={resetView} onCancel={resetView} />
                </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-2 mt-4 space-y-4 sm:space-y-0">
                <Search
                    searchTerm={filters.searchTerm}
                    onSearchChange={handleSearchChange}
                />
                <Filter
                    filterPriority={filters.priority}
                    onPriorityChange={handleFilterChange('priority')}
                    filterStatus={filters.status}
                    onStatusChange={handleFilterChange('status')}
                    priorityOptions={[{ value: '', label: 'All Priorities' }, ...taskPriorityOptions]}
                    statusOptions={[{ value: '', label: 'All Statuses' }, ...taskStatusOptions]}
                />
            </div>

            <div className="mt-8">
                <TaskList
                    filters={filters}
                    onEditStart={handleEditStart}
                    onEditEnd={resetView}
                    currentEditingTaskId={editingTaskId}
                />
            </div>
        </div>
    );
};

export default Dashboard;