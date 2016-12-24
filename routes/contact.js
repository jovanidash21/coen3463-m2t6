var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'Contact | Screw-IT',
        sliderData: [
            {
                "backgroundImageURL":"/images/slider/contact/slide_1.jpg",
                "headerMessage":"Start Your Startup With This Template",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

module.exports = router;
