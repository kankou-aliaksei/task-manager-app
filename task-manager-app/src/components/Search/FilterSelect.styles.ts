// @file src/components/Search/FilterSelect.styles.ts

import styled from '@emotion/styled';
import { hexToRgb } from '../../utils/utils.ts';
import { Theme } from '@emotion/react';

const hoverBackgroundColor = ({ theme }: { theme: Theme }) => hexToRgb(theme.colors.secondary, 0.1);
const activeBackgroundColor = ({ theme }: { theme: Theme }) => hexToRgb(theme.colors.secondary, 0.2);

export const SelectContainer = styled.div`
    .filter-select__control {
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.filterBackgroundColor};
        border-color: ${({ theme }: { theme: Theme }) => theme.colors.searchBorderColor};
        border-radius: 8px;
        box-shadow: none;
        &:hover {
            border-color: ${({ theme }: { theme: Theme }) => hexToRgb(theme.colors.searchBorderColor, 0.7)};
        }
        transition: border-color 0.2s;
    }

    .filter-select__placeholder,
    .filter-select__single-value {
        color: ${({ theme }: { theme: Theme }) => theme.colors.textColor};
    }

    .filter-select__dropdown-indicator,
    .filter-select__indicator-separator,
    .filter-select__clear-indicator {
        display: none;
    }

    .filter-select__menu {
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.backgroundColor};
    }

    .filter-select__option {
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.backgroundColor};
        color: ${({ theme }: { theme: Theme }) => theme.colors.textColor};

        &:hover {
            background-color: ${hoverBackgroundColor};
        }

        &:active {
            background-color: ${activeBackgroundColor};
        }

        &.filter-select__option--is-selected {
            background-color: ${activeBackgroundColor} !important;
            color: ${({ theme }: { theme: Theme }) => theme.colors.textColor} !important;
        }

        &.filter-select__option--is-focused:not(.filter-select__option--is-selected) {
            background-color: ${hoverBackgroundColor};
        }
    }
`;
