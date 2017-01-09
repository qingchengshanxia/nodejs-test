var fs = require('fs');
console.log('准备删除目录！');

fs.rmdir('mkdirtest/test2',function(err){
	if (err) {
		return console.error(err);
	}
	console.log('删除test2成功！');

	fs.readdir('mkdirtest/',function(err,files){
		if (err) {
			return console.error(err);
		}
		files.forEach(function(file){
			console.log(file);
		})
	})
})
