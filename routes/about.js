var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  teamMembersData.find()
    .then(function(teamMembersData){
      res.render('about', {
        title: 'About | Screw-IT',
        slidersData: [
          {
            "backgroundImageURL":"/images/about/slider_1.png",
            "headerTitle":"Let's have a look on who we are",
            "headerSubtitle":"to get to know us"
          }
        ],
        teamMembersData: teamMembersData
      });
    });
});

module.exports = router;