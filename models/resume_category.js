var mongoose = require("mongoose")
var subtileSchema = require("resume_subtitle");

var subtitle = mongoose.model()
var categorySchema = new mongoose.Schema({
	category: String,
	contents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "subtitle";
	}],
});

module.exports = mongoose.model("ResumeCategory", subtitleSchema);