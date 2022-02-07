

export class Attributes<T>  {
    constructor(private data: T){}

    // <K extends keyof T> is a constraint limiting the type K can be , 169
    //  K = keyOfObject
    get = <K extends keyof T>(key: K): T[K] => {  // bound 173
        return this.data[key];
    }

    set(update:T):void{
        Object.assign(this.data, update)
    }
}

