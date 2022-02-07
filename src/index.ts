import { User,UserProps } from './models/User'
import { Collection } from './models/Collection'
import axios from 'axios'

// const user = new User({name: 'test', age: 20});
// user.on('click',()=>{
//     console.log('hey')
// user.trigger('click')
// // console.log(user)


// axios.post('http://localhost:3000/users',{
//     name: 'test',
//     age: 20
// })

// axios({
//     method: 'post',
//     url: 'http://locallhost:3000/users',
//     headers: { 
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json' 
//     },
//     data: {
//         name: 'test',
//         age: 20
//     }
//   });

//const user = new User({name: 'totezezt',age:20});

// user.events.on('click',()=>{
//     console.log('hey') 
// })
// user.events.trigger('click')

// user.save()

const collection = new Collection<User,UserProps>(
    'http://localhost:3000/users',
    (json: UserProps) => User.buildUser(json)
)


collection.on('change', ()=>{
    console.log(collection)
})

collection.fetch()