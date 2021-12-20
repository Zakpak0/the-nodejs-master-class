/*
* Example TCP (Net) server
* Listen to port 6000 and send the word pong to client
*/

// Dependencies
const net = require('net')

// Create the server
let server = net.createServer(function (connection) {
    // Send the word "pong";
    let outboundMessage = 'pong'
    connection.write(outboundMessage);

    // When the client writes something, log it out
    connection.on('data', function (inboundMessage) {
        let messageString = inboundMessage.toString();
        console.log("I wrote " + outboundMessage + " and they said " + messageString)
    })
})

server.listen(6000)