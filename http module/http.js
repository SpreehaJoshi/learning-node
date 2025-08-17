const http = require('http');

//const server = http.createServer();

// server.on('connection', (socket)=>{
//     console.log('New connection');
// })

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.write('Hi!');
        res.end();
    }
});

server.listen(8000);
console.log('Listening on port 8000');