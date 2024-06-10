const express = require('express');
const path = require('path');
const axios = require('axios'); // Přidání axios
const app = express();

const port = process.env.PORT || 8000
const PROJECT_ROOT = path.join(__dirname, "..")

// IP adresa ESP8266
const esp8266Ip = '192.168.1.137'; // IP adresu ESP8266

app.use(express.static(path.join(PROJECT_ROOT, 'public')))

app.get("/", function(req, res){
    res.sendFile('views/index.html', { root: PROJECT_ROOT } )
});

// Endpoint pro zapnutí zásuvky
app.get('/on', (req, res) => {
    axios.get(`http://${esp8266Ip}/on`)
        .then(response => {
            console.log('Socket turned on:', response.data);
            res.sendStatus(200); // HTTP status 200 (OK)
        })
        .catch(error => {
            console.error('Error turning socket on:', error);
            res.sendStatus(500); // Internal server error
        });
});

// Endpoint pro vypnutí zásuvky
app.get('/off', (req, res) => {
    axios.get(`http://${esp8266Ip}/off`)
        .then(response => {
            console.log('Socket turned off:', response.data);
            res.sendStatus(200); // HTTP status 200 (OK)
        })
        .catch(error => {
            console.error('Error turning socket off:', error);
            res.sendStatus(500); // Internal server error
        });
});

app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname,'views','info.html'));
});

// Start serveru
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
