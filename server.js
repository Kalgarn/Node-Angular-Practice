//

//initialize Express web framework
var express = require('express');
var app = express();

// native nodejs module for resloving pahs
var path = require('path');

//port
var port = process.env.port || 8080;

// set view engine to ejs and set direstories where views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,'client','views'));

app.use(express.static(path.resolve(__dirname,'client')));

// set first route
app.get('/', function(req,res){
	res.render('index.ejs');
});

// make app listen incoming requests
app.listen(port, function(){
	console.log('SERVER IS RUNNING... PORT:' + port);
});