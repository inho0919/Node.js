var http = require('http');

var hostname = '0.0.0.0';
var port = 5050;

http.createServer(function(req, res)
{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(port, hostname);

console.log('Server running at http://'+hostname+':'+port);