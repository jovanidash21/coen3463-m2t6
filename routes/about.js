var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/about/slide_1.jpg",
                "headerMessage":"Who We Are",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

module.exports = router;
