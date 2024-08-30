// @file src/themes/config.ts

import { defaultTheme } from './default.theme';
import { darkTheme } from './darkTheme.theme';
import type { Theme } from '@emotion/react';

export const themes: Record<string, Theme> = {
    default: defaultTheme,
    dark: darkTheme,
};
