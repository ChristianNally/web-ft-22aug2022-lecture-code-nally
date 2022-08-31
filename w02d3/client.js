const net = require('net');
const port = 19866;

const client = net.createConnection({
  port: port,
  host: '2.tcp.ngrok.io'
});

// set the encoding to utf-8
client.setEncoding('utf8');

process.stdin.on('data', function(message){
  client.write(message);
});

client.on('connect', () => {
  console.log(`client is connected to server`);
});

client.on('data', (message) => {
  console.log('Server:', message);
});

client.on('end', () => {
  console.log('Client disconnected from server');
});

console.log('client main thread finished.')
