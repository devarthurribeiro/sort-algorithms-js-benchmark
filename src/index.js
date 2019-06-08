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

// variação de numeros para o teste
const NUMBERS = ['10000', '100000', '1000000']
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
  const totalData = []
  Object.keys(algorithms).forEach(algorithm => {
    VARIANTS.forEach(mode =>
      NUMBERS.forEach(size => {
        for (let i = 0; i < 25; i++) {
          let result = benchmark(algorithms[algorithm], size, mode, algorithm)
          result.algorithm = algorithm.toLowerCase()
          result.mode = mode
          result.size = size
          totalData.push(result)
        }
        console.log('Finalizado', algorithm, mode, size)
      })
    )
  })
  // salvando resultado dos testes
  saveToFile('./results/data.json', stf(totalData))
}

setupNumbers()
runBenchmark()
