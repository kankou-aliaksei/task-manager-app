// @file src/themes/globalStyle.ts

import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';

const GlobalStyles = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
        body {
          background-color: ${theme.colors.backgroundColor};
        }
      `}
        />
    );
};

export default GlobalStyles;