const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Todo = mongoose.model('Todo', todoSchema); // 'Todo' is the model name, will create 'todos' collection in MongoDB

module.exports = Todo;