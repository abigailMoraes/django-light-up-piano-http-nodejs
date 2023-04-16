// import { createServer } from "http";

// createServer((req, res) => {
//   res.write("Hello World!");
//   res.end();
// }).listen(process.env.PORT);
import { Server } from "socket.io";
import http from "http";

const server = http.createServer;
const io = new Server(server);
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("pythonToServer", (data) => {
    console.log("data received" + JSON.stringify(data));
    io.emit("serverToReact", data);
    console.log("emitted data");
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
