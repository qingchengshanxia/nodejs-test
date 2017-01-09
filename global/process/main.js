process.on('exit',function(code){
	setTimeout(function(){
		console.log('改代码不会执行');
	},0);

	console.log('退出代码为：', code);
});

console.log('doing!');