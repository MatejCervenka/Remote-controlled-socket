# Remote Controlled Socket with Web Interface
## Technical Documentation
### Project Description
This application allows remote control of a socket using an ESP8266 microcontroller and a web interface. Users can turn the socket on and off via a web interface, which communicates with the microcontroller via HTTP requests.
### Technology
- **Node.js:** We use Node.js as the runtime environment for our server-side code.
- **Express.js:** Framework for Node.js that helps us create web servers.
- **rpi-gpio:** Library for GPIO control, compatible with ESP8266, allowing us to turn the socket on and off.
- **HTML/CSS/JavaScript:** For creating the user interface, we use standard web technologies.
### Installation and Running
1. Download the source code of the project from the [GitHub](https://github.com/MatejCervenka/Remote-controlled-socket) repository.
2. Open a terminal and navigate to the project directory.
3. Install the necessary dependencies using the command `npm install`
    - `npm install express` `npm install rpi-gpio`
4. Start the server-side of the application using the command node server.js.
5. Open a web browser and go to the address https://s-cervenka.dev.spsejecna.cz to access the web interface.
### API Endpoints
- `GET /on` Turns the socket on.
- `GET /off` Turns the socket off.
## User Documentation
Turning the Socket On and Off
1. Open a web browser and navigate to the address https://s-cervenka.dev.spsejecna.cz.
2. On the screen, you will see two buttons: `Turn On` and `Turn Off `.
3. Clicking the `Turn On` button will turn the socket on.
4. Clicking the `Turn Off` button will turn the socket off.
