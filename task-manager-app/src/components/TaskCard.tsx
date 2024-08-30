// @file src/components/TaskCard.tsx

import React from 'react';
import { Task, TaskStatus, TaskPriority } from '../types';
import TaskEditForm from './TaskForm/TaskEditForm';
import Button from './Common/Button.styles';
import { TaskCardContainer, TaskCardContent, TaskCardFooter, Status, Priority } from './TaskCard.styles';

interface TaskCardProps {
    task: Task;
    onEditStart: (taskId: string) => void;
    onEditEnd: () => void;
    currentEditingTaskId: string | null;
}

const TaskCard: React.FC<TaskCardProps> = ({
                                               task,
                                               onEditStart,
                                               onEditEnd,
                                               currentEditingTaskId,
                                           }) => {
    const isEditingThis = currentEditingTaskId === task.id;

    const toggleEdit = () => {
        if (!isEditingThis) {
            onEditStart(task.id);
        } else {
            onEditEnd();
        }
    };

    return (
        <TaskCardContainer>
            <TaskCardContent>
                {isEditingThis ? (
                    <TaskEditForm
                        task={task}
                        toggleEdit={toggleEdit}
                        onSuccess={onEditEnd}
                    />
                ) : (
                    <>
                        <h3 className="task-title text-xl font-semibold mb-2">{task.title}</h3>
                        <p className="task-description text-gray-600 mb-2">{task.description}</p>
                        <p className="task-status text-sm text-gray-500">
                            Status: <Status status={task.status as TaskStatus}>{task.status}</Status>
                        </p>
                        <p className="task-priority text-sm text-gray-500">
                            Priority: <Priority priority={task.priority as TaskPriority}>{task.priority}</Priority>
                        </p>
                        <p className="task-due-date text-sm text-gray-500 mb-4">Due Date: {task.dueDate || 'None'}</p>
                    </>
                )}
            </TaskCardContent>
            <TaskCardFooter className="flex items-center">
                {!isEditingThis && (
                    <Button onClick={toggleEdit}>Edit</Button>
                )}
            </TaskCardFooter>
        </TaskCardContainer>
    );
};

export default TaskCard;
