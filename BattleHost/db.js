var schemas = require("./schemas");

async function getUserByName(userName) {
    await schemas.User.findOne({ "username": username });
}

async function getUserByID(id) {
    await schemas.User.findOne({ "id": ID });
}

async function gameWin(id){
    console.log("congrats");
}

async function gameLoss(id){
    console.log("commiserations");
}

module.exports.getUserByName = getUserByName;
module.exports.getUserByID = getUserByID;
module.exports.gameWin = gameWin;
module.exports.gameLoss = gameLoss;