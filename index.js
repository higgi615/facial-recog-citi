var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + "/";

router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/", function(req, res) {
  res.sendFile(path + "Page1.html");
});

router.get("/page2", function(req, res) {
  res.sendFile(path + "Page2.html");
});

router.get("/card", function(req, res) {
  res.sendFile(path + "card.html");
});

router.get("/fastcash", function(req, res) {
  res.sendFile(path + "fastcash.html");
});

app.use("/", router);

app.listen(8000, function() {
  console.log("Live at Port 8000");
});
