const fs = require('fs')

module.exports = saveToFile = (path, data) =>
  fs.writeFileSync(path, data, 'utf8')
