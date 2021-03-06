var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var events = mongoose.Schema({
    id: Schema.ObjectId,
    title: String,
    sport: String,
    team1:String,
    team2: String,
    category: String,
    date: String,
    time:String,
    link:String,
    round:String,
    winner:String,
    points:String,
    points2:String,
    location: String,
    all:String
});

var Event = mongoose.model('events', events);
module.exports = Event;