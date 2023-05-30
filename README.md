# Angular App Websocket

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Getting started

To get started with the project, follow these steps:

Clone the repository:

    git clone https://github.com/brunocardon/angular-app-websocket    

Navigate to the project directory:

    cd angular-app-websocket

Install the dependencies:

    npm install


## Starting the WebSocket server

The WebSocket server is built using PHP and utilizes some modules to work its magic:

- **Ratchet**: This library is used to generate the WebSocket server. For more information, refer to their documentation at [socketo.me](http://socketo.me/);
- **Monolog**: This library is used for logging events for debugging purposes. You can find more information at [github.com/Seldaek/monolog](https://github.com/Seldaek/monolog).

To start the server, run the following command from the bin directory:

    cd bin
    php -f index.php


The server will start and can be accessed at `ws://localhost:8080`.

When the server starts, it will log `APP_LOG.INFO: Server started` in the `/bin/logs/app.log` file. 
Each connection and communication with the client will create a new line in the log file.

**Make sure you have PHP installed on your system before running the server.**

---

## Building and starting the Angular app

To start the Angular app locally, access `http://localhost:4200/` in your browser.

    ng start

For better WebSocket testing, you can start the application to access it in your local network.

    ng serve --host 0.0.0.0 --port 4200

To access it across your local network, use the following syntax:

    http://<IP address of the server machine>:4200

---

## Testing
Once everything is set up, the application provides a text field to send data to 
the server and receive data back from the server. 
The real magic happens when you open multiple clients. 
When one client sends information, all other clients will receive a 
notification about it.

---

This application was created for study purposes only ;).