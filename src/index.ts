import { User } from './models/User'

const user = new User({name: 'test', age: 20});

user.on('click',()=>{
    console.log('hey')
})
user.on('change',()=>{
    console.log('mouaaaa')
})

user.trigger('click')
user.trigger('blop')
user.trigger('change')
// console.log(user)