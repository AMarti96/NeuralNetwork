var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var news = mongoose.Schema({
    title: String,
    body: String
});
var New = mongoose.model('news', news);
module.exports = New;