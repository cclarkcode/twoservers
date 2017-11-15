var http = require('http');

var goodport = 7000;

var badport = 7500;

function goodrequest (request,response) {

	response.end('You seem like a decent person.');
}

function badrequest (request,response) {

	response.end('I don\'t know about you. You seem suspect.');
}


var server1 = http.createServer(goodrequest);
var server2 = http.createServer(badrequest);

server1.listen(goodport, listening(goodport));
server2.listen(badport, listening(badport));


function listening(port) {

	console.log('Server running, listening on localhost: ' + port);
}