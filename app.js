var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.render("home");
});

app.get('/campgrounds', function(req, res){
  var campgrounds = [
    {name: "Wilson Creek", image: "https://farm9.staticflickr.com/8482/8274727348_114ee26227.jpg"},
    {name: "Joshua Park", image: "https://farm4.staticflickr.com/3751/9056163116_be0a1ebed5.jpg"},
    {name: "Mountain Pass", image: "https://farm4.staticflickr.com/3866/18659273934_9dd488d112.jpg"}
  ]

  res.render("campgrounds",{campgrounds: campgrounds});
});






app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("YelpCamp server has started!");
});
