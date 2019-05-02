/*
Import
*/
    // Mongoose
    const mongoose = require('mongoose')
    const { Schema } = mongoose;
//


/*
Mongoose schema definition
Declare each property and type needed for the schema
*/
    const mySchema = new Schema({
        // Schema.org
        '@context' : { type: String, default: 'http://schema.org' },
        '@type' : { type: [ String ], default: ['Event'] },

        // Object data
        name: String,
        image: String,
        description: String,
        url: String,
        startDate: Date,
        endDate: Date,
        offers:{
            price: String,
            availability: String,
            priceCurrency: String,
            url: String,
            validFrom: String
        },
        location: {
            // Schema.org
            '@context' : { type: String, default: 'http://schema.org' },
            '@type' : { type: [ String ], default: ['MovieTheater'] },
            
            // Object data
            name: String,
            image: String,
            priceRange: String,
            telephone: String,
            address : {
                addressLocality : String,
                addressRegion : String,
                postalCode : String,
                addressCountry : String,
                streetAddress : String
            }
        }
    })
//


/*
Export
Create a const that use the Mongoose schema to declare an objet model
*/
    const MyModel = mongoose.model('event', mySchema);
    module.exports = MyModel;
//