// @file src/components/ToastStyles.tsx

import React from 'react';
import { Global, css } from '@emotion/react';
import { useTheme } from '../hooks/useTheme';

const ToastStyles: React.FC = () => {
    const { theme } = useTheme();

    return (
        <Global
            styles={css`
                .Toastify__toast {
                    background-color: ${theme.colors.inputBackgroundColor};
                    color: ${theme.colors.textColor};
                }

                .Toastify__close-button {
                    color: ${theme.colors.textColor};
                }
            `}
        />
    );
};

export default ToastStyles;
