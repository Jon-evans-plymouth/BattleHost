var mongoose = require("mongoose");

//schema
var User = new mongoose.model("User", {
    id: String,
    username: String,
    wins: Number,
    losses: Number
});

module.exports.User = User;