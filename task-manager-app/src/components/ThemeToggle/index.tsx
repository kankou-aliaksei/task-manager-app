// @file src/components/ThemeToggle/index.tsx

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

import { ToggleButton, ToggleCircle } from './styles';
import ThemeIcon from './ThemeIcon';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleButton onClick={toggleTheme}>
            <ToggleCircle>
                <ThemeIcon theme={theme} />
            </ToggleCircle>
        </ToggleButton>
    );
};

export default ThemeToggle;
