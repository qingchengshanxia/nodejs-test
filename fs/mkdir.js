var fs = require('fs');
console.log('start!');

fs.mkdir('mkdirtest/test',function(err){
	if (err) {
		return console.error(err);
	}
	console.log('success!');
});