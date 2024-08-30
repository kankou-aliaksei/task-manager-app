// @file src/themes/default.theme.ts

import { Theme } from '@emotion/react';

export const defaultTheme: Theme = {
    name: 'default',
    colors: {
        primary: '#FFD700',
        secondary: '#808080',
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
        selectedTextColor: '#000000',
        borderColor: '#808080',
        inputBackgroundColor: '#ffffff',
        inputTextColor: '#000000',
        focusBorderColor: '#FFD700',
        shadowColor: '#808080',
        buttonTextColor: '#000000',
        iconColor: '#8f8f8f',
        filterBackgroundColor: '#f3f3f3',
        searchBorderColor: '#818181',
        error: '#e42400',
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
