var express = require("express");
var router = express.Router();
// var resumeCategory = require("../models/resume_category"),
//     resumeSubtitle = require("../models/resume_subtitle"),
//     resumeContent = require("../models/resume_content");



router.get("/", function(req, res){
	res.render("index");
});

router.get("/projects", function(req, res){
	res.render("project");
});

router.get("/resume", function(req, res){
	res.render("resume");
});

router.get("/map", function(req, res){
	res.render("map");
});

// router.post("/resume/update", function(req, res){
// 	var categoryName = req.body.category;
// 	var subtitleName = req.body.subtitle;
// 	var newContent = req.body.content;
// 	var Category = mongoose.model("Resume", resumeCategory);

// 	var query = {category: categoryName},
// 		update = {category: categoryName},
// 		options = {upsert: true, new: true, setDefaultsOnInsert: true};
// 	var category;
// 	Category.findOneAndUpdate(query, update, options, function(err, result){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			category = result;
// 		}

// 	});

// 	var Subtitle = mongoose.model("category", resumeContent);
// 	var subtitle;
// 	Subtitle.findOne({subtile: subtitleName}, function(err, foundSubtitle){
// 		if(!foundSubtitle){
// 			Subtitle.create({subtitle: subtitleName})
// 		}
// 	});
// });


module.exports = router;