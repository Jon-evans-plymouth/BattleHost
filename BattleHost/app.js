'use strict';
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

var http = require("http");
var port = 9000;

var mongoose = require("mongoose");
var schemas = require("./schemas");


console.log('Hello world ------------------------------');



//Server operations
var server = http.createServer(function (request, response) {
    //var user = new schemas.User();
    response.write("wow");
    response.end();
});

server.listen(port, function () {
    console.log("listening on 9000-----------------------------");


});

mongoose.connect(dbUrl, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log("connected to db----------------");
});

//Database operations
//MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
//    if (err) throw err;
//    console.log("Database created! ----------------------------");

//    var dbo = db.db("battleHostDB");

//    dbo.createCollection("connections", function (err, res) {
//        if (err) throw err;
//        console.log("Collection created. ----------------------------");

//        db.close();
//    });
//});


