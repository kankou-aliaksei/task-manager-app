// @file src/components/Dashboard.tsx

import React, { useState } from 'react';
import TaskAddForm from './TaskForm/TaskAddForm';
import TaskList from './TaskList';
import Button from './Common/Button.styles';

const Dashboard: React.FC = () => {
    const [view, setView] = useState<{ mode: 'add' | 'edit' | null; taskId: string | null }>({
        mode: null,
        taskId: null,
    });

    const handleTaskFormSuccess = () => {
        setView({ mode: null, taskId: null });
    };

    const handleEditStart = (taskId: string) => {
        setView({ mode: 'edit', taskId });
    };

    const handleEditEnd = () => {
        setView({ mode: null, taskId: null });
    };

    const handleAddCancel = () => {
        setView({ mode: null, taskId: null });
    };

    const handleAddStart = () => {
        setView({ mode: 'add', taskId: null });
    };

    return (
        <div className="container mx-auto p-4">
            {view.mode !== 'add' && (
                <Button onClick={handleAddStart}>
                    {view.mode === 'edit' ? 'Add a Task' : 'Add a task'}
                </Button>
            )}

            {view.mode === 'add' && (
                <div className="mt-4">
                    <TaskAddForm onSuccess={handleTaskFormSuccess} onCancel={handleAddCancel} />
                </div>
            )}

            <div className="mt-8">
                <TaskList
                    onEditStart={handleEditStart}
                    onEditEnd={handleEditEnd}
                    currentEditingTaskId={view.taskId}
                />
            </div>
        </div>
    );
};

export default Dashboard;
