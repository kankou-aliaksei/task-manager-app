// @file src/hooks/useTaskMutations.ts

import { useMutation, useQueryClient } from 'react-query';
import { createTask, updateTask } from '../services/taskService';
import { APP_CONFIG } from '../config/appConfig';
import { Task, TasksResponse } from '../types/';
import { useNotify } from './useNotify';

export const useTaskMutations = () => {
    const queryClient = useQueryClient();
    const notify = useNotify();

    const createTaskMutation = useMutation(createTask, {
        onSuccess: () => {
            queryClient.invalidateQueries([APP_CONFIG.query.tasks.queryKey]);
            notify.success('Task created successfully');
        },
        onError: (error: Error) => {
            notify.error(`Failed to create task: ${error.message}`);
        },
    });

    const updateTaskMutation = useMutation(
        ({ id, task }: { id: string; task: Partial<Task> }) => updateTask(id, task),
        {
            onSuccess: (updatedTask) => {
                queryClient.setQueriesData<{ pages: TasksResponse[]; pageParams: unknown[] }>(
                    [APP_CONFIG.query.tasks.queryKey],
                    (oldData) => {
                        if (!oldData) {
                            return {
                                pages: [{ tasks: [updatedTask], currentPage: 1, totalPages: 1 }],
                                pageParams: [undefined],
                            };
                        }
                        return {
                            ...oldData,
                            pages: oldData.pages.map(page => ({
                                ...page,
                                tasks: page.tasks.map(t =>
                                    t.id === updatedTask.id ? { ...t, ...updatedTask } : t
                                ),
                            })),
                        };
                    }
                );
                notify.success('Task updated successfully');
            },
            onError: (error: Error) => {
                notify.error(`Failed to update task: ${error.message}`);
            },
        }
    );

    return {
        createTask: createTaskMutation.mutate,
        updateTask: updateTaskMutation.mutate,
        createTaskAsync: createTaskMutation.mutateAsync,
        updateTaskAsync: updateTaskMutation.mutateAsync,
    };
};