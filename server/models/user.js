let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


// create a model class
let userModel = mongoose.Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'user name is required'
    },
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'display name is required'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    /*
        password: {
        type: String,
        default: '',
        trim: true,
        required: 'password is required'
    },
    */
},
{
    collection: 'users'
}
);

let options = ({missingPasswordError: 'Wrong / Missing Password'});

userModel.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', userModel);
