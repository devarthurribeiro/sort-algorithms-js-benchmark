const fs = require('fs')

const DEFAULT_PATH = './numbers/'

const saveToFile = (path, data) => fs.writeFileSync(path, data)

function generateNumbers (max, mode) {
  const path = `${DEFAULT_PATH + mode}/${max}.dat`

  if (fs.existsSync(path)) return

  const data = new Array()

  for (var index = 0; index < max; index++) {
    if (mode == 'asc') data.push(index)
    else if (mode == 'desc') data.push(max - index)
    else data.push(Math.floor(Math.random() * max))
  }

  saveToFile(path, data)
}

module.exports = generateNumbers
