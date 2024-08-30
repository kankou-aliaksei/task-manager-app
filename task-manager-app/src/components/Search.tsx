// @file src/components/Search.tsx

import React from 'react';
import { SearchInput } from './Search/SearchInput.styles';

interface SearchProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="w-full sm:flex-grow">
            <SearchInput
                id="search-tasks"
                value={searchTerm}
                onChange={onSearchChange}
                placeholder="Search tasks..."
                hasIcons={false}
                autoComplete="off"
            />
        </div>
    );
};

export default Search;