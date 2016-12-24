var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Screw-IT',
    sliderData: [
      {
        "backgroundImageURL":"/images/slider/index/slide_1.jpg",
        "headerMessage":"Start Your Startup With This Template",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/slider/index/slide_2.jpg",
        "headerMessage":"Take Your Business To The Next Level",
        "buttonMessage":"Get Started"
      },
      {
        "backgroundImageURL":"/images/slider/index/slide_3.jpg",
        "headerMessage":"We Think Different That Others Can't",
        "buttonMessage":"Get Started"
      }
    ]
  });
});

module.exports = router;
