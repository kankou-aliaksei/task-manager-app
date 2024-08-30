// @file src/hooks/useTasksQuery.ts

import { useInfiniteQuery } from 'react-query';
import { fetchTasks } from '../services/taskService';
import { APP_CONFIG } from '../config/appConfig';

export const useTasksQuery = (searchTerm: string, filterPriority: string, filterStatus: string) => {
    return useInfiniteQuery(
        [APP_CONFIG.query.tasks.queryKey, searchTerm, filterPriority, filterStatus],
        async ({ pageParam = 1 }) => {
            return fetchTasks(pageParam, APP_CONFIG.query.tasks.pageSize, searchTerm, filterPriority, filterStatus);
        },
        {
            getNextPageParam: (lastPage) =>
                lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
        }
    );
};
