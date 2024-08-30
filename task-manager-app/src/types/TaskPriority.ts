import { OptionType } from './OptionType.ts';

export type TaskPriority = 'low' | 'medium' | 'high';

export const taskPriorityOptions: OptionType[] = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

export const defaultTaskPriority: OptionType = taskPriorityOptions[1];
