// Create web server

// 1. Load http module
var http = require('http');

// 2. Create web server
var server = http.createServer(function(request, response){
	// 3. Send the HTTP header
	// HTTP status: 200 : OK
	// Content type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 4. Send the response body as "Hello World"
	response.end('Hello World\n');
});

// 5. Bind the server to listen on port 8081
server.listen(8081);

// 6. Print URL for accessing server
console.log('Server running at http://')