function insertionSort (vector) {
  for (let i = 1; i < vector.length; i++) {
    let current = vector[i]
    let previus = i - 1

    while (previus >= 0 && vector[previus] > current) {
      vector[previus + 1] = vector[previus]
      previus--
    }
    vector[previus + 1] = current
  }
  return vector
}

module.exports = insertionSort
