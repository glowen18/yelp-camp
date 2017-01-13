var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


var campgrounds = [
  {name: "Wilson Creek", image: "https://farm9.staticflickr.com/8482/8274727348_114ee26227.jpg"},
  {name: "Joshua Park", image: "https://farm4.staticflickr.com/3751/9056163116_be0a1ebed5.jpg"},
  {name: "Mountain Pass", image: "https://farm4.staticflickr.com/3866/18659273934_9dd488d112.jpg"},
  {name: "Wilson Creek", image: "https://farm9.staticflickr.com/8482/8274727348_114ee26227.jpg"},
  {name: "Joshua Park", image: "https://farm4.staticflickr.com/3751/9056163116_be0a1ebed5.jpg"},
  {name: "Mountain Pass", image: "https://farm4.staticflickr.com/3866/18659273934_9dd488d112.jpg"},
  {name: "Wilson Creek", image: "https://farm9.staticflickr.com/8482/8274727348_114ee26227.jpg"},
  {name: "Joshua Park", image: "https://farm4.staticflickr.com/3751/9056163116_be0a1ebed5.jpg"},
  {name: "Mountain Pass", image: "https://farm4.staticflickr.com/3866/18659273934_9dd488d112.jpg"},
  {name: "Wilson Creek", image: "https://farm9.staticflickr.com/8482/8274727348_114ee26227.jpg"},
  {name: "Joshua Park", image: "https://farm4.staticflickr.com/3751/9056163116_be0a1ebed5.jpg"},
  {name: "Mountain Pass", image: "https://farm4.staticflickr.com/3866/18659273934_9dd488d112.jpg"}
]

app.get('/', function(req, res){
  res.render("home");
});

app.get("/campgrounds", function(req, res){
  //Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds",{campgrounds: allCampgrounds});
    }
  })
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  //push new campground into campground array
  var newCampground = {name: name, image: image};
  //Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs")
})



app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("YelpCamp server has started!");
});
