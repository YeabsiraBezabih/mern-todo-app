const express = require('express');
const router = express.Router();
let Todo = require('../models/todo.model'); // Import the Todo model

// GET all todos
router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST a new todo
router.route('/add').post((req, res) => {
    const text = req.body.text;
    const newTodo = new Todo({ text });

    newTodo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// GET todo by ID (if needed later - for editing, etc.)
router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE todo by ID
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE todo by ID (for toggling completion)
router.route('/update/:id').put(async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        todo.completed = req.body.completed; // Assuming you send { completed: true/false } in the request body

        await todo.save();
        res.json('Todo updated!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;