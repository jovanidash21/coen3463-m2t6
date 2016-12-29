var express = require('express');
var router = express.Router();
var servicesData = require('../datas/servicesData.json');

router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/about/slider_1.png",
                "headerTitle":"Let's have a look on who we are",
                "headerSubtitle":"to get to know us",
                "buttonMessage":"Get Started"
            }
        ],
        servicesData: servicesData
    });
});

module.exports = router;
