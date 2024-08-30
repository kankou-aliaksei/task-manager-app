// @file src/themes/globalStyle.ts


import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
            * {
                transition: all 0.3s ease;
            }
        `}
    />
);

export default GlobalStyles;
