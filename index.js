var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

// Routes for the different pages
router.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "views/Page1.html");
});

router.get("/views/page1", function(req, res) {
  res.sendFile(__dirname + "/" + "views/Page1.html");
});

router.get("/views/page2", function(req, res) {
  res.sendFile(__dirname + "/" + "views/Page2.html");
});

router.get("/views/card", function(req, res) {
  res.sendFile(__dirname + "/" + "views/card.html");
});

router.get("/views/fastcash", function(req, res) {
  res.sendFile(__dirname + "/" + "views/fastcash.html");
});

// Serve the static files
app.use("/public", express.static(__dirname + "/public"));

app.use("/", router);

app.listen(8000, function() {
  console.log("Live at Port 8000");
});
