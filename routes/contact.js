var express = require('express');
var router = express.Router();

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

module.exports = router;
