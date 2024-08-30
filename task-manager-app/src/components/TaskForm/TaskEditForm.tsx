// @file src/components/TaskForm/TaskEditForm.tsx

import React from 'react';
import { toast } from 'react-toastify';
import TaskInput from './TaskInput';
import TaskTextarea from './TaskTextarea';
import TaskSelect from './TaskSelect';
import FormError from '../Common/FormError';
import { FaCalendarAlt, FaTimes } from 'react-icons/fa';
import { useTaskMutations } from '../../hooks/useTaskMutations';
import { useTaskForm } from '../../hooks/useTaskForm';
import { Task, taskStatusOptions, taskPriorityOptions } from '../../types';
import DatePickerModal from '../DatePicker/DatePickerModal.tsx';
import { useErrorFocus } from '../../hooks/useErrorFocus';
import TaskForm from './TaskForm';
import Button from '../Common/Button.styles';

interface TaskEditFormProps {
    task: Task;
    toggleEdit: () => void;
    onSuccess: () => void;
}

const TaskEditForm: React.FC<TaskEditFormProps> = ({ task, toggleEdit, onSuccess }) => {
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
        setFieldValue,
    } = useTaskForm({ initialTask: task });

    const { updateTask } = useTaskMutations();
    const { triggerFocus } = useErrorFocus(errors);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (await validateForm()) {
            updateTask({ id: task.id, task: getTaskData() }, {
                onSuccess: () => {
                    onSuccess();
                },
                onError: (error) => {
                    toast.error(`Failed to update task: ${error instanceof Error ? error.message : 'Unknown error'}`);
                },
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
            submitButtonLabel="Save"
            cancelButton={
                <Button type="button" onClick={toggleEdit}>
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
            <FormError error={errors.title}/>

            <TaskTextarea
                label="Description"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <FormError error={errors.description}/>

            <div className="flex space-x-2">
                <div className="flex-1">
                    <TaskSelect
                        label="Status"
                        id="status"
                        value={formData.status}
                        onChange={handleSelectChange('status')}
                        options={taskStatusOptions}
                        required
                    />
                    <FormError error={errors['status.value']}/>
                </div>
                <div className="flex-1">
                    <TaskSelect
                        label="Priority"
                        id="priority"
                        value={formData.priority}
                        onChange={handleSelectChange('priority')}
                        options={taskPriorityOptions}
                        required
                    />
                    <FormError error={errors['priority.value']}/>
                </div>
            </div>

            <TaskInput
                label="Due Date"
                id="dueDate"
                name="dueDate"
                placeholder="YYYY-MM-DD"
                value={formatDateIgnoringTimezone(formData.dueDate)}
                onChange={(e) => handleDateChange(e.target.value ? new Date(e.target.value) : null)}
                icons={icons}
            />

            <DatePickerModal
                isOpen={isModalOpen}
                onClose={closeModal}
                selectedDate={formData.dueDate}
                onDateChange={handleDateChange}
            />
        </TaskForm>
    );
};

export default TaskEditForm;
