const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//set current folder 
app.use(express.static(path.join(__dirname, './')));

//when client connects
io.on('connection', socket => {
    console.log('new connection')
});

const PORT = 5500 || process.env.PORT;

server.listen(PORT, () => console.log(`Server at ${PORT}`));