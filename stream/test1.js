var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('read.txt');

	readerStream.setEncoding('UTF8');
	
	readerStream.on('data',function(chunk){
		data += chunk;
	})

	readerStream.on('end',function(){
		console.log(data);
	})

	readerStream.on('error',function(){
		console.log(err.stack);
	})

	console.log('over!');