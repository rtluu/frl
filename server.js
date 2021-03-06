require("babel-register");
require.extensions['.scss'] = function () {};

const express = require('express');
const path    = require('path');
const app     = express();

//app.use(express.static(path.join(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

// set up ejs for templating. You can use whatever
app.set('view engine', 'jsx');

// Set up Routes for the application
require('./src/routes.jsx');

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});
