

const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    job: String,
    position: String,
    userid: {type: mongoose.Schema.Types.ObjectId, ref: "user"}
});

module.exports = mongoose.model("career", careerSchema); 

