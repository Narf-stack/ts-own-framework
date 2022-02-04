interface UserProps{
    name?: string,
    age?:number
}

// type Callback = ()=>{} // type allias for fonction that return a object
type Callback = ()=> void // type allias for fonction that return nothing

export class User{
    events: {[key:string]: Callback[]} = {}

    constructor(private data: UserProps){}

    get(propName: string): (string|number){

        return this.data[propName];
    }

    set(update:UserProps):void{
        Object.assign(this.data, update)
    }

    on(eventName:string, callback:Callback):void{   
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers

    }
}