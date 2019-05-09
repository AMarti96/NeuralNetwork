var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var teams = mongoose.Schema({
    telephone: String,
    name: String,
    category:String,
    color: String,
    points:String
});
var Team = mongoose.model('teams', teams);
module.exports = Team;