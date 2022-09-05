const express = require('express');
const port = 3002;
const app = express();

app.set('view engine', 'ejs');

// middleware. runs on every request
app.use(express.urlencoded({extended: false}));

const todos = [
  {
    id: '8e5a',
    type: 'movies/shows',
    description: 'Watch Umbrella Academy',
  },
  {
    id: '8cd1',
    type: 'books',
    description: 'Read Lord of the Rings',
  },
];

app.get('/', (req, res) => {
  res.render('index');
});

// GET REQUEST FOR A FORM TO ADD A NEW TODO
app.get('/new', (req, res) => {
  res.render('new');
});

// submit handler for new TODO items
app.post('/new', (req, res) => {
  console.log('req.body.newtodo', req.body.newtodo);

  const idValue = Math.random().toString(36).substring(2,8);

  const newTodo = {
    id: idValue,
    type: 'unknown',
    description: req.body.newtodo
  };

  todos.push(newTodo);

  res.send('New TODO Added!');
  res.end();
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(port, () => {
  console.log(`Server is listening on port=${port}`);
});
