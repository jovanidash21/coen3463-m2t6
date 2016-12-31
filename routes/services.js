var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('services', {
        title: 'Services | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/services/slider_1.png",
                "headerTitle":"We've got the brain and work ethic",
                "headerSubtitle":"to solve your tech issues"
            }
        ]
    });
});
router.get('/:serviceID', function(req, res){
    var serviceID = req.params.serviceID;

    if (serviceID >= 1 && serviceID <= 6) {

        var serviceData = servicesData[serviceID - 1];
        var name =  serviceData.name;
        var sliderBackgroundImage = serviceData.sliderBackgroundImage;
        var featuredImage = serviceData.featuredImage;
        var description = serviceData.description;
        var priceRange = serviceData.priceRange;

        res.render('services-profile', {
            title: name,
            name: name,
            sliderBackgroundImage: sliderBackgroundImage,
            featuredImage: featuredImage,
            description: description,
            priceRange: priceRange
        });
    }
});

module.exports = router;
