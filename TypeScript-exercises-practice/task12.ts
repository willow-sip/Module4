declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type IndexReturningFunction = <T>(input: T[], comparator: Comparator<T>) => number;
    type ElementReturningFunction = <T>(input: T[], comparator: Comparator<T>) => T | null;

    export const getMaxIndex: IndexReturningFunction;
    export const getMinIndex: IndexReturningFunction;
    export const getMedianIndex: IndexReturningFunction;

    export const getMaxElement: ElementReturningFunction;
    export const getMinElement: ElementReturningFunction;
    export const getMedianElement: ElementReturningFunction;

    export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) => number | null;
}

//contents of declarations/str-utils/index.d.ts;