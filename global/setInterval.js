function fun(){
	console.log('lll');
}

var t = setInterval(fun, 200);

function cleart(){
	clearInterval(t);
}

setInterval(cleart, 2000);