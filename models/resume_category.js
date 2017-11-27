var mongoose = require("mongoose")
var subtileSchema = require("resume_subtitle");

var categorySchema = new mongoose.Schema({
	category: String,
	contents: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "subtitle";
	}],
});

module.exports = mongoose.model("ResumeCategory", subtitleSchema);