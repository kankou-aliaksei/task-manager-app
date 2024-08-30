// @file src/hooks/useFilters.ts

import { useState, useCallback } from 'react';
import { OptionType } from '../types';
import { Filters } from '../types/Filters.ts';

export const useFilters = () => {
    const [filters, setFilters] = useState<Filters>({
        searchTerm: '',
        priority: '',
        status: '',
    });

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters((prev) => ({ ...prev, searchTerm: e.target.value }));
    }, []);

    const handleFilterChange = useCallback((key: 'priority' | 'status') => (selectedOption: OptionType | null) => {
        setFilters((prev) => ({ ...prev, [key]: selectedOption ? selectedOption.value : '' }));
    }, []);

    return { filters, handleSearchChange, handleFilterChange };
};