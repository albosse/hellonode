var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');
};
var www = http.createServer(handleRequest);
www.listen(80);