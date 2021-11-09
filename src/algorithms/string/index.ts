import keyIndexCounting from './radixSort/keyIndexCounting'
import LSD from './radixSort/radixSortLSD'
import MSD from './radixSort/radixSortMSD'

export default () => {
  const SIZE = 50000
  const LENGTH = 8

  console.warn(`[string] Testing for ${SIZE} cases...`)

  // char code for a-z is 97-122
  let s = ''
  for (let i = 0; i < SIZE; i++) {
    let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    s = s.concat(char)
  }

  let p1 = performance.now()
  keyIndexCounting(s)
  let p2 = performance.now()

  let a = []
  for (let i = 0; i < SIZE; i++) {
    let temp = ''
    for (let j = 0; j < LENGTH; j++) {
      let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      temp = temp.concat(char)
    }
    a.push(temp)
  }

  let p3 = performance.now()
  LSD.sort(a, LENGTH)
  let p4 = performance.now()

  a = []
  for (let i = 0; i < SIZE; i++) {
    let temp = ''
    for (let j = 0; j < Math.ceil(Math.random() * 8); j++) {
      let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      temp = temp.concat(char)
    }
    a.push(temp)
  }

  let p5 = performance.now()
  MSD.sort(a, LENGTH)
  let p6 = performance.now()

  console.log(
    `Key index counting took ${
      Math.round((p2 - p1) * 100) / 100
    } ms for string with ${SIZE} chars`
  )
  console.log(
    `LSD took ${
      Math.round((p4 - p3) * 100) / 100
    } ms for ${SIZE} strings with ${LENGTH} chars`
  )
  console.log(
    `MSD took ${
      Math.round((p6 - p5) * 100) / 100
    } ms for ${SIZE} strings with 0 to ${LENGTH} chars`
  )

  console.warn(`[string] Testing finished.`)
}
