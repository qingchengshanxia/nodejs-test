var buf1 = new Buffer('abc');
var buf2 = new Buffer('dhs');
var result = buf1.compare(buf2);

console.log(result);

if (result<0) {
	console.log('buf1小于buf2');
} else if(result==0){
	console.log('=');
} else {
	console.log('buf1大于buf2');
}
