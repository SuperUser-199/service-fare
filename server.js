require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const validator = require('validator');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const {personSchema} = require('./utils/PersonModel');

const app = express();

app.use(express.json())
app.use(cors())

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('MongoDB connected successfully!!')
})
.catch(err => {
    console.log(err)
});

personSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

const Person = new mongoose.model('Person', personSchema)

passport.use(Person.createStrategy());

passport.serializeUser(Person.serializeUser());
passport.deserializeUser(Person.deserializeUser());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

// login
app.post('/login', (req, res) => {
    const person = new Person({
        email: req.body.email,
        password: req.body.password
    });
    req.login(person, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully logging-in user');
        }
    })
})

app.get('/', (req, res) => {
    
})

// signup
app.post('/signup', (req, res) => {
    Person.register({email: req.body.email}, req.body.pwd, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully registered user');
        }
    })
})

const port = process.env.PORT || 8000

app.listen(port, () => `Server running on port ${port}`);