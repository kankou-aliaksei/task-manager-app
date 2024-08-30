// @file src/components/TaskForm/TaskAddForm.tsx

import React from 'react';
import TaskInput from './TaskInput';
import TaskTextarea from './TaskTextarea';
import TaskSelect from './TaskSelect';
import FormError from '../Common/FormError';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useTaskMutations } from '../../hooks/useTaskMutations';
import { useTaskForm } from '../../hooks/useTaskForm';
import { taskStatusOptions, taskPriorityOptions } from '../../types';
import DatePickerModal from '../DatePicker/DatePickerModal.tsx';
import { useErrorFocus } from '../../hooks/useErrorFocus';
import TaskForm from './TaskForm';
import Button from '../Common/Button.styles';

interface TaskAddFormProps {
    onSuccess: () => void;
    onCancel: () => void;
}

const TaskAddForm: React.FC<TaskAddFormProps> = ({ onSuccess, onCancel }) => {
    const {
        formData,
        errors,
        isModalOpen,
        openModal,
        closeModal,
        handleChange,
        handleSelectChange,
        handleDateChange,
        formatDateIgnoringTimezone,
        validateForm,
        getTaskData,
        resetForm,
        setFieldValue,
    } = useTaskForm();

    const { createTask } = useTaskMutations();
    const { triggerFocus } = useErrorFocus(errors);

    const handleTaskSuccess = () => {
        resetForm();
        onSuccess();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = await validateForm();

        if (isValid) {
            createTask(getTaskData(), {
                onSuccess: handleTaskSuccess,
            });
        } else {
            triggerFocus();
        }
    };

    const handleClearDate = () => {
        setFieldValue('dueDate', '');
    };

    const icons = [
        {
            icon: FaTimes,
            onClick: handleClearDate,
            title: 'Clear Date'
        },
        {
            icon: FaCalendarAlt,
            onClick: openModal,
            title: 'Open Calendar'
        }
    ];

    return (
        <TaskForm
            onSubmit={handleSubmit}
            submitButtonLabel="Add Task"
            cancelButton={
                <Button type="button" onClick={onCancel}>
                    Cancel
                </Button>
            }
        >
            <TaskInput
                label="Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
            />
            <FormError error={errors.title} />

            <TaskTextarea
                label="Description"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <FormError error={errors.description} />

            <TaskSelect
                label="Status"
                id="status"
                value={formData.status}
                onChange={handleSelectChange('status')}
                options={taskStatusOptions}
                required
            />
            <FormError error={errors['status.value']} />

            <TaskSelect
                label="Priority"
                id="priority"
                value={formData.priority}
                onChange={handleSelectChange('priority')}
                options={taskPriorityOptions}
                required
            />
            <FormError error={errors['priority.value']} />

            <TaskInput
                label="Due Date"
                id="dueDate"
                name="dueDate"
                placeholder="YYYY-MM-DD"
                value={formatDateIgnoringTimezone(formData.dueDate)}
                onChange={(e) => handleDateChange(e.target.value ? new Date(e.target.value) : null)}
                icons={icons}
            />
            <FormError error={errors.dueDate} />

            <DatePickerModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDate={formData.dueDate}
                onDateChange={handleDateChange}
            />
        </TaskForm>
    );
};

export default TaskAddForm;
