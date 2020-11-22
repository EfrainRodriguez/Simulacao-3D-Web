const express = require('express')
const path = require('path')
const http = require('http')
const serialcomm = require('serialport')
const socketIO = require('socket.io')

// servidor --------------------------------------------------
const app = express()
app.set('PORT', 9000)
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../client/')))

server.listen(app.get('PORT'), function(){
    console.log("server running on port", app.get('PORT'))
})

// serial communication --------------------------------------
const parser = new serialcomm(
    'COM6',
    { baudRate: 19200}
).pipe(
    new serialcomm.parsers.Readline({delimiter: '\n'})
)

// // web sockets -----------------------------------------------
const io = socketIO.listen(server);

parser.on('data', function(data){
    if(data.includes('ypr')){
        console.log(data)
        io.emit('gyr-data', data)
    }
})