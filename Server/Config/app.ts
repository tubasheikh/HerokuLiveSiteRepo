// modules to support the express server 
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

// module to connect to MongoDB
import mongoose from "mongoose";

// user model
import User from '../Models/user';


// app config 
import indexRouter from '../Routes/index';
import usersRouter from '../Routes/users';

// modules to support authentication 
import session from "express-session"; // cookie-based sesion
import passport from 'passport'; // authentication support
import passportLocal from 'passport-local'; // authentication strategy
import flash from 'connect-flash'; // authentication messaging

// authentication model and strategy alias
let localStrategy = passportLocal.Strategy; // alias

const app = express();


// db config
import * as DBConfig from './db';
mongoose.connect(DBConfig.RemoteURI);

const db = mongoose.connection;
db.on("error", function(){
  console.error("Connection Error!");
});
db.once("open", function(){
  console.log(`Connected to MongoDB at ${DBConfig.HostName}`);
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

// middleware config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// set up express session
app.use(session({
  secret: DBConfig.SessionSecret,
  saveUninitialized: false,
  resave:false
}));

// initialise flash
app.use(flash());

// intitialise passport 
app.use(passport.initialize());
app.use(passport.session());

// implement auth strategy 
passport.use(User.createStrategy());

// serilaise and deserialse user
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;