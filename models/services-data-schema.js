var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var servicesDataSchema = new Schema
(
    {
        name: {type: String, required: true},
        id: {type: Number, required: true, unique: true},
        sliderBackgroundImage: {type: String, required: true},
        featuredImage: {type: String, required: true},
        shortDescription: {type: String, required: true},
        description: {type: String, required: true},
        priceRange: {type: String, required: true}
    },
    {
        collection: 'servicesData'
    }
);

servicesData = mongoose.model('servicesData', servicesDataSchema);