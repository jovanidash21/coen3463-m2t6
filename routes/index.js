var express = require('express');
var router = express.Router();
var servicesData = require('../data/servicesData.json');

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Screw-IT: Tech Repair',
    slidersData: [
      {
        "backgroundImageURL":"/images/index/slider_1.png",
        "headerTitle":"We provide fast repair service",
        "headerSubtitle":"For your home or business",
        "buttonLink":"/services",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slider_2.png",
        "headerTitle":"Are your networks got you down?",
        "headerSubtitle":"We fix it for you and be connected again",
        "buttonLink":"/services/6",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slider_3.png",
        "headerTitle":"Are you running out of printer ink?",
        "headerSubtitle":"We've got you refilled",
        "buttonLink":"/services/3",
        "buttonMessage":"Get Started"
      }
    ],
    servicesData: servicesData
  });
});

module.exports = router;
