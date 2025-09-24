declare module 'str-utils' {
    export type takeStringReturnString = (value: string) => string;
    export const strReverse : takeStringReturnString;
    export const strToLower : takeStringReturnString;
    export const strToUpper : takeStringReturnString;
    export const strRandomize : takeStringReturnString;
    export const strInvertCase : takeStringReturnString;
}

//contents of declarations/str-utils/index.d.ts;