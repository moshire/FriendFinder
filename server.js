// Dependencies
// Series of npm packages
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// Seed data for "database"
var friends = require('./app/data/friends');
// =============================================================
var app = express();
var PORT = process.env.PORT || 8000; // Sets an initial port.

//makes static assets in the public folder available (style.css)
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
// ===========================================
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
//============================================
// Start the server to begin listening

 app.listen(PORT, function () {
   console.log('App listening on PORT ' + PORT);
});
