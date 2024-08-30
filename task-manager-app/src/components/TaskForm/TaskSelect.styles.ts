// @file src/components/TaskForm/TaskSelect.styles.ts

import styled from '@emotion/styled';
import { hexToRgb } from '../../utils/utils.ts';

export const SelectContainer = styled.div`
    .task-form-select__control {
        width: 100%;
        border-radius: 8px !important;
        border: 1px solid ${({ theme }) => theme.colors.borderColor};
        background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
        color: ${({ theme }) => theme.colors.inputTextColor};
        transition: border-color 0.2s;
    }

    .task-form-select__control--is-focused {
        border-color: ${({ theme }) => theme.colors.focusBorderColor} !important;
        box-shadow: none;
    }

    .task-form-select__menu {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
        color: ${({ theme }) => theme.colors.inputTextColor};
    }

    .task-form-select__option {
        background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
        color: ${({ theme }) => theme.colors.inputTextColor};
    }

    .task-form-select__option--is-focused {
        background-color: ${({ theme }) => hexToRgb(theme.colors.primary, 0.5)};
        color: ${({ theme }) => theme.colors.inputTextColor};
    }

    .task-form-select__option--is-selected {
        background-color: ${({ theme }) => theme.colors.focusBorderColor};
        color: ${({ theme }) => theme.colors.selectedTextColor};
    }

    .task-form-select__single-value {
        color: ${({ theme }) => theme.colors.inputTextColor};
    }
`;
