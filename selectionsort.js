function selectionsort (vetor) {
  for (var i = 0; i < vetor.length; i++) {
    var indiceMenor = i
    for (j = i; j < vetor.length; j++) {
      if (vetor[indiceMenor] > vetor[j]) {
        indiceMenor = j
      }
    }
    if (i != indiceMenor) {
      // troca
      ;[vetor[i], vetor[indiceMenor]] = [vetor[indiceMenor], vetor[i]]
    }
  }
}

module.exports = selectionsort
