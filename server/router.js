const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/login", (req, res) => {
  controller.getuserdata(req, res);
});

module.exports = router;
