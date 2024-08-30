import React, { useEffect, useCallback } from 'react';
import TaskCard from './TaskCard';
import { useTasksQuery } from '../hooks/useTasksQuery';
import { APP_CONFIG } from '../config/appConfig';
import { useDebouncedValue } from '../hooks/useDebouncedValue.ts';
import { Filters } from '../types/Filters.ts';

interface TaskListProps {
    onEditStart: (taskId: string) => void;
    onEditEnd: () => void;
    currentEditingTaskId: string | null;
    filters: Filters;
}

const TaskList: React.FC<TaskListProps> = ({
                                               onEditStart,
                                               onEditEnd,
                                               currentEditingTaskId,
                                               filters,
                                           }) => {
    const debouncedSearchTerm = useDebouncedValue(filters.searchTerm, APP_CONFIG.ui.search.debounceMs);

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useTasksQuery(debouncedSearchTerm, filters.priority, filters.status);

    const tasks = data?.pages.flatMap(page => page.tasks) ?? [];

    const handleScroll = useCallback(async () => {
        if (
            (window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - APP_CONFIG.ui.infiniteScroll.thresholdPx ||
                document.documentElement.scrollHeight <= document.documentElement.clientHeight) &&
            hasNextPage &&
            !isFetchingNextPage
        ) {
            await fetchNextPage();
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    if (status === 'loading' && tasks.length === 0) {
        return <p>Loading tasks...</p>;
    }

    if (status === 'error') {
        return <p>Error loading tasks. Please try again later.</p>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-10">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onEditStart={onEditStart}
                        onEditEnd={onEditEnd}
                        currentEditingTaskId={currentEditingTaskId}
                    />
                ))}
                {isFetchingNextPage && <p>Loading more...</p>}
                {!hasNextPage && tasks.length > 0 && <p>No more tasks to load.</p>}
            </div>
        </div>
    );
};

export default TaskList;
