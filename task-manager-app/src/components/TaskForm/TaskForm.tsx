// @file src/components/TaskForm/TaskForm.tsx

import React from 'react';
import Button from '../Common/Button.styles';

interface TaskFormProps {
    onSubmit: (e: React.FormEvent) => Promise<void>;
    isSubmitDisabled?: boolean;
    submitButtonLabel: string;
    children: React.ReactNode;
    cancelButton?: React.ReactNode;
}

const TaskForm: React.FC<TaskFormProps> = ({
                                               onSubmit,
                                               isSubmitDisabled = false,
                                               submitButtonLabel,
                                               children,
                                               cancelButton,
                                           }) => {
    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {children}
            <div className="flex space-x-2">
                <Button type="submit" disabled={isSubmitDisabled}>
                    {submitButtonLabel}
                </Button>
                {cancelButton && cancelButton}
            </div>
        </form>
    );
};

export default TaskForm;
