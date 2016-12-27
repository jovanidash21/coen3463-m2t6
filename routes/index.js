var express = require('express');
var router = express.Router();
var servicesData = require('../datas/servicesData.json');

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Screw-IT',
    slidersData: [
      {
        "backgroundImageURL":"/images/index/slide_1.jpg",
        "headerTitle":"We provide fast repair service",
        "headerSubtitle":"For your home or business",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slide_2.jpg",
        "headerTitle":"Networks got you down?",
        "headerSubtitle":"We fix it for you and be connected again",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/index/slide_3.jpg",
        "headerTitle":"Running out of ink?",
        "headerSubtitle":"We've got you refilled",
        "buttonMessage":"Get Started"
      }
    ],
    servicesData: servicesData
  });
});

module.exports = router;
