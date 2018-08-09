var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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

//! Replaces the removed index pg. Reading JSON pkg. & sends info to the request
app.get('/', function(req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
    res.json({
      name: pkg.name,
      version: pkg.version,
      status: 'up'
    });
});
  //! Will send error msg as JSON to the request if err occurs
  res.json({
    message:res.locals.message,
    error:res.error
  });
});

module.exports = app;
