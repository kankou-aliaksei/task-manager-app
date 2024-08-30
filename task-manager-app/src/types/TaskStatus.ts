import { OptionType } from './OptionType.ts';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export const taskStatusOptions: OptionType[] = [
    { value: 'todo', label: 'To Do' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
];

export const defaultTaskStatus: OptionType = taskStatusOptions[0];
