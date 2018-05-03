//betöltjüka függőségeket
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//user shéma létrehozása
const User = new Schema({
    email: String,
    address: String
});
// itt létrehozza a username-t, hash-t és salt-ot
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);