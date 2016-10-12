var PORT = process.env.PORT;
var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/about', function(req, res) {
    res.send('About us');  
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Starting server at " + process.env.IP + " on port " + process.env.PORT);
});

io.on('connection', (socket) => {
  // Test code so we so Socket.io worked
  socket.emit('greet', { hello: 'Hey there browser!' });
  
  socket.on("keydown", function(key){
      console.log("keyup: " + key + " from " + socket._id);
  });
    
  socket.on("keyup", function(key){
      console.log("keyup: " + key + " from " + socket._id);
  });
  
  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });
});

