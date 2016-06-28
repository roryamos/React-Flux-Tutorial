var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var livereload = require("gulp-livereload");

//controllers
var schoolController = require("./controllers/schoolController");

//Express request pipeline
var app = express();

app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json());
app.use("/api", schoolController);

app.listen(7777, function(){
	console.log("Started listening on port", 7777);
	livereload();
});

mongoose.connect("mongodb://192.168.99.100/schoolfinder");