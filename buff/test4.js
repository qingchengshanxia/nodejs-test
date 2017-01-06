var buf1 = new Buffer('lhl');
var buf2 = new Buffer('LHL');
var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());
console.log(buf3);