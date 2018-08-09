var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//* instance created from express module which will be used to describe 
//* and define the behavior of the API.
var app = express();

//* logger is mounted on the express application | Provides detailed logging for errors
app.use(logger('dev'));

//* Parses ONLY the JSON content type in the request body
app.use(express.json());

//* Parses only the URL-encoded request bodies and uses the query string library to do so.
app.use(express.urlencoded({ extended: false }));

//* Parses cookie in the header
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
  //* Will send error msg as JSON to the request if err occurs
  res.json({
    message:res.locals.message,
    error:res.error
  });
});

module.exports = app;
