import { User } from './models/User'
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

const user = new User({id: 1});
user.fetch()
