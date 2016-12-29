var express = require('express');
var router = express.Router();
var servicesData = require('../datas/servicesData.json');

router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/about/slide_1.jpg",
                "headerTitle":"Who we are?",
                "headerSubtitle":"Get to know us.",
                "buttonMessage":"Get Started"
            }
        ],
        servicesData: servicesData
    });
});

module.exports = router;
