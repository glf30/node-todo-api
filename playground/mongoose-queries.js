const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5c3e207d1410aa3c7e058030';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) =>{
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) =>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '5c3d643d57d65d9816a4e6a1';

User.findById(id).then((user) => {

  if(!user){
    return console.log('User not found');
  }
  console.log('User by ID', user);

}).catch((e) => console.log(e));
