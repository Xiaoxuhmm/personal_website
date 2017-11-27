var express = require("express");
var router = express.Router();


router.get("/projects", function(req, res){
	res.render("project");
});

router.get("projects", function(req, res){
	res.render("project");
});

module.exports = router;