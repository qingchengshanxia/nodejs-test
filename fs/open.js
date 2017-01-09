var fs = require('fs');

fs.open('input.txt','r+',function(err, fd){
	if (err) {
		return console.error(err);
	}
	console.log('success!');
});