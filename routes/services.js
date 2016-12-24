var express = require('express');
var router = express.Router();
var servicesData = require('../datas/servicesData.json');

router.get('/', function(req, res, next) {
    res.render('services', {
        title: 'Services | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/services/slide_1.jpg",
                "headerMessage":"Our Expertise",
                "buttonMessage":"Get Started"
            }
        ],
        servicesData: servicesData
    });
});

module.exports = router;
