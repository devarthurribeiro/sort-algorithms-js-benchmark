const fs = require('fs')

function benchmark (algorithm, numbers, mode, type) {
  
  const start = process.hrtime()

  sortedArray = algorithm(numbers)

  // uso de memoria
  const used = process.memoryUsage()
  // tempo de execução
  const end = process.hrtime(start)

  return { time: end, memory: used }
}

module.exports = benchmark
