var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var xoauth2 = require('xoauth2');

var slidersData = [
    {
        "backgroundImageURL":"/images/contact/slide_1.jpg",
        "headerTitle":"Get in touch",
        "headerSubtitle":"Don't be shy."
    }
];

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact | Screw-IT',
        slidersData: slidersData
    });
});

router.post('/', function(req, res, next){
    var generator = xoauth2.createXOAuth2Generator({
        user: 'screwittechrepair@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
    });
    generator.on('token', function(token){
        console.log('New token for %s: %s', token.user, token.accessToken);
    });
    smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            xoauth2: generator
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: 'Screw-IT | Visitor ✔ <screwittechrepair@gmail.com>',
        to: 'screwittechrepair@gmail.com',
        subject: 'Contact Us | Screw-IT ',
        text: "Visitor's Contact Form Details... Name: "+req.body.name+" Email: "+req.body.email+" Message: "+req.body.message,
        html: "<p>Visitor's Contact Form Details:</p><ul><li>Name: "+req.body.name+"</li><li>Email: "+req.body.email+"</li><li>Message: "+req.body.message+"</li></ul>"
    };
    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            res.render('contact', {
                title: 'Contact | Screw-IT',
                alertMessage: 'Error occured! Message not sent. Please try again!',
                postError: true,
                slidersData: slidersData
            });
        }
        else {
            res.render('contact', {
                title: 'Contact | Screw-IT',
                alertMessage: 'Message sent! Thank you.',
                postError: false,
                slidersData: slidersData
            });
        }
        smtpTransport.close();
    });
});
module.exports = router;
