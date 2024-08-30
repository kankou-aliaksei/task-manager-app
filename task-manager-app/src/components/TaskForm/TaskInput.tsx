// @file src/components/TaskForm/TaskInput.tsx

import React from 'react';
import { InputWrapper, Input, IconsContainer, IconWrapper } from './TaskInput.styles';
import { Label } from '../Common/Label.styles';
import { IconType } from 'react-icons';

interface IconConfig {
    icon: IconType;
    onClick: () => void;
    title?: string;
}

interface TaskInputProps {
    label: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icons?: IconConfig[];
    required?: boolean;
}

const TaskInput: React.FC<TaskInputProps> = ({
                                                 label,
                                                 required,
                                                 id,
                                                 name,
                                                 value,
                                                 onChange,
                                                 placeholder,
                                                 icons,
                                             }) => {
    return (
        <div>
            <Label htmlFor={id}>
                {label}
                {required && <span> *</span>}
            </Label>
            <InputWrapper>
                <Input
                    type="text"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    hasIcons={Boolean(icons?.length)}
                    autoComplete="off"
                />
                {icons && (
                    <IconsContainer>
                        {icons.map(({ icon: Icon, onClick, title }, index) => (
                            <IconWrapper key={index} onClick={onClick} title={title}>
                                <Icon size={'20px'} />
                            </IconWrapper>
                        ))}
                    </IconsContainer>
                )}
            </InputWrapper>
        </div>
    );
};

export default TaskInput;
