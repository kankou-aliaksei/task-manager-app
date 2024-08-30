// @file src/themes/types/theme.type.ts

import '@emotion/react';

interface TThemeColorsTypes {
    primary: string;
    secondary: string;
    backgroundColor: string;
    textColor: string;
    selectedTextColor: string;
    borderColor: string;
    inputBackgroundColor: string;
    inputTextColor: string;
    focusBorderColor: string;
    shadowColor: string;
    buttonTextColor: string;
    iconColor: string;
    filterBackgroundColor: string;
    searchBorderColor: string;
    error: string;
    darkGray: string;
    black: string;
    red: string;
    yellow: string;
    green: string;
}

interface TThemeSpacingTypes {
    small: string;
    medium: string;
    large: string;
}

interface TThemeFontSizeTypes {
    small: string;
    medium: string;
    large: string;
}

declare module '@emotion/react' {
    export interface Theme {
        name: 'default' | 'dark';
        colors: TThemeColorsTypes;
        spacing: TThemeSpacingTypes;
        fontSize: TThemeFontSizeTypes;
    }
}
