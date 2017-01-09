var fs = require('fs');
console.log('查看目录开始！');

fs.readdir('mkdirtest',function(err,files){
	if (err) {
		return console.error(err);
	}
	files.forEach(function(file){
		console.log(file);
	});
});