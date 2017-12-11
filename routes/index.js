var express = require("express");
var router = express.Router();
// var resumeCategory = require("../models/resume_category"),
//     resumeSubtitle = require("../models/resume_subtitle"),
//     resumeContent = require("../models/resume_content");

var MongoClient = require('mongodb').MongoClient;

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

router.get("/map/Manhattan", function(req,res){
	MongoClient.connect("mongodb://localhost:27017/boutiques", function (err, db) {
    	var markersData = [];
    	db.collection('new_york', function (err, collection) {
        	collection.find().toArray(function(err, items) {
            	if(err) throw err; 
            	items.map(function(md){
            		var location = md.location;
            		var name = md.name;
            		var address = md.address;
            		var suit = {
            			'location': location,
						'markerData': {
							'label': name,
							'content': address,
						}
            		}
					markersData.push({
						'suit':suit
					});
				});
				res.send(markersData);
        	});
    	});
    	db.close();          
	});
})


//   var init_labels = ['Sydney', 'New York', 'Changsha', 'Singapore', 'Hanoi',
//                   'Mexico City', 'Cancún', 'Perth'];
//   var init_urls = ['https://en.wikipedia.org/wiki/Sydney',
//                 'https://en.wikipedia.org/wiki/New_York_City',
//                 'https://en.wikipedia.org/wiki/Changsha',
//                 'https://en.wikipedia.org/wiki/singapore',
//                 'https://en.wikipedia.org/wiki/Hanoi',
//                 'https://en.wikipedia.org/wiki/Mexico_City',
//                 'https://en.wikipedia.org/wiki/Canc%C3%BAn',
//                 'https://en.wikipedia.org/wiki/Perth'
//                 ]
//   var init_locations = [
//       {lat: -33.868, lng: 151.209},
//       {lat: 40.712, lng: -74.006},
//       {lat: 28.228, lng:112.938},
//       {lat: 1.352, lng:103.819},
//       {lat: 21.027, lng:105.834},
//       {lat: 19.432, lng: -99.133},
//       {lat: 21.161, lng: -86.851},
//       {lat: -31.950, lng: 115.860}
//     ]

router.get("/map/myloc", function(req, res){
	var locationSuits = [
		{
			suit:{
				location: {lat: -33.868, lng: 151.209},
				markerData:{
			      	label: 'New York',
			   		content: 'Here is the location of New York city. lat: -33.868, lng: 151.209',
			   		url: 'https://en.wikipedia.org/wiki/New_York_City'
			    }
			}
		},
		{
			suit:{
				location: {lat: 40.712, lng: -74.006},
				markerData:{
			      	label: 'Sydney',
			   		content: 'Here is the location of Sydney. lat: -33.868, lng: 151.209',
			  		url: 'https://en.wikipedia.org/wiki/Sydney'
			    }
			}
		},
		{
			suit:{
				location: {lat: 28.228, lng:112.938},
				markerData:{
			      	label: 'Changsha',
			      	content: 'Here is the location of Changsha. lat: 28.228, lng:112.938',
			      	url: 'https://en.wikipedia.org/wiki/Changsha'
			    }
			}
		}
	]
	res.status(200).send(locationSuits);
})


module.exports = router;