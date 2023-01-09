const dgram = require('dgram');
const server = dgram.createSocket('udp4');
let app = require('express')();
let Sserver = require('http').createServer(app);
let io = require('socket.io')(Sserver, {
    cors : {
        origin: "*",
        credentials: true,
    }
});

server.bind(1234);

server.on('message', (msg, remote_info) => {
    console.log(
      `server got: ${msg.toString('utf8')} from ${remote_info.address}:${
        remote_info.port
      }`,
    )
    io.emit('message', msg.toString('utf8'))
})
  
server.on('listening', () => {
console.log('someone Connected')
})

Sserver.listen(2006, function(){
    console.log(('Socke IO server listening on port 2006'));
})