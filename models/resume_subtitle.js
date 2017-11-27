var mongoose = require("mongoose")
var contentSchema = require("../models/resume_content");

var subtitleSchema = new mongoose.Schema({
	subtitle: String,
	contents: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "content";
		}
	],
});

module.exports = mongoose.model("ResumeSubtitle", subtitleSchema);