const express = require('express');
const app = express();
const port = 3000;

// Serve the index.html file
app.use(express.static('views'));

// Endpoint for turning the socket on
app.get('/on', (req, res) => {
    // Here you would add code to turn the socket on
    console.log('Socket turned on');
    res.sendStatus(200); // Send HTTP status 200 (OK)
});

// Endpoint for turning the socket off
app.get('/off', (req, res) => {
    // Here you would add code to turn the socket off
    console.log('Socket turned off');
    res.sendStatus(200); // Send HTTP status 200 (OK)
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
