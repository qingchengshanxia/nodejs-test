var buf1 = new Buffer('adc');
var buf2 = new Buffer(3);
buf1.copy(buf2);
console.log(buf1.toString());