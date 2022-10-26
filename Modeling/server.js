// make an express server
const express = require('express');
const app = express();
const port = 3000;

// make a server that serves static files
app.use(express.static('public'));

// make a server that listens for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// make a server that responds to requests
app.get('/', (req, res) => res.send('Hello World!'));
