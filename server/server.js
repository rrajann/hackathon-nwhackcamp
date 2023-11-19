const express = require('express');
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io');
const app = express();
app.use(cors())

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "https://localhost:3000",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });

    // socket.on('chat message', (msg) => {
    //     console.log('Message: ' + msg);
    //     io.emit('chat message', msg);
    // });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
