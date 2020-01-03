'use strict';
var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

var http = require("http");
var port = 9000;

console.log('Hello world ------------------------------');



//Server operations
var server = http.createServer(function (request, response) {
    
});

server.listen(port, function () {
    console.log("listening -----------------------------");
});

//Database operations
MongoClient.connect(dbUrl, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log("Database created! ----------------------------");

    var dbo = db.db("battleHostDB");

    dbo.createCollection("connections", function (err, res) {
        if (err) throw err;
        console.log("Collection created. ----------------------------");

        db.close();
    });
});