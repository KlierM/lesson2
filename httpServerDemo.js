var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<span style="color:red; font-size:30px;">Hello Technion!</h1>');
}).listen(9615);