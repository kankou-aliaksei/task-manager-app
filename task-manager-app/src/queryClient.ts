// src/queryClient.ts

import { QueryClient } from 'react-query';
import { APP_CONFIG } from './config/appConfig';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            ...APP_CONFIG.query.defaultOptions,
        },
    },
});