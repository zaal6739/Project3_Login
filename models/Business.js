const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setting up a Model for the mongoose schema to accept datatypes into the DB

let Business = new Schema({
    person_name: {
      type: String
    },
    business_name: {
      type: String
    },
    business_gst_number: {
      type: Number
    },
    person_email: {
      type: String
    }
  },{
      collection: 'business'
  });


  module.exports = mongoose.model("Business", Business);