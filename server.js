//

//initialize Express web framework
var express = require('express');
var app = express();

// native nodejs module for resolving paths
var path = require('path');

//mongodb
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride());

//port
var port = process.env.port || 8080;

// set view engine to ejs and set direstories where views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'client','views'));

app.use(express.static(path.resolve(__dirname,'client')));

// set first route
app.get('*', function(req,res){
	res.render('index.ejs');
});


// api
var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

// make app listen incoming requests
app.listen(port, function(){
	console.log('SERVER IS RUNNING... PORT:' + port);
});