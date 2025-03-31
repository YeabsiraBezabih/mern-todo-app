# MERN To-Do Application

A simple yet effective To-Do application built using the MERN stack (MongoDB, Express, React, Node.js) with a user-friendly and modern interface designed with Tailwind CSS.

## Features

- **Effortless Task Creation:** Quickly add new tasks to your to-do list with a simple input and button or by pressing Enter.
- **Clear Task Visualization:** View all your pending tasks in a clean and organized list.
- **Task Completion Management:** Easily mark tasks as complete with a checkbox, visually striking them through to indicate completion.
- **Task Removal:** Delete tasks from your list with a dedicated delete button when they are no longer needed.
- **Responsive Design:**  Experience a consistent and functional interface across various screen sizes, thanks to the utility-first approach of Tailwind CSS.
- **Backend Data Persistence:**  Tasks are stored in a MongoDB database, ensuring your to-do list persists across sessions.

## Technologies Used

- **Frontend:**
    - [React](https://reactjs.org/) - A declarative, efficient, and flexible JavaScript library for building user interfaces.
    - [Vite](https://vitejs.dev/) - A fast build tool and development server that significantly improves the frontend development experience.
    - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly styling modern web applications without writing custom CSS.
    - [JSX (JavaScript XML)](https://reactjs.org/docs/introducing-jsx.html) - A syntax extension to JavaScript allowing HTML-like syntax within JavaScript code, enhancing React component structure.
- **Backend:**
    - [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment that allows server-side JavaScript execution.
    - [Express](https://expressjs.com/) - A minimalist and flexible Node.js web application framework providing a robust set of features for web and mobile applications.
- **Database:**
    - [MongoDB](https://www.mongodb.com/) - A NoSQL document database, providing scalability and flexibility for data storage.
- **Packages & Libraries:**
    - [Mongoose](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB and Node.js, simplifying database interactions.
    - [cors](https://www.npmjs.com/package/cors) - Node.js package for enabling Cross-Origin Resource Sharing (CORS), allowing frontend and backend on different origins to communicate.
    - [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a `.env` file into `process.env`.

## Setup and Installation

To run this application on your local machine, follow these steps:

**1. Clone the Repository:**

```bash
git clone https://github.com/YeabsiraBezabih/mern-todo-app.git
cd mern-todo-app
```


**2. Backend Setup:**

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` directory.
- Add your MongoDB connection string and optionally a PORT number to the `.env` file.  **Important:** Replace `YOUR_MONGODB_CONNECTION_STRING` with your actual MongoDB connection string. You can use a local MongoDB instance or a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).

```
PORT=5000  # You can change the port if needed, default is 5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

- Start the backend server:

```bash
node server.js
```
(The backend server should now be running at `http://localhost:5000`.)

**3. Frontend Setup:**

```bash
cd ../todo-frontend  # Navigate back to the project root, then to the frontend directory
npm install
```

- Start the frontend development server using Vite:

```bash
npm run dev
```
(The frontend application should now be accessible in your browser, typically at `http://localhost:5173`.)

**4. Access the Application:**

Open your web browser and navigate to the frontend URL (usually `http://localhost:5173`). You should now see the MERN To-Do Application running and connected to your backend.

## Usage

Using the To-Do application is straightforward:

- **Adding a Task:** Type the description of your task in the "Add a new task..." input field. Press the "Add" button or simply press the `Enter` key to add the task to your list.
- **Completing a Task:** To mark a task as complete, click on the checkbox located to the left of the task text. The task will be visually struck through, indicating completion.
- **Deleting a Task:** If you need to remove a task from your list, click the trash can icon located to the right of the task. The task will be permanently deleted from your to-do list and the database.

## Project Structure

```
mern-todo-app/
├── backend/                 # Backend Node.js and Express application
│   ├── node_modules/        # Backend dependencies
│   ├── models/              # Mongoose models for database schema
│   │   └── todo.model.js
│   ├── routes/              # API routes for handling To-Do operations
│   │   └── todos.js
│   ├── server.js            # Main backend server file
│   ├── package.json         # Backend package configuration
│   ├── package-lock.json    # Backend dependency lock file
│   └── .env               # Environment variables (MongoDB URI, Port)
├── todo-frontend/          # Frontend React application built with Vite
│   ├── node_modules/        # Frontend dependencies
│   ├── src/                 # React source code
│   │   ├── App.jsx          # Main application component
│   │   ├── main.jsx         # Entry point for React application
│   │   ├── index.css        # Global CSS, Tailwind directives
│   │   └── assets/          # (Optional) Frontend assets like images
│   ├── public/              # Public assets for Vite (e.g., favicon)
│   ├── index.html           # Main HTML entry file
│   ├── vite.config.js       # Vite configuration file
│   ├── package.json         # Frontend package configuration
│   ├── package-lock.json    # Frontend dependency lock file
│   ├── postcss.config.js    # PostCSS configuration for Tailwind
│   └── tailwind.config.js   # Tailwind CSS configuration file
├── .gitignore             # Specifies intentionally untracked files that Git should ignore
└── README.md                # Project documentation (this file)
```

## Potential Future Enhancements

This is a basic but functional To-Do application. Here are some ideas for future development:

- **User Authentication:** Implement user accounts to allow users to have their own private to-do lists.
- **Task Categories or Tags:** Add the ability to categorize or tag tasks for better organization.
- **Priority Levels:** Allow users to set priority levels for tasks (e.g., High, Medium, Low).
- **Due Dates and Reminders:** Implement due dates and notification reminders for tasks.
- **Search Functionality:** Add a search feature to quickly find tasks within a long list.
- **Improved Styling and UI/UX:** Further enhance the user interface and user experience with more advanced styling and interactions.
- **Testing:** Incorporate unit and integration tests for both frontend and backend components to improve code reliability.


---

**Created by [Yeabsira Bezabih / [Github](https://github.com/YeabsiraBezabih)]**
