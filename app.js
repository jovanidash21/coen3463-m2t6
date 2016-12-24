var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var index = require('./routes/index');
var products = require('./routes/products');
var services = require('./routes/services');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/products', products);
app.use('/services', services);
app.use('/about', about);
app.use('/contact', contact);

app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;

  smtpTrans = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: "me@gmail.com",
      pass: "application-specific-password"
    }
  });

  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'screwittechrepair@gmail.com',
    subject: 'Website contact form',
    text: req.body.message
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    //Email not sent
    if (error) {
      res.render('contact', { title: 'Screw-IT - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
    }

    else {
      res.render('contact', { title: 'Screw-IT - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
