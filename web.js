var fs = require('fs');
var express = require('express');

var ifile = 'index.html';

if (!fs.existsSync(ifile)) {
	console.log('%s does not exist. Exiting.', ifile)
	process.exit(1);
}
var index = fs.readFileSync(ifile);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
