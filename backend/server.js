const express = require('express');
const app = express();
const port = 3000;

// In-memory data for now
const todos = [
    { id: 1, task: 'Learn Docker', completed: true },
    { id: 2, task: 'Containerize a Node.js App', completed: false },
    { id: 3, task: 'Use Docker Compose', completed: false }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});