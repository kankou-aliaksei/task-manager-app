import { TaskStatus } from './TaskStatus';
import { TaskPriority } from './TaskPriority';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: string;
}