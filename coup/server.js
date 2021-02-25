const server = require('express')();
const http = require('http').createServer(server);
const io = require('socket.io')(http);

const MIN_PLAYERS = 2;
let players = [];
let firstPlayer;
let turn = 0;

io.on('connection', function (socket) {
    console.log('A user connected: ' + socket.id);
    // io.emit('createId', socket.id);
    io.to(socket.id).emit('createId', socket.id);

    players.push(socket.id);

    if (players.length === MIN_PLAYERS)
    {
        io.to(players[0]).emit('startGame', players[turn]);
    };

    //Turn system: First to join is first to start turn
    if (turn > players.length)
    {
        turn = 0;
    };

    socket.on('chooseAction', function(playerTurn) {
        io.to(players[turn]).emit('chooseAction', playerTurn);
    });

    socket.on('actionChosen', function(actionClicked) {
        socket.broadcast.emit('actionChosen', actionClicked);
        turn++;
    });

    socket.on('disconnect', function () {
        console.log('A user disconnected: ' + socket.id);
        players = players.filter(player => player !== socket.id);
    });
});

http.listen(3000, function () {
    console.log('Server started!');
});