var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "Page1.html");
});

router.get("/page1", function(req, res) {
  res.sendFile(__dirname + "/" + "Page1.html");
});

router.get("/page2", function(req, res) {
  res.sendFile(__dirname + "/" + "Page2.html");
});

router.get("/card", function(req, res) {
  res.sendFile(__dirname + "/" + "card.html");
});

router.get("/fastcash", function(req, res) {
  res.sendFile(__dirname + "/" + "fastcash.html");
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);

app.listen(8000, function() {
  console.log("Live at Port 8000");
});
