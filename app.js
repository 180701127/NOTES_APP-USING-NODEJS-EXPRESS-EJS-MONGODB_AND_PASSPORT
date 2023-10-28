require('dotenv').config();

const express = require('express');
const express_layouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
//const router = require('./server/routes/auth');


const app = express();

const port = 3000 || process.env.PORT;

app.use(session({
    secret: 'Keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    // cookie: {maxAge: new Date (Date.now() + (3600000) ) } // 7 days 604800000
    //Date.now() - 30 * 24 * 60 * 60 * 1000
    

}));

app.use(passport.initialize());
app.use(passport.session());


//Middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

// Connect to Database

connectDB();

// Static Files

app.use(express.static('public'));

// Templating Engine

app.use(express_layouts);
app.set('layout', './layouts/main');

app.set('views', './views');

app.set('view engine', 'ejs');

// Routes

app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/NotesAppRoutes'));
app.use('/', require('./server/routes/DashboardRoutes'));


// Handle 404

app.get('*', function(req,res){
    // res.status(404).send('404 Page Not Found.');
    res.status(404).render('404');
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});

