require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//load mongodb db connection
require('./app_server/models/db');
require("./app_server/config/passport");

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var mhsRouter = require("./app_server/routes/mahasiswa");
var housingRouter = require('./app_server/routes/housing');


//pisah router
var mhsRouter = require('./app_server/routes/mahasiswa');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use ((reg, res, next)=>{
  res.header("Access-Controler-Allow-Origin","*");//Allow all domains
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mahasiswa', mhsRouter);
app.use('/housing', housingRouter);
