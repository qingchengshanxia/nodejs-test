var fs = require('fs');
var data = 'www.qingchengshanxia.com////';

var writeIn = fs.createWriteStream('read.txt');

	writeIn.write(data,'UTF8');

	writeIn.end();

	writeIn.on('finish',function(){
		console.log('写入完成！');
	})

	writeIn.on('error',function(){
		console.log(err.stack);
	})

	console.log('over!');