const express = require("express");
const router = require("./router");
const bodyparser = require('body-parser')
const app = express();

app.listen(1234, () => {
  console.log("http://192.168.31.119 :1234");
});

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())


app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(router);
