import ST from './sequentialSearchST'
import ST2 from './sequentialSearchST'

export default () => {
  const SIZE = 5000

  let map1 = new ST()
  let map2 = new ST2()
  let p1 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.put(i, i.toString())
  }

  let p2 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.get(i)
  }

  let p3 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.delete(i)
  }

  let p4 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.put(i, i.toString())
  }

  let p5 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.get(i)
  }

  let p6 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.delete(i)
  }
  let p7 = performance.now()

  console.log(
    `Sequential search symbol table took ${
      Math.round((p2 - p1) * 100) / 100
    } ms for putting ${SIZE} elements`
  )
  console.log(
    `Sequential search symbol table took ${
      Math.round((p3 - p2) * 100) / 100
    } ms for getting ${SIZE} elements`
  )
  console.log(
    `Sequential search symbol table took ${
      Math.round((p4 - p3) * 100) / 100
    } ms for deleting ${SIZE} elements`
  )

  console.log(
    '----------------------------------------------------------------'
  )

  console.log(
    `Binary search symbol table took ${
      Math.round((p5 - p4) * 100) / 100
    } ms for putting ${SIZE} elements`
  )
  console.log(
    `Binary search symbol table took ${
      Math.round((p6 - p5) * 100) / 100
    } ms for getting ${SIZE} elements`
  )
  console.log(
    `Binary search symbol table took ${
      Math.round((p7 - p6) * 100) / 100
    } ms for deleting ${SIZE} elements`
  )
}
