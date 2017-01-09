function printHello(){
	console.log('hello');
}

var t = setTimeout(printHello,2000);

clearTimeout(t);