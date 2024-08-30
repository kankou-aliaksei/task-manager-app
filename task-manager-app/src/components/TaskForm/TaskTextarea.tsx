// @file src/components/TaskForm/TaskTextarea.tsx

import React from 'react';
import { Textarea } from './TaskTextarea.styles';
import { Label } from '../Common/Label.styles.ts';

interface TaskTextareaProps {
    label: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
}

const TaskTextarea: React.FC<TaskTextareaProps> = ({ label, required, id, name, value, onChange }) => {
    return (
        <div>
            <Label htmlFor={id}>
                {label}
                {required && <span> *</span>}
            </Label>
            <Textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TaskTextarea;
