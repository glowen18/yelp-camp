var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
  res.render("home");
});






app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("YelpCamp server has started!");
});
