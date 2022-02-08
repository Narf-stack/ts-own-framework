import { User, UserProps } from "../models/User"
import { View } from "./View"

export class UserForm extends View<User,UserProps> {
    

    eventsMap():{[key:string]:()=> void}{
        return {
            'click:#set-name':this.onSetNameClick,
            'click:#set-age':this.onSetAgeClick,
            'click:.save-model': this.onSaveClick,
        }
    }

    onButtonClick():void{
        console.log('Hi there')
    }

    onSaveClick =():void =>{
        this.model.save() 
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
                <input  placeholder="${this.model.get('name')}"/>
                <button id='set-name'>Change name </button>
                <button id='set-age'>Set random age </button>
                <button class='save-model'> Save </button>
            <div>
        `
    }
}