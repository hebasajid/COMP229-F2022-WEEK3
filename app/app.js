// Third-Party Modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';

// ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration Module
import { Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js'

// Instantiate Express Application
const app = express();

// Set Up Middlewares

// Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false, 
    resave: false
}));

// Use Routes
app.use('/', indexRouter);

//redirection to other pages by pressing submit button or hyperlinks in home page:

app.get('/home', (req, res) => {
    res.render('home');
   });

app.get('/about', (req, res) => {
    res.render('about');
   });

   app.get('/projects', (req, res) => {
    res.render('projects');
   });

   app.get('/services', (req, res) => {
    res.render('services');
   });

   app.get('/contact', (req, res) => {
    res.render('contact');
   });

export default app;
