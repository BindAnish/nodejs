const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Home route
app.get('/', (req, res) => {
  res.send("Real-time server chal raha hai 🚀");
});

// Socket connection
io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('chat message', (msg) => {
    console.log('Message:', msg);

    // Send message to all clients
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
