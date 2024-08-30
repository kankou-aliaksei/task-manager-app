// @file src/contexts/themeContext.tsx

import React, { createContext, useState, useEffect } from 'react';
import { Theme } from '@emotion/react';
import { defaultTheme } from '../themes/default.theme';
import { darkTheme } from '../themes/darkTheme.theme';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const themes = {
    default: defaultTheme,
    dark: darkTheme,
};

const THEME_STORAGE_KEY = 'taskManagerApp_v1_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedThemeName = (localStorage.getItem(THEME_STORAGE_KEY) as keyof typeof themes) || 'default';
        return themes[savedThemeName];
    });

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newThemeName = prevTheme.name === 'default' ? 'dark' : 'default';
            const newTheme = themes[newThemeName];
            localStorage.setItem(THEME_STORAGE_KEY, newThemeName);
            return newTheme;
        });
    };

    useEffect(() => {
        const savedThemeName = localStorage.getItem(THEME_STORAGE_KEY) as keyof typeof themes;
        if (savedThemeName && themes[savedThemeName]) {
            setTheme(themes[savedThemeName]);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };
