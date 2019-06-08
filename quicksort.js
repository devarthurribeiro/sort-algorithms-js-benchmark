function particao (items, inferior, superior) {
  var pivo = items[Math.floor((inferior + superior) / 2)] // elemento do meio como pivo

  while (inferior <= superior) {
    while (items[inferior] < pivo) {
      inferior++
    }
    while (items[superior] > pivo) {
      superior--
    }
    if (inferior <= superior) {
      ;[items[inferior], items[superior]] = [items[superior], items[inferior]]
      inferior++
      superior--
    }
  }

  return inferior
}

function quicksort (vetor, inferior, superior) {
  if (vetor.length > 1) {
    var pivo = particao(vetor, inferior, superior)
    if (inferior < pivo - 1) {
      quicksort(vetor, inferior, pivo - 1)
    }
    if (pivo < superior) {
      quicksort(vetor, pivo, superior)
    }
  }
  return vetor
}

module.exports = quicksort
