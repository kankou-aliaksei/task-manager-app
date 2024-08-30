// @file src/hooks/useErrorFocus.ts

import { useEffect, useState } from 'react';

export const useErrorFocus = (errors: Record<string, string>) => {
    const [shouldFocus, setShouldFocus] = useState(false);

    useEffect(() => {
        if (shouldFocus) {
            const firstErrorField = Object.keys(errors).find(key => errors[key]);
            if (firstErrorField) {
                const errorElement = document.getElementById(firstErrorField);
                errorElement?.focus();
            }
            setShouldFocus(false);
        }
    }, [shouldFocus, errors]);

    return {
        triggerFocus: () => setShouldFocus(true),
    };
};
