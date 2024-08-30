// @file src/components/SearchAndFilter.tsx

import React from 'react';
import FilterSelect from './Search/FilterSelect.tsx';
import { SearchInput } from './Search/SearchInput.styles.ts';

interface SearchAndFilterProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    filterPriority: string;
    onPriorityChange: (selectedOption: { value: string; label: string } | null) => void;
    filterStatus: string;
    onStatusChange: (selectedOption: { value: string; label: string } | null) => void;
    priorityOptions: { value: string; label: string }[];
    statusOptions: { value: string; label: string }[];
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
                                                             searchTerm,
                                                             onSearchChange,
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
        <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:space-y-0 sm:space-x-2">
            <div className="w-full sm:flex-grow">
                <SearchInput
                    id="search-tasks"
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Search tasks..."
                    hasIcons={false}
                />
            </div>
            <div className="flex flex-row w-full space-x-2 ">
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
        </div>
    );
};

export default SearchAndFilter;
