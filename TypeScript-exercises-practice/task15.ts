export class ObjectManipulator<T extends Record<string, any>> {
    protected obj: T;

    constructor(obj: T) {
        this.obj = obj;
    }

    public set<K, S extends string>(key: S, value: K): ObjectManipulator<T & Record<S, K>>{
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get<K extends keyof T>(key: K): T[K] {
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<Omit<T, K>> {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject():T {
        return this.obj;
    }
}