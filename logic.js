// 1.	Logic Test

// Terdapat sebuah array of strings sebagai berikut:

// ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']

// Buatlah sebuah fungsi yang mengelompokkan sebuah array of strings di atas menjadi kumpulan anagram, dengan expected result sebagai berikut:

// [
//   [ 'cook' ],
//   [ 'save', 'aves', 'vase' ],
//   [ 'taste', 'state' ],
//   [ 'map' ]
// ]

function filterKata(kata) {
  const filter = {}
  for (let i = 0; i < kata.length; i++) {
    const kataSekarang = kata[i]
    const kataUrut = kataSekarang.split('').sort().join('')
    if (kataUrut in filter) {
      filter[kataUrut].push(kataSekarang)
    } else {
      filter[kataUrut] = [kataSekarang]
    }
  }

  const hasil = []
  for (const key in filter) {
    hasil.push(filter[key])
  }
  return hasil
}

console.log(filterKata(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']))

