// src/hooks/useNotify.ts

import { toast } from 'react-toastify';

export const useNotify = () => {
    const success = (message: string) => {
        toast.success(message);
    };

    const error = (message: string) => {
        toast.error(message);
    };

    return { success, error };
};
