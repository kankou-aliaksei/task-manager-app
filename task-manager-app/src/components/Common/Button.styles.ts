// @file src/components/Common/Button.styles.ts

import styled from '@emotion/styled';
import { hexToRgb } from '../../utils/utils.ts';
import { Theme } from '@emotion/react';

interface ButtonProps {
    padding?: string;
}

const Button = styled.button<ButtonProps>`
    padding: ${({ padding, theme }: { padding?: string; theme: Theme }) => padding || `${theme.spacing.small} ${theme.spacing.large}`};
    border-radius: ${({ theme }: { theme: Theme }) => theme.spacing.small};
    color: ${({ theme }: { theme: Theme }) => theme.colors.buttonTextColor};
    background-color: ${({ theme }: { theme: Theme }) => hexToRgb(theme.colors.primary, theme.name === 'default' ? 0.7 : 0.9)};
    cursor: pointer;
    box-shadow: 0 2px 4px ${({ theme }: { theme: Theme }) => hexToRgb(theme.colors.shadowColor, 0.1)};
    &:hover {
        background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
    }
    margin-top: 10px;
    margin-bottom: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Button;
