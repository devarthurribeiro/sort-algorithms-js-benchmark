const fs = require('fs')

const getDataByFile = file =>
  fs
    .readFileSync('./numbers/' + file, 'utf-8')
    .split(',')
    .map(Number)

function benchmark (algorithm, numbers, mode, type) {
  const data = getDataByFile(`${mode}/${numbers}.dat`)
  
  const start = process.hrtime()

  sortedArray = algorithm(data)

  // uso de memoria
  const used = process.memoryUsage()
  // tempo de execução
  const end = process.hrtime(start)

  return { time: end, memory: used }
}

module.exports = benchmark
