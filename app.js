var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname))


var indexRoutes = require("./routes/index");
app.use("/", indexRoutes);
// app.use("/projects", projectsRoutes);
app.post("/data", function(req, res){
	console.log('message received %s', req.body.price)
	io.sockets.emit('data', req.body);
})

// app.use(express.static(__dirname + '/public'));   this is the index for stock price

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/d3', express.static(__dirname + '/node_modules/d3/'));
app.use('/nvd3', express.static(__dirname + '/node_modules/nvd3/build/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));



server.listen('5000', function(){
	console.log("The data process server has started!");
});


// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/stock_price')

// var stockSchema = new mongoose.Schema({
// 	price : String,
// 	time: Number,
// });

// var Stock = mongoose.model('AAPL', stockSchema);
// Stock.find({}, function(err, message){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(message);
// 	}
// })