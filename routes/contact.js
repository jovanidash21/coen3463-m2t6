var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var xoauth2 = require('xoauth2');

var googleMapsAPI = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAPS_API_KEY;
var slidersData = [
    {
        "backgroundImageURL":"/images/contact/slider_1.png",
        "headerTitle":"Don't be shy and get in touch",
        "headerSubtitle":"contact us now"
    }
];


router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact | Screw-IT',
        slidersData: slidersData,
        googleMapsAPI: googleMapsAPI
    });
});

router.post('/', function(req, res, next){
    var generator = xoauth2.createXOAuth2Generator({
        user: 'screwittechrepair@gmail.com',
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN
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
                slidersData: slidersData,
                googleMapsAPI: googleMapsAPI
            });
        }
        else {
            res.render('contact', {
                title: 'Contact | Screw-IT',
                alertMessage: 'Message sent! Thank you.',
                postError: false,
                slidersData: slidersData,
                googleMapsAPI: googleMapsAPI
            });
        }
        smtpTransport.close();
    });
});
module.exports = router;
