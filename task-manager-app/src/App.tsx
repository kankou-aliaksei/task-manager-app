// @file src/App.tsx

import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ToastContainer, Flip } from 'react-toastify';
import { ThemeProvider } from './contexts/themeContext';
import { useTheme } from './hooks/useTheme';
import { queryClient } from './queryClient';
import { QueryClientProvider } from 'react-query';
import ToastStyles from './components/ToastStyles';
import MainContent from './components/MainContent';
import GlobalStyles from './themes/globalStyle.tsx';

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <ThemedApp />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

const ThemedApp: React.FC = () => {
    const { theme } = useTheme();

    return (
        <EmotionThemeProvider theme={theme}>
            <GlobalStyles />
            <ToastStyles />
            <MainContent />
            <ToastContainer
                autoClose={false}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                draggable
                transition={Flip}
            />
        </EmotionThemeProvider>
    );
};

export default App;
