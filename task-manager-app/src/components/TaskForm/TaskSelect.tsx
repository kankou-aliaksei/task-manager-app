// @file src/components/TaskForm/TaskSelect.tsx

import React from 'react';
import Select, { SingleValue } from 'react-select';
import { SelectContainer } from './TaskSelect.styles.ts';
import { Label } from '../Common/Label.styles.ts';

interface OptionType {
    value: string;
    label: string;
}

interface TaskFormSelectProps {
    label: string;
    id: string;
    value: OptionType;
    onChange: (option: OptionType) => void;
    options: OptionType[];
    required?: boolean;
}

const TaskSelect: React.FC<TaskFormSelectProps> = ({ label, required, id, value, onChange, options }) => {
    const handleChange = (newValue: SingleValue<OptionType>) => {
        onChange(newValue as OptionType);
    };

    return (
        <SelectContainer>
            <Label htmlFor={id}>
                {label}
                {required && <span> *</span>}
            </Label>
            <Select
                id={id}
                value={value}
                onChange={handleChange}
                options={options}
                classNamePrefix="task-form-select"
            />
        </SelectContainer>
    );
};

export default TaskSelect;
