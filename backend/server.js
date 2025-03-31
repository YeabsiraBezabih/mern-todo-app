const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use port from .env or default to 5000
const todosRouter = require('./routes/todos'); // Import todos routes

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

// MongoDB Connection
const uri = process.env.MONGODB_URI; // Get MongoDB URI from .env file
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
app.use('/api/todos', todosRouter);
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});