// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/api');

var app = express();                    // define our app using express
var port  = process.env.PORT || 3006;   // set our port

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));   // first middleware
app.use(bodyParser.json());                           // second middleware
app.use(cors());                                      // third middleware - cors

app.use('/static',express.static(__dirname + '/public'));

// initialize routes
app.use('/api', routes);                              // fourth middleware

// error handling middleware
app.use(function(err, req, res, next){                // fifth middleware
  console.log(err);
  res.status(422).json({error: err.message});
});

// START THE SERVER
// ===========================================
app.listen(port, function(){
  console.log('Death to the toribios is running on port ' + port + "!!!");
});
