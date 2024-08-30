// @file src/components/ThemeToggle/styles.ts

import styled from '@emotion/styled';
import { hexToRgb } from '../../utils/utils';
import { TOGGLE_WIDTH, TOGGLE_HEIGHT, CIRCLE_SIZE, CIRCLE_TRANSLATE } from './constants';

export const ToggleButton = styled.button`
    width: ${TOGGLE_WIDTH}px;
    height: ${TOGGLE_HEIGHT}px;
    display: flex;
    align-items: center;
    border-radius: 9999px;
    padding: ${({ theme }) => theme.spacing.small};
    transition: background-color 0.3s, box-shadow 0.3s;

    background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
    box-shadow: 2px 3px 2px 1px ${({ theme }) => hexToRgb(theme.colors.shadowColor, 0.2)};

    &:hover {
        box-shadow: 0 4px 8px ${({ theme }) => hexToRgb(theme.colors.shadowColor, 0.4)};
    }
`;

export const ToggleCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    transition: transform 0.3s, left 0.3s;
    transform: ${({ theme }) => theme.name === 'default' ? 'translateX(0)' : `translateX(${CIRCLE_TRANSLATE}px)`};
`;
