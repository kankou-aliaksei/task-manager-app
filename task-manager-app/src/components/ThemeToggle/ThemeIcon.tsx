// @file src/components/ThemeToggle/ThemeIcon.tsx

import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { ThemeIconProps } from './types';
import { DEFAULT_THEME_ICON_SIZE } from './constants';

const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => {
    return theme.name === 'default' ? (
        <MdSunny size={DEFAULT_THEME_ICON_SIZE} style={{ color: theme.colors.primary }} />
    ) : (
        <FaMoon style={{ color: theme.colors.secondary }} />
    );
};

export default ThemeIcon;
