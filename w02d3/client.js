const net = require('net');
const port = 8008;

const client = net.createConnection({
  port: 80,
  host: '2259-207-102-221-225.ngrok.io'
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
