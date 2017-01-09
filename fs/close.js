var fs = require('fs');
var buf = new Buffer(1024);
console.log('准备！');

fs.open('test.txt','r+',function(err,fd){
	if (err) {
		return console.error(err);
	}
	console.log('success');
	console.log('准备读取文件');

	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if (err) {
			console.log(err);
		}

		if (bytes>0) {
			console.log(buf.slice(0,bytes).toString());
		}

		fs.close(fd,function(err){
			if (err) {
				console.log(err);
			}
			console.log('文件关闭成功!');
		});
	});
});