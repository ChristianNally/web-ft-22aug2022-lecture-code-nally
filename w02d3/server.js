const net = require('net');
const port = 8008;

const connectedClients = [];

const server = net.createServer();

server.on('connection', (client) => {
  console.log('client',client);
  console.log('connection received!!');

  connectedClients.push(client);

  client.write("Welcome to my awesome server! ⛵");
  client.setEncoding('utf8');

  client.on('data', function(message){
    if (message.startsWith('setName ')){
      const clientName = message.replace(/setName /, '');
      console.log('setting client name to:', clientName);
      client.name = clientName;
    }
    console.log(`${client.name}: ${message}`);
    for (let particularClient of connectedClients){
      particularClient.write(`${client.name}> ${message}`);
    }
  });

});

server.listen(port, function(){
  console.log(`Server is listening on port ${port}.`);
});
