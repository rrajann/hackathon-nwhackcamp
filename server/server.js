const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io');
app.use(cors())

const server = http.createServer(app);

const PORT = 5173

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ['GET', 'POST']
    },
})

io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
