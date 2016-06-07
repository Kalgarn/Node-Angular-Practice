//

//initialize Express web framework
var express = require('express');
var app = express();

// socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http);

// native nodejs module for resolving paths
var path = require('path');

//mongodb
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride());

//port
var port = process.env.port || 8080;

// set view engine to ejs and set direstories where views will be stored in
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

var users = [];
io.on('connection', function (socket) {
    var username = '';
    console.log('a user connected!');
    
    socket.on('request-users', function () {
        socket.emit('users', {users: users});
    });
    
    socket.on('message', function (data) {
        io.emit('message', {username: username, message: data.message});
    });
    
    socket.on('add-user', function (data) {
        if (users.indexOf(data.username) === -1) {
            io.emit('add-user0', {
                username: data.username
            });
            username = data.username;
            users.push(data.username);
        } else {
            socket.emit('prompt-username', {
                message: 'user already exists'
            });
        }
 
    });
    
    socket.on('disconnect', function () {
        console.log(username + 'user disconnected');
        users.splice(users.indexOf(username), 1);
        io.emit('remove-user', {username: username});
    
    });
});

// set first route
app.get('*', function (req, res) {
	res.render('index.ejs');
});


// api
var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

// make app listen incoming requests
//app.listen
http.listen(port, function () {
	console.log('SERVER IS RUNNING... PORT:' + port);
});