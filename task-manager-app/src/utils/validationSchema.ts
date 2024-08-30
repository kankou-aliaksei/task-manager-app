// @file src/utils/validationSchema.ts

import * as Yup from 'yup';
import { Task } from '../types';

export const taskValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    status: Yup.object().shape({
        value: Yup.string().required('Status is required'),
        label: Yup.string().required(),
    }),
    priority: Yup.object().shape({
        value: Yup.string().required('Priority is required'),
        label: Yup.string().required(),
    }),
    dueDate: Yup.date().nullable(),
});

type TaskFieldValue = string | Date | { value: string; label: string } | undefined | null;

export const validateField = async (name: keyof Task, value: TaskFieldValue) => {
    try {
        const schema = Yup.reach(taskValidationSchema, name) as Yup.Schema<TaskFieldValue>;
        await schema.validate(value);
        return '';
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            return err.message;
        }
        return 'Invalid value';
    }
};
