import { search } from './search'
import searchKMP from './searchKMP'
import searchBM from './searchBM'

export default () => {
  const SIZE = 150000
  // const pat = 'www' // Chance of 3 letters are 1 / 26**3 ~= 1 / 17,500
  const pat = 'wwww' // Chance of 4 letters are 1 / 26**4 ~= 1 / 450,000
  // const pat = 'wwwwww' // Chance of 5 letters are 1 / 26**5 ~= 1 / 12,000,000

  const random = (size: number) => {
    let s = ''
    for (let i = 0; i < size; i++) {
      let char = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      s = s.concat(char)
    }
    return s
  }

  let s = random(SIZE)

  let p1 = performance.now()
  let res1 = search(pat, s)
  let p2 = performance.now()

  let p3 = performance.now()
  let kmp = new searchKMP(pat)
  let res2 = kmp.search(s)
  let p4 = performance.now()

  let p5 = performance.now()
  let bm = new searchBM(pat)
  let res3 = kmp.search(s)
  let p6 = performance.now()

  console.log(
    `Brutal search took ${
      Math.round((p2 - p1) * 100) / 100
    } ms for string with ${SIZE} chars, locate result at ${res1}th char`
  )
  console.log(
    `KMP search took ${
      Math.round((p4 - p3) * 100) / 100
    } ms for string with ${SIZE} chars, locate result at ${res2}th char`
  )
  console.log(
    `BM search took ${
      Math.round((p6 - p5) * 100) / 100
    } ms for string with ${SIZE} chars, locate result at ${res3}th char`
  )
}
