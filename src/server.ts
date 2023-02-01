import express from 'express';
import expressSession from 'express-session';
import passport from 'passport';
import { setPassport } from './utils/auth';



const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(
    expressSession({
        secret: 'SecretKey',
        resave: false,
        saveUninitialized: false,
    })
);
setPassport(app, passport);
app.use(passport.initialize());
app.use(passport.session());

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post(
    '/login',
    (req, res, next) => {
        console.log('POSTED');
        next();
    },
    passport.authenticate('local', {
        successRedirect: '/?success',
        failureRedirect: '/?failure',
    })
);
app.post('/get/id', (req, res) => {
    const id = req.user?.id;
    res.json(id);
});
app.post('/get/session', (req, res) => {
    const session = req.session;
    res.json(session);
});

app.listen(port, () => {
    console.log('Server running...');
});
