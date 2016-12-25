var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/contact/slide_1.jpg",
                "headerMessage":"Get in touch. Don't be shy.",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

router.post('/send', function(req, res){
    var generator = require('xoauth2').createXOAuth2Generator({
        user: '{username}',
        clientId: '{Client ID}',
        clientSecret: '{Client Secret}',
        refreshToken: '{refresh-token}',
        accessToken: '{cached access token}' // optional
    });

    // listen for token updates
    // you probably want to store these to a db
    generator.on('token', function(token){
        console.log('New token for %s: %s', token.user, token.accessToken);
    });

    // login
    var transporter = nodemailer.createTransport(({
        service: 'gmail',
        auth: {
            xoauth2: generator
        }
    }));

    // send mail
    transporter.sendMail({
        from: 'sender@example.com',
        to: 'receiver@example.com',
        subject: 'hello world!',
        text: 'Authenticated with OAuth2'
    }, function(error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent');
        }
    });
});

module.exports = router;
