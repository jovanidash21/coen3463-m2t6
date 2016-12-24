var express = require('express');
var router = express.Router();
var servicesData = require('../datas/servicesData.json');

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Screw-IT',
    slidersData: [
      {
        "backgroundImageURL":"/images/index/slide_1.jpg",
        "headerMessage":"Start Your Startup With This Template",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slide_2.jpg",
        "headerMessage":"Take Your Business To The Next Level",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slide_3.jpg",
        "headerMessage":"We Think Different That Others Can't",
        "buttonMessage":"Get Started"
      }
    ],
    servicesData: servicesData
  });
});

module.exports = router;
