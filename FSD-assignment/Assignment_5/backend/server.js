const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let notes = [
    { id: 1, title: 'First Note', content: 'This is the first note. You can search or download it.' },
    { id: 2, title: 'Frontend Stack', content: 'We are using React, HTML, CSS for the frontend.' },
    { id: 3, title: 'Backend Stack', content: 'ExpressJS is running the backend server.' }
];

// Get all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// Add a new note
app.post('/api/notes', (req, res) => {
    const newNote = {
        id: Date.now(),
        title: req.body.title || 'Untitled',
        content: req.body.content || ''
    };
    notes.push(newNote);
    res.status(201).json(newNote);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
    const { id } = req.params;
    notes = notes.filter(n => n.id !== parseInt(id));
    res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
