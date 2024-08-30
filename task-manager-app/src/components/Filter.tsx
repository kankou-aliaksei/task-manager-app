// @file src/components/Filter.tsx

import React from 'react';
import FilterSelect from './Search/FilterSelect';
import { OptionType } from '../types';

interface FilterProps {
    filterPriority: string;
    onPriorityChange: (selectedOption: OptionType | null) => void;
    filterStatus: string;
    onStatusChange: (selectedOption: OptionType | null) => void;
    priorityOptions: OptionType[];
    statusOptions: OptionType[];
}

const Filter: React.FC<FilterProps> = ({
                                           filterPriority,
                                           onPriorityChange,
                                           filterStatus,
                                           onStatusChange,
                                           priorityOptions,
                                           statusOptions
                                       }) => {
    const selectedPriority = priorityOptions.find(option => option.value === filterPriority);
    const selectedStatus = statusOptions.find(option => option.value === filterStatus);

    return (
        <div className="flex flex-row w-full space-x-2">
            <div className="flex-1 sm:max-w-xs lg:max-w-sm mt-3 md:mt-0.5">
                <FilterSelect
                    value={selectedPriority!}
                    onChange={onPriorityChange}
                    options={priorityOptions}
                    placeholder="Filter by Priority"
                />
            </div>
            <div className="flex-1 sm:max-w-xs lg:max-w-sm mt-3 md:mt-0.5">
                <FilterSelect
                    value={selectedStatus!}
                    onChange={onStatusChange}
                    options={statusOptions}
                    placeholder="Filter by Status"
                />
            </div>
        </div>
    );
};

export default Filter;