const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = process.env.PORT || 8080;

passport.use(
    new LocalStrategy((username, password, done) => {
        if (username !== 'alinco8') {
            return done(null, false);
        } else if (passport !== 'test') {
            return done(null, false);
        } else {
            return done(null, { username, password });
        }
    })
);

app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post(
    '/',
    (req, res, next) => {
        console.log(req);
        next();
    },
    passport.authenticate('local', { session: false, failureRedirect: '/failure' }),
    (req, res) => {
        console.log(req.user);
        res.send('Success');
    }
);

app.listen(port, () => {
    console.log('Server running...');
});
