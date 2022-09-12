const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 8080;

// // middleware
app.use(express.urlencoded({ extended: false }));

//app.use(cookieParser());
app.use(cookieSession({
  name: 'cookiemonster',
  keys: ['my secret key', 'yet another secret key']
}));

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// user database
const users = {
  alice: {
    username: 'alice',
    password: '5678'
  },
  jstamos: {
    username: 'jstamos',
    password: '$2b$10$7bOWn.DFgs9HkhzsTpuD1u6pReqRouddq.rO5xSKdWMZGXRehkS8e'
  },
};

// GET routes

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
  const username = req.session.username;

  if (!username) {
    return res.redirect('/login');
  }

  const user = users[username];
  if (!user) {
    return res.redirect('/register');
  }

  console.log('users:',users);
  res.render('protected', { user });
});

// // POST routes
app.post('/login', (req, res) => {
  const testUsername = req.body.username;
  const testPassword = req.body.password;

  const user = users[testUsername];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  bcrypt.compare(testPassword, users[testUsername].password)
  .then((result) => {
    if (result) {
//      res.cookie('username', user.username);
      req.session.username = user.username;
      res.redirect('/protected');
    } else {
      return res.status(401).send('Password incorrect');
    }
  });

});

app.post('/register', (req, res) => {
  const newUsername = req.body.username;
  const newPassword = req.body.password;

  bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(newPassword,salt);
    })
    .then((hash) => {
      // insert this hashed password as part of the new user's object
      users[newUsername] = {
        username: newUsername,
        password: hash
      };
      console.log('users',users);
    });

  res.redirect('/login');
});

app.post('/logout', (req, res) => {
  // res.clearCookie('username');
  req.session = null;
  res.redirect('/login');
});

// Catch All Route for GET
app.get('*', (req, res) => {
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
