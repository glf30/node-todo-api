const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
// Todo.findByIdAndRemove


Todo.findByIdAndRemove('5c3e44fafb8fa64f288f8ade').then((todo) => {
  console.log(todo);
});
