var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/about', function(req, res) {
    res.send('About us');  
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Starting server at " + process.env.IP + " on port " + process.env.PORT);
});

io.on('connection', (socket) => {
  socket.emit('greet', { hello: 'Hey there browser!' });
  socket.on('respond', (data) => {
    console.log(data);
  });
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
});

