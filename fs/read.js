var fs = require('fs');
var buf = new Buffer(1024);
console.log('准备!');

fs.open('test.txt','r+',function(err,fd){
	if (err) {
		return console.error(err);
	}
	console.log('文件打开成功!');
	console.log('准备读取文件：');
	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if (err) {
			console.log(err);
		}
		console.log(fd);
		console.log(bytes+'字节被读取');

		if (bytes>0) {
			console.log(buf.slice(0,bytes).toString());
		}
	});
});