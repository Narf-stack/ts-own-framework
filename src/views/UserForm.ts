import { User, UserProps } from "../models/User"
import { View } from "./View"

export class UserForm extends View<User,UserProps> {
    

    eventsMap():{[key:string]:()=> void}{
        return {
            'click:#set-name':this.onSetNameClick,
            'click:#set-age':this.onSetAgeClick
        }
    }

    onButtonClick():void{
        console.log('Hi there')
    }

    onSetAgeClick = ():void =>{
        this.model.setRandomAge()
    }

    onSetNameClick = ():void =>{
        const input = this.parent.querySelector('input')

        if(input){
            const newName = input.value
            this.model.set({name : newName})
        }
    }

    template():string{
        return ` 
            <div>
                <h1> User Form </h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button id='set-name'>Change name </button>
                <button id='set-age'>Set random age </button>
            <div>
        `
    }
}