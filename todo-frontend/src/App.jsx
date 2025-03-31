import React, { useState, useEffect } from 'react';
import './index.css'; // Import Tailwind CSS

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState(null);     // Add error state

    useEffect(() => {
        fetchTodos(); // Fetch todos when component mounts
    }, []); // Empty dependency array means this effect runs only once on mount

    const fetchTodos = async () => {
        setLoading(true); // Start loading
        setError(null);    // Clear any previous errors
        try {
            const response = await fetch('http://localhost:5000/api/todos'); // Backend API endpoint
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setTodos(data);
        } catch (e) {
            console.error("Fetch todos error:", e);
            setError(e); // Set error state
        } finally {
            setLoading(false); // End loading, whether success or error
        }
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = async () => {
        if (newTodo.trim() !== '') {
            try {
                const response = await fetch('http://localhost:5000/api/todos/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: newTodo.trim() }),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setNewTodo(''); // Clear input field
                fetchTodos();    // Re-fetch todos to update the list
            } catch (e) {
                console.error("Add todo error:", e);
                setError(e);
            }
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            fetchTodos(); // Re-fetch todos to update the list
        } catch (e) {
            console.error("Delete todo error:", e);
            setError(e);
        }
    };

    const toggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo._id === id); // Find the todo to update locally for optimistic update feel
        if (!todoToUpdate) return; // Handle if todo is not found locally (unlikely but good practice)

        try {
            const response = await fetch(`http://localhost:5000/api/todos/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: !todoToUpdate.completed }), // Send the opposite of current completed status
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            fetchTodos(); // Re-fetch todos to update the list
        } catch (e) {
            console.error("Toggle complete error:", e);
            setError(e);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading tasks...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">Error loading tasks: {error.message}</div>;
    }


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">My To-Do List</h1>

                {/* Input and Add Button */}
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={newTodo}
                        onChange={handleInputChange}
                        onKeyDown={(e) => { if (e.key === 'Enter') { addTodo(); } }} // Add on Enter key press
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>

                {/* Todo List */}
                {todos.length === 0 ? (
                    <p className="text-gray-500 text-center">No tasks yet. Add some!</p>
                ) : (
                    <ul className="space-y-2">
                        {todos.map(todo => (
                            <li key={todo._id} className="flex items-center justify-between p-3 rounded-md shadow-sm bg-white border border-gray-200">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(todo._id)} // Pass todo._id to toggleComplete
                                    />
                                    <span
                                        className={`ml-2 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}
                                    >
                                        {todo.text}
                                    </span>
                                </div>
                                <button
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                    onClick={() => deleteTodo(todo._id)} // Pass todo._id to deleteTodo
                                    aria-label="Delete task"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default App;