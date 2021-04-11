const fs = require('fs')
module.exports = {
  getuser(callback) {
    fs.readFile('./users.json', 'utf-8', (err, result) => {
      callback(err, result)
    })
  },
  getgoods(callback) {
    fs.readFile('./data.json', 'utf-8', (err, result) => {
      callback(err, result)
    })
  }
}
