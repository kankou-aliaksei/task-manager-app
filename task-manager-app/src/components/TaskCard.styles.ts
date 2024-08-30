// @file src/components/TaskCard.styles.ts

import styled from '@emotion/styled';
import { hexToRgb } from '../utils/utils.ts';

export const TaskCardContainer = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 8px ${({ theme }) => hexToRgb(theme.colors.shadowColor, 0.2)};
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:hover {
        box-shadow: 0 8px 16px ${({ theme }) => hexToRgb(theme.colors.shadowColor, 0.4)};
    }
`;

export const TaskCardContent = styled.div`
    flex-grow: 1;
    padding: 16px 16px 0 16px;
`;

export const TaskCardFooter = styled.div`
    padding: 0 16px 16px 16px;
`;

export const Status = styled.span<{ status: string }>`
    color: ${({ status, theme }) => {
        switch (status) {
            case 'todo':
                return theme.colors.red;
            case 'in-progress':
                return theme.colors.yellow;
            case 'done':
                return theme.colors.green;
            default:
                return '#6c757d';
        }
    }};
    white-space: nowrap;
`;

export const Priority = styled.span<{ priority: string }>`
    color: ${({ priority, theme }) => {
        switch (priority) {
            case 'low':
                return theme.colors.green;
            case 'medium':
                return theme.colors.yellow;
            case 'high':
                return theme.colors.red;
            default:
                return '#6c757d';
        }
    }};
    white-space: nowrap;
`;
