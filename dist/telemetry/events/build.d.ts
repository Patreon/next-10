declare type EventTypeCheckCompleted = {
    durationInSeconds: number;
    typescriptVersion: string | null;
    inputFilesCount?: number;
    totalFilesCount?: number;
    incremental?: boolean;
};
export declare function eventTypeCheckCompleted(event: EventTypeCheckCompleted): {
    eventName: string;
    payload: EventTypeCheckCompleted;
};
declare type EventBuildCompleted = {
    durationInSeconds: number;
    totalPageCount: number;
    hasDunderPages: boolean;
    hasTestPages: boolean;
};
export declare function eventBuildCompleted(pagePaths: string[], event: Omit<EventBuildCompleted, 'totalPageCount' | 'hasDunderPages' | 'hasTestPages'>): {
    eventName: string;
    payload: EventBuildCompleted;
};
declare type EventBuildOptimized = {
    durationInSeconds: number;
    totalPageCount: number;
    staticPageCount: number;
    staticPropsPageCount: number;
    serverPropsPageCount: number;
    ssrPageCount: number;
    hasDunderPages: boolean;
    hasTestPages: boolean;
    hasStatic404: boolean;
    hasReportWebVitals: boolean;
    headersCount: number;
    rewritesCount: number;
    redirectsCount: number;
    headersWithHasCount: number;
    rewritesWithHasCount: number;
    redirectsWithHasCount: number;
};
export declare function eventBuildOptimize(pagePaths: string[], event: Omit<EventBuildOptimized, 'totalPageCount' | 'hasDunderPages' | 'hasTestPages'>): {
    eventName: string;
    payload: EventBuildOptimized;
};
export {};
