// @file src/hooks/useTaskForm.ts

import { ChangeEvent, useState } from 'react';
import * as Yup from 'yup';
import { taskValidationSchema, validateField } from '../utils/validationSchema';
import {
    Task,
    TaskStatus,
    TaskPriority,
    OptionType,
    defaultTaskStatus,
    defaultTaskPriority,
    taskStatusOptions,
    taskPriorityOptions,
} from '../types';

interface UseTaskFormProps {
    initialTask?: Task;
}

export const useTaskForm = ({ initialTask }: UseTaskFormProps = {}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const findOption = (options: OptionType[], value: string) =>
        options.find(option => option.value === value) || { value, label: value };

    const [formData, setFormData] = useState({
        title: initialTask?.title || '',
        description: initialTask?.description || '',
        status: initialTask
            ? findOption(taskStatusOptions, initialTask.status)
            : defaultTaskStatus,
        priority: initialTask
            ? findOption(taskPriorityOptions, initialTask.priority)
            : defaultTaskPriority,
        dueDate: initialTask?.dueDate ? new Date(initialTask.dueDate) : null as Date | null,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const error = await validateField(name as keyof Task, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSelectChange = (name: string) => async (selectedOption: OptionType | null) => {
        setFormData(prev => ({ ...prev, [name]: selectedOption }));

        const fieldValue = selectedOption ? selectedOption : { value: '', label: '' };
        const error = await validateField(name as keyof Task, fieldValue);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleDateChange = async (date: Date | null) => {
        setFormData(prev => ({ ...prev, dueDate: date }));

        const error = await validateField('dueDate', date || '');
        setErrors(prev => ({ ...prev, dueDate: error }));

        closeModal();
    };

    const setFieldValue = <K extends keyof Task>(field: K, value: Task[K]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const validateForm = async () => {
        try {
            await taskValidationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const newErrors: { [key: string]: string } = {};
                err.inner.forEach((error) => {
                    if (error.path) {
                        newErrors[error.path] = error.message;
                    }
                });
                setErrors(newErrors);
            }
            return false;
        }
    };

    const formatDateIgnoringTimezone = (date: Date | null) => {
        if (!date) return '';
        const [month, day, year] = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).split('/');

        return `${year}-${month}-${day}`;
    };

    const getTaskData = (): Omit<Task, 'id'> => ({
        title: formData.title,
        description: formData.description,
        status: formData.status.value as TaskStatus,
        priority: formData.priority.value as TaskPriority,
        dueDate: formatDateIgnoringTimezone(formData.dueDate)
    });

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            status: defaultTaskStatus,
            priority: defaultTaskPriority,
            dueDate: null,
        });
        setErrors({});
    };

    return {
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
    };
};
