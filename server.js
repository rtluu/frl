require("babel-register");
require.extensions['.scss'] = function () {};

const express = require('express');
const path    = require('path');
const app     = express();
const port    = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views', path.join(__dirname, 'app', 'views'));

// set up ejs for templating. You can use whatever
app.set('view engine', 'jsx');

// Set up Routes for the application
require('./src/routes.jsx');

app.listen(port, function(){
  console.log('App running on port ' + port);
});
