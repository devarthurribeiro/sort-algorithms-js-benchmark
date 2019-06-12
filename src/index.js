const fs = require('fs')
// gerador de numeros
const generateNumbers = require('./generator')

// importação dos algoritmos
const quicksort = require('./quicksort')
const insertionSort = require('./insertionSort')
const mergesort = require('./mergesort')
const bubbleSort = require('./bubblesort')
const selectionsort = require('./selectionsort')

// funções auxiliares
const benchmark = require('./benchmark')
const saveToFile = require('./saveToFile')

const stf = d => JSON.stringify(d)
const getDataByFile = file =>
  fs
    .readFileSync('./numbers/' + file, 'utf-8')
    .split(',')
    .map(Number)

// variação de numeros para o teste
const NUMBERS = ['10000', '100000']
// const NUMBERS = ['10', '50', '10']

// variação de ordenaçao
const VARIANTS = ['asc', 'desc', 'random']

// agrupamento de algoritmos
const algorithms = {
  quicksort,
  insertionSort,
  mergesort,
  bubbleSort,
  selectionsort
}

// função para gerar numeros
function setupNumbers () {
  VARIANTS.forEach(mode => NUMBERS.forEach(size => generateNumbers(size, mode)))
}

// função para rodar os testes
function runBenchmark () {
  Object.keys(algorithms).forEach(algorithm => {
    VARIANTS.forEach(mode =>
      NUMBERS.forEach(size => {
        if (fs.existsSync(`./results/data-${algorithm}-${mode}-${size}.json`)) {
          console.log('Finalizado', algorithm, mode, size)
          return
        }
        const numbers = getDataByFile(`${mode}/${size}.dat`)
        let totalData = []
        for (let i = 0; i < 25; i++) {
          let result = benchmark(algorithms[algorithm], numbers, mode, algorithm)
          result.algorithm = algorithm.toLowerCase()
          result.mode = mode
          result.size = size
          totalData.push(result)
          console.log(i, 'de', 25, algorithm, mode, size)
        }
        console.log('Finalizado', algorithm, mode, size)
        saveToFile(`./results/data-${algorithm}-${mode}-${size}.json`, stf(totalData))
      })
    )
  })
  // salvando resultado dos testes
  //saveToFile('./results/data.json', stf(totalData))
}

setupNumbers()
runBenchmark()
