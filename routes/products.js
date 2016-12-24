var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('products', {
        title: 'Products | Screw-IT',
        slidersData: [
            {
                "backgroundImageURL":"/images/products/slide_1.jpg",
                "headerMessage":"Our Awesome Products",
                "buttonMessage":"Get Started"
            }
        ]
    });
});

module.exports = router;
