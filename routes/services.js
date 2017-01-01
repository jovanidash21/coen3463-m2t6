var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    servicesData.find()
        .then(function(servicesData) {
            res.render('services', {
                title: 'Services | Screw-IT',
                slidersData: [
                    {
                        "backgroundImageURL": "/images/services/slider_1.png",
                        "headerTitle": "We've got the brain and work ethic",
                        "headerSubtitle": "to solve your tech issues"
                    }
                ],
                servicesData: servicesData
            });
        });
});
router.get('/:serviceID', function(req, res){
    var serviceID = req.params.serviceID;

    if (serviceID >= 1 && serviceID <= 6) {
        servicesData.find()
            .then(function(servicesData) {
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
            });
    }
    else {
        res.render('404',{
            title: '404 | Page not found'
        });
    }
});

module.exports = router;
