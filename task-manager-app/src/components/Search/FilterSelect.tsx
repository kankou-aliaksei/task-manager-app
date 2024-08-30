// @file src/components/Search/FilterSelect.tsx

import React from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';
import { SelectContainer } from './FilterSelect.styles';

interface OptionType {
    value: string;
    label: string;
}

interface FilterSelectProps {
    value: OptionType;
    onChange: (option: SingleValue<OptionType>, actionMeta: ActionMeta<OptionType>) => void;
    options: OptionType[];
    placeholder: string;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ value, onChange, options, placeholder }) => {
    return (
        <SelectContainer>
            <Select
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                classNamePrefix="filter-select"
            />
        </SelectContainer>
    );
};

export default FilterSelect;
