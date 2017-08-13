var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamMembersDataSchema = new Schema
(
  {
    name: {type: String, required: true},
    avatar: {type: String, required: true},
    position: {type: String, required: true},
    wordpress: String,
    facebook: String,
    twitter: String,
    instagram: String,
    googleplus: String,
    linkedin: String,
    youtube: String,
    github: String,
    codepen: String
  },
  {
    collection: 'teamMembersData'
  }
);

teamMembersData = mongoose.model('teamMembersData', teamMembersDataSchema);