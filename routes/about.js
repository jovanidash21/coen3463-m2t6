var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About | Screw-IT',
        sliderData: [
            {
                "backgroundImageURL":"/images/slider/about/slide_1.jpg",
                "headerMessage":"Start Your Startup With This Template",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

module.exports = router;
