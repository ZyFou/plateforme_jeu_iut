const express = require('express');
const app = express();

// Set up the server
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Set up Socket.io
const io = require('socket.io')(server);

// Handle socket connections
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle chat messages
  socket.on('chat message', (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);

    // Broadcast the message to all connected clients
    io.emit('chat message', { id: socket.id, msg: msg });
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});