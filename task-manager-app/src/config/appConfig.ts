// @file src/config/appConfig.ts

export const APP_CONFIG = {
    api: {
        baseUrl: 'http://localhost:3000/api',
        endpoints: {
            tasks: '/tasks',
        },
    },
    query: {
        tasks: {
            queryKey: 'tasks',
            pageSize: 9,
        },
        defaultOptions: {
            cacheTime: 1000 * 60 * 5,
            staleTime: 1000 * 60 * 1,
        },
    },
    ui: {
        infiniteScroll: {
            thresholdPx: 100,
        },
        search: {
            debounceMs: 500,
        },
    },
};