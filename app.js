var http = require('http');
var gpio = require('./gpio');
var fs = require('fs');

var PIN = 7;

var errHandler = function (err){
    console.log('has error:');
    console.log(err);
};

http.createServer(function (req, res){
    if(req.url == '/led/open') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        gpio.write(PIN, 1, errHandler);
        res.end('open')
        return;
    }

    if(req.url == '/led/close'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        gpio.write(PIN, 0, errHandler);
        res.end('close');
        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('index.html'));
}).listen(1984);

console.log('server runn at 1984');