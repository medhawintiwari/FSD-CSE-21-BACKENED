const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const dataFile = path.join(__dirname, 'requests.json');

// Middleware
app.use(express.json());

// Helper to read/write JSON
const readData = () => {
    try {
        if (!fs.existsSync(dataFile)) {
            fs.writeFileSync(dataFile, '[]');
        }
        const data = fs.readFileSync(dataFile, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data:', error);
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

// Routes
// GET /api/requests
app.get('/api/requests', (req, res) => {
    const requests = readData();
    res.json(requests);
});

// GET /api/requests/:id
app.get('/api/requests/:id', (req, res) => {
    const requests = readData();
    const request = requests.find(r => r.id === req.params.id);
    if (request) {
        res.json(request);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
});

// POST /api/requests
app.post('/api/requests', (req, res) => {
    const requests = readData();
    const newRequest = {
        id: Date.now().toString(),
        ...req.body,
        status: 'Open',
        createdAt: new Date().toISOString()
    };
    requests.push(newRequest);
    writeData(requests);
    res.status(201).json(newRequest);
});

// PUT /api/requests/:id
app.put('/api/requests/:id', (req, res) => {
    const requests = readData();
    const index = requests.findIndex(r => r.id === req.params.id);
    
    if (index !== -1) {
        requests[index] = { ...requests[index], ...req.body };
        writeData(requests);
        res.json(requests[index]);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
});

// DELETE /api/requests/:id
app.delete('/api/requests/:id', (req, res) => {
    const requests = readData();
    const index = requests.findIndex(r => r.id === req.params.id);
    
    if (index !== -1) {
        const deleted = requests.splice(index, 1);
        writeData(requests);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ message: 'Request not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
