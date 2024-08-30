// @file src/components/TaskForm/TaskInput.styles.ts

import styled from '@emotion/styled';

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Input = styled.input<{ hasIcons: boolean }>`
    width: 100%;
    padding: ${({ theme, hasIcons }) =>
            hasIcons ? `${theme.spacing.small} calc(${theme.spacing.medium} + 24px) ${theme.spacing.small} ${theme.spacing.medium}` : `${theme.spacing.small} ${theme.spacing.medium}`};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
    color: ${({ theme }) => theme.colors.inputTextColor};
    transition: border-color 0.2s;

    &:focus {
        border-color: ${({ theme }) => theme.colors.focusBorderColor};
        outline: none;
    }
`;

export const IconsContainer = styled.div`
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    gap: 8px;
`;

export const IconWrapper = styled.div`
    color: ${({ theme }) => theme.colors.iconColor};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;

    &:hover {
        color: ${({ theme }) => theme.colors.iconColor};
    }
`;
