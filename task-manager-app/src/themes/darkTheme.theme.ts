// @file src/themes/darkTheme.theme.ts

import { Theme } from '@emotion/react';

export const darkTheme: Theme = {
    name: 'dark',
    colors: {
        primary: '#FFD700',
        secondary: '#B0B0B0',
        backgroundColor: '#1C1C1C',
        textColor: '#E0E0E0',
        selectedTextColor: '#000000',
        borderColor: '#3A3A3A',
        inputBackgroundColor: '#3c3c3c',
        inputTextColor: '#E0E0E0',
        focusBorderColor: '#FFD700',
        shadowColor: '#E0E0E0',
        buttonTextColor: '#000000',
        iconColor: '#b3b3b3',
        filterBackgroundColor: '#3c3c3c',
        searchBorderColor: '#b8b8b8',
        error: '#df684c',
        darkGray: '#333333',
        black: '#000000',
        red: '#d63515',
        yellow: '#bf7d0b',
        green: '#218738',
    },
    spacing: {
        small: '6px',
        medium: '10px',
        large: '24px',
    },
    fontSize: {
        small: '14px',
        medium: '16px',
        large: '20px',
    },
};
