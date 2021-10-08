import ST from './sequentialSearchST'
import ST2 from './binarySearchST'
import BST from './binarySearchTree'

export default () => {
  const SIZE = 5000

  let map1 = new ST()
  let map2 = new ST2()
  let map3 = new BST()

  // ST1
  let p1 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.put(Math.floor(Math.random() * SIZE), Math.floor(Math.random() * SIZE))
  }

  let p2 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.get(i)
  }

  let p3 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map1.delete(i)
  }

  // ST2

  let p4 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.put(Math.floor(Math.random() * SIZE), Math.floor(Math.random() * SIZE))
  }

  let p5 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.get(i)
  }

  let p6 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map2.delete(i)
  }

  // BST
  let p7 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map3.put(Math.floor(Math.random() * SIZE), Math.floor(Math.random() * SIZE))
  }

  // console.log('BST Min: ' + map3.min())
  // console.log('BST Max: ' + map3.max())

  let p8 = performance.now()
  for (let i = 0; i < SIZE; i++) {
    map3.get(i)
  }
  let p9 = performance.now()

  for (let i = 0; i < SIZE; i++) {
    map3.delete(i)
  }

  let p10 = performance.now()

  console.warn(`[search] Testing for ${SIZE} cases...`)

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

  console.log(
    '----------------------------------------------------------------'
  )

  console.log(
    `Binary search tree took ${
      Math.round((p8 - p7) * 100) / 100
    } ms for putting ${SIZE} elements`
  )
  console.log(
    `Binary search tree took ${
      Math.round((p9 - p8) * 100) / 100
    } ms for getting ${SIZE} elements`
  )

  // console.log(
  //   `Binary search tree took ${
  //     Math.round((p10 - p9) * 100) / 100
  //   } ms for deleting ${SIZE} elements`
  // )

  console.warn('[search] Testing finished.')
}