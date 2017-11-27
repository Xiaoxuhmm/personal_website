var mongoose = require("mongoose")

var resumeContentSchema = new mongoose.Schema({
	content: String
});

module.exports = mongoose.model("ResumeContent", resumeContentSchema);