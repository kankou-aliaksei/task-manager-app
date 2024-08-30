import { Task } from './Task';

export interface TasksResponse {
    tasks: Task[];
    currentPage: number;
    totalPages: number;
}