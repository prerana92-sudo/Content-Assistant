const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files from the frontend directory
app.use(express.static('frontend'));

// Route to serve the assistant.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'assistant.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
