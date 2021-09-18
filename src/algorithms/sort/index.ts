import Quick from './quickSort'
import Selection from './selectionSort'
import Insertion from './insertionSort'

export default () => {
  const SIZE = 100
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
  random()

  const p3 = performance.now()

  Insertion.sort(input)
  console.log(Insertion.isSorted(input))
  const p4 = performance.now()
  random()
}
