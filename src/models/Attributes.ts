

export class Attributes<T>  {
    constructor(private data: T){}

    // <K extends keyof T> is a constraint limiting the type K can be , 169
    get<K extends keyof T>(key: K): T[K]{  // K = keyOfObject
        return this.data[key];
    }

    set(update:T):void{
        Object.assign(this.data, update)
    }
}

