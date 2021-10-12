import Selection from './selection'
import Insertion from './insertion'
import Shell from './shell'
import Merge from './mergeTopDown'
import Merge2 from './mergeBottomUp'
import Quick from './quick'
import Quick3 from './quick3Way'
import PQ from './priorityQueue'

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

  random()

  const p13 = performance.now()
  Quick.sort(input)
  const p14 = performance.now()
  const s7 = Quick.isSorted(input)

  random()

  const p15 = performance.now()
  Quick3.sort(input)
  const p16 = performance.now()
  const s8 = Quick3.isSorted(input)

  random()

  const pq = new PQ(SIZE)
  const res = []
  const p17 = performance.now()
  for (let i = 0; i < SIZE; i++) {
    pq.insert(input[i])
  }
  for (let i = 0; i < Math.floor(SIZE); i++) {
    res.push(pq.delMax())
  }
  const p18 = performance.now()
  const s9 = Quick3.isSorted(res.reverse())

  console.warn(`[sort] Testing for ${SIZE} cases...`)

  console.log(`Default sort ${s3 ? `took ${Math.round((p6 - p5) * 100) / 100} ms` : 'failed...'}`)
  console.log(`Selection sort ${s1 ? `took ${Math.round((p2 - p1) * 100) / 100} ms` : 'failed...'}`)

  console.log(`Insertion sort ${s2 ? `took ${Math.round((p4 - p3) * 100) / 100} ms` : 'failed...'}`)
  console.log(`Shell sort ${s4 ? `took ${Math.round((p8 - p7) * 100) / 100} ms` : 'failed...'}`)
  console.log(
    `Merge sort (top down) ${s5 ? `took ${Math.round((p10 - p9) * 100) / 100} ms` : 'failed...'}`
  )
  console.log(
    `Merge sort (bottom up) ${s6 ? `took ${Math.round((p12 - p11) * 100) / 100} ms` : 'failed...'}`
  )
  console.log(`Quick sort ${s7 ? `took ${Math.round((p14 - p13) * 100) / 100} ms` : 'failed...'}`)
  console.log(
    `Quick sort (3 ways)${s8 ? `took ${Math.round((p16 - p15) * 100) / 100} ms` : 'failed...'}`
  )
  console.log(
    `Priority Queue${s9 ? `took ${Math.round((p18 - p17) * 100) / 100} ms` : 'failed...'}`
  )
  console.warn('[sort] Testing finished.')
}
