var server = require('./server');
var router = require('./rounter');

server.start(router.route);