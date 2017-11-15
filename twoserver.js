var http = require('http');

var goodport = 7000;

var badport = 7500;

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

server1.listen(goodport, listening(goodport));
server2.listen(badport, listening(badport));

function listening(port) {

	console.log('Server running, listening on localhost: ' + port);
}

function handleRequest (request,response) {
	var server = request.headers.host.substr(request.headers.host.indexOf(':')+1);
	
	if (server === '7000') {
		response.end('You seem like a decent person.');
	}
	else if (server === '7500') {
		response.end('I don\'t know about you. You seem suspect.');
	}

}