import Quick from './quickSort'
import Selection from './selectionSort'
import Insertion from './insertionSort'
import Shell from './Shell'
import Merge from './Merge'
import Merge2 from './MergeBottomUp'

export default () => {
  const SIZE = 10000
  const input: number[] = []

  const random = () => {
    for (let i = 0; i < SIZE; i++) {
      input[i] = Math.round(Math.random() * SIZE)
    }
  }

  random()

  const p1 = performance.now()
  Selection.sort(input)
  const p2 = performance.now()

  const s1 = Selection.isSorted(input)

  random()

  const p3 = performance.now()
  Insertion.sort(input)
  const p4 = performance.now()
  const s2 = Insertion.isSorted(input)

  random()

  const p5 = performance.now()
  input.sort((a, b) => a - b)
  const p6 = performance.now()
  const s3 = Insertion.isSorted(input)

  random()

  const p7 = performance.now()
  Shell.sort(input)
  const p8 = performance.now()
  const s4 = Shell.isSorted(input)

  random()

  const p9 = performance.now()
  Merge.sort(input)
  const p10 = performance.now()
  const s5 = Merge.isSorted(input)

  random()

  const p11 = performance.now()
  Merge2.sort(input)
  const p12 = performance.now()
  const s6 = Merge2.isSorted(input)

  console.warn(`[sort] Testing for ${SIZE} cases...`)

  console.log(
    `Default sort ${
      s3 ? `took ${Math.round((p6 - p5) * 100) / 100} ms` : 'failed...'
    }`
  )
  console.log(
    `Selection sort ${
      s1 ? `took ${Math.round((p2 - p1) * 100) / 100} ms` : 'failed...'
    }`
  )

  console.log(
    `Insertion sort ${
      s2 ? `took ${Math.round((p4 - p3) * 100) / 100} ms` : 'failed...'
    }`
  )
  console.log(
    `Shell sort ${
      s4 ? `took ${Math.round((p8 - p7) * 100) / 100} ms` : 'failed...'
    }`
  )
  console.log(
    `Merge sort (top down) ${
      s5 ? `took ${Math.round((p10 - p9) * 100) / 100} ms` : 'failed...'
    }`
  )
  console.log(
    `Merge sort (bottom up) ${
      s6 ? `took ${Math.round((p12 - p11) * 100) / 100} ms` : 'failed...'
    }`
  )
  console.warn('[sort] Testing finished.')
}
