var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

var index = require('./routes/index');
var services = require('./routes/services');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

var servicesDataSchema = new Schema({
  name: {type: String, required: true},
  id: {type: Number, required: true, unique: true},
  sliderBackgroundImage: {type: String, required: true},
  featuredImage: {type: String, required: true},
  shortDescription: {type: String, required: true},
  description: {type: String, required: true},
  priceRange: {type: String, required: true}
}, {collection: 'servicesData'});

var teamMembersDataSchema = new Schema({
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  position: {type: String, required: true},
  wordpress: String,
  facebook: String,
  twitter: String,
  instagram: String,
  googleplus: String,
  linkedin: String,
  youtube: String,
  github: String,
  codepen: String
}, {collection: 'teamMembersData'});

servicesData = mongoose.model('servicesData', servicesDataSchema);
teamMembersData = mongoose.model('teamMembersData', teamMembersDataSchema);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/services', services);
app.use('/about', about);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404',{
      title: '404 | Page not found'
    });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Page Not Found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Page Not Found');
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

module.exports = app;