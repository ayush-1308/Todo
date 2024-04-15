const { config } = require('dotenv');
const mongoose = require('mongoose');
config();

mongoose.connect(process.env.MongoDB);

const todoSchema = mongoose.Schema({
   title: String,
   description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);
module.exports = {todo};