const express = require('express');
const http = require('http');
const path = require('path');

let app = express();

let server = http.Server(app);

const io = require('socket.io')(server);
const port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
  console.log('new connection made');

  socket.on('message', (data) => {
    console.log(data.msg);
    socket.emit('message', {
      msg: 'Loud and clear :)'
    });
  });
});

server.listen(port, () => {
  console.log("Listening on port " + port);
});