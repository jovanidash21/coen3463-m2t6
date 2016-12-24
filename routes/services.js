var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('services', {
        title: 'Services | Screw-IT',
        sliderData: [
            {
                "backgroundImageURL":"/images/services/slide_1.jpg",
                "headerMessage":"Our Expertise",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

module.exports = router;
