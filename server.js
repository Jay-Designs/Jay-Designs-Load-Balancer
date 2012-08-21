var httpProxy = require('http-proxy');

var addresses = [
  {
	host: 'IP_ADDRESS-1',
	port: 80 //web port on server 1
  },
  {
	host: 'IP_ADDRESS-2',
	port: 80 //web port on server 2
  }
];

httpProxy.createServer(function (req, res, proxy) {

  var target = addresses.shift();

 
  console.log('balancing request to: ', target);
  proxy.proxyRequest(req, res, target);

  addresses.push(target);
}).listen(1024);

