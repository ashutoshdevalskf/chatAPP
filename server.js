require('dotenv').config();
const http = require('http');
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
const server = http.createServer(app);
const socketIo = require('socket.io');
const io = socketIo(server);

// Socket.IO logic

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes setup
app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/chatrooms', require('./routes/chatRoomRoutes.js'));
app.use('/api/messages', require('./routes/messageRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

const port =  3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
