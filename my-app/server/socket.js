let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server, {
    cors : {
        origin: "*",
        credentials: true,
    }
});

io.on('connection', socket=>{
    socket.on('message', ({data})=>{
        console.log(data);
        io.emit('newData', ({newData : 1}))
    })
})

server.listen(2006, function(){
    console.log(('Socke IO server listening on port 2006'));
})