const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3001;

const server = http.createServer((req, res) => {

  const route = `${req.method} ${req.url}`;
  console.log('route',route);

  let filePath = '';

  switch (route) {
    case 'GET /':
      filePath = path.join(__dirname, 'views', 'index.html');
      console.log(`retrieving file from ${filePath}`);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          res.statusCode = 500;
          res.write(err.message);
        } else {
          res.statusCode = 200;
          res.write(fileContent);
        }
        res.end();
      });
      break;
    case 'GET /todos':
      filePath = path.join(__dirname, 'views', 'todos.js');
      console.log(`retrieving file from ${filePath}`);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          res.statusCode = 500;
          res.write(err.message);
        } else {
          res.statusCode = 200;
          res.write(fileContent);
        }
        res.end();
      });
      break;
    case 'GET /monkeyfuzz':
      res.write('Hello, Monkey!');
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.write('404 page not found');
      res.end();
      break;
  }

});

server.listen( port, () => {
  console.log(`Server is listening on port 3001`);
});