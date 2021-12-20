/*
* Example UDP Server
* Creating a UDP datagram server listening on 6000
*/

// Dependencies
const dgram = require('dgram')

// Create a server
let server = dgram.createSocket('udp4')

server.on('message', function (messageBuffer, sender) {
    // Do something with incoming message or do somethign with sender who has identified
    let messageString = messageBuffer.toString();
    console.log(messageString)
})

// Bind to 600
server.bind(6000)