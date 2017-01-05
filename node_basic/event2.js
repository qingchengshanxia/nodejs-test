var events = require('events').EventEmitter;
var evsome = new events();
	evsome.on('someEvent', function(arg1, arg2){
		console.log('listener1',arg1,arg2);
	});
	evsome.on('someEvent', function(arg1, arg2){
		console.log('listener2',arg1,arg2);
	});
	evsome.emit('someEvent', 'arg1', 'arg2');