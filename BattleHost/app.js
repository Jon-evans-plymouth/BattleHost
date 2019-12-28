'use strict';
var MongoClient = require('mongodb').MongoClient;
var dbUrl = "mongodb://localhost:27017/battleHost";

console.log('Hello world');

MongoClient.connect(dbUrl, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});