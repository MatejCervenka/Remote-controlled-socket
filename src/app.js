const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const gpio = require('rpi-gpio');

// GPIO pin connected to your relay
const relayPin = 17; // For example, GPIO pin 17

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'views','index.html'));
});

// Open the GPIO pin
gpio.setup(relayPin, gpio.DIR_OUT, (err) => {
    if (err) {
        console.error('Error opening GPIO pin:', err);
        return;
    }
    console.log('GPIO pin opened successfully');
});

// Endpoint for turning the socket on
app.get('/on', (req, res) => {
    // Turn the relay on
    gpio.write(relayPin, true, (err) => {
        if (err) {
            console.error('Error turning relay on:', err);
            res.sendStatus(500); // Internal server error
            return;
        }
        console.log('Socket turned on');
        res.sendStatus(200); // Send HTTP status 200 (OK)
    });
});

// Endpoint for turning the socket off
app.get('/off', (req, res) => {
    // Turn the relay off
    gpio.write(relayPin, false, (err) => {
        if (err) {
            console.error('Error turning relay off:', err);
            res.sendStatus(500); // Internal server error
            return;
        }
        console.log('Socket turned off');
        res.sendStatus(200); // Send HTTP status 200 (OK)
    });
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname,'views','info.html'));
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});