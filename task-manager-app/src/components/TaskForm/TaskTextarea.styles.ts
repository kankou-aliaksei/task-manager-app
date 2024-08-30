// @file src/components/TaskForm/TaskTextarea.styles.ts

import styled from '@emotion/styled';

export const Textarea = styled.textarea`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
    color: ${({ theme }) => theme.colors.inputTextColor};
    transition: border-color 0.2s;
    resize: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.focusBorderColor};
        outline: none;
    }
`;
