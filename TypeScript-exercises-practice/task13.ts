import 'date-wizard';

declare module 'date-wizard' {
    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
    export function pad(dateNum: number) : string;
}

//contents of index.d.ts in module-augmentations