const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 8000;

// Enable CORS
app.use(cors());

io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for custom events from the client
  socket.on("clientMessage", (message) => {
    console.log("Received client message:", message);

    // Emit a response back to the client
    socket.emit("serverMessage", `Server: Received your message - ${message}`);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
