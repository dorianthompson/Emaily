const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//Model class
const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            //initial check to see they is an existing query with this google id
            User.findOne({ googleId: profile.id})
                .then((existingUser) => {
                    if(existingUser){

                    }else{
                        //new model instance and save it to DB
                        new User({ googleId: profile.id }).save();
                    }
                })
        }
    )
);