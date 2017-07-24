require("babel-register");
require.extensions['.scss'] = function () {};

const express = require('express');
const path    = require('path');
const app     = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set view path
app.set('views', path.join(__dirname, 'app', 'views'));

// set up ejs for templating. You can use whatever
app.set('view engine', 'jsx');

// Set up Routes for the application
require('./src/routes.jsx');

app.listen(process.env.PORT || 3000, function(){
  console.log('App running on port ' + port);
});
