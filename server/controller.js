const model = require("./model");

module.exports = {
  getuserdata(req, res) {
    model.getuser((err, result) => {
      if (err) console.error(err);
      var data = JSON.parse(result);
      var obj = {};
      var { username, password } = req.body;
      if (username === data[0].username && password === data[0].password) {
        obj = {
          code: "200",
          msg: "登陆成功"
        };
      } else {
        obj = {
          code: "401",
          msg: "用户名或密码错误"
        };
      }
      res.send(obj);
    });
  }
};
