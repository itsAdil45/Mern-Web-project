var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require("express-session");
var sessionAuth = require("./middleware/sessionAuth");
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var orders = require('./routes/api/orders')
var usersRouter = require('./routes/api/users');

var recipesRouter = require('./routes/api/recipes');


var config = require('config');
var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(
  session({
    secret: config.get("sessionSecret"),
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter,sessionAuth);
app.use('/api/orders',orders);
app.use('/api/users', usersRouter,sessionAuth);
app.use('/api/recipes', recipesRouter,sessionAuth);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoose.connect(config.get("db"),{useNewUrlParser:true})
.then(()=>console.log("connected"))
.catch((error)=>console.log(error.message));
module.exports = app;
