import { UF } from './quickFind'
import { UF as UF2 } from './quickUnion'
import { UF as UF3 } from './weightQuickUnion'
import { UF as UF4 } from './weightedQuickUnionWithPathCompression'

export default () => {
  const SIZE = 2500
  const TIMES = 2
  const input = []
  for (let i = 0; i < SIZE * TIMES; i++) {
    input[i] = [
      Math.round(Math.random() * SIZE),
      Math.round(Math.random() * SIZE)
    ]
  }

  const uf1 = new UF(SIZE + 1)
  const uf2 = new UF2(SIZE + 1)
  const uf3 = new UF3(SIZE + 1)
  const uf4 = new UF4(SIZE + 1)

  const p1 = performance.now()

  for (let i = 0; i < input.length; i++) {
    uf1.union(input[i][0], input[i][1])
  }

  const p2 = performance.now()

  for (let i = 0; i < input.length; i++) {
    uf2.union(input[i][0], input[i][1])
  }

  const p3 = performance.now()

  for (let i = 0; i < input.length; i++) {
    uf3.union(input[i][0], input[i][1])
  }

  const p4 = performance.now()

  for (let i = 0; i < input.length; i++) {
    uf4.union(input[i][0], input[i][1])
  }

  const p5 = performance.now()
  console.log('[unionFind] Testing...')

  console.log(
    `Quick find method:
Tooked ${Math.round((p2 - p1) * 100) / 100} ms for ${SIZE * TIMES} runs. 
There are ${uf1.count} unions in ${SIZE} points.
`
  )

  console.log(
    `Quick union method:
Tooked ${Math.round((p3 - p2) * 100) / 100} ms for ${SIZE * TIMES} runs. 
There are ${uf2.count} unions in ${SIZE} points.
`
  )
  console.log(
    `Weighted Quick union method:
Tooked ${Math.round((p4 - p3) * 100) / 100} ms for ${SIZE * TIMES} runs. 
There are ${uf3.count} unions in ${SIZE} points.
`
  )
  console.log(
    `Weighted Quick union with path compression method:
Tooked ${Math.round((p5 - p4) * 100) / 100} ms for ${SIZE * TIMES} runs. 
There are ${uf4.count} unions in ${SIZE} points.
`
  )

  console.log('[unionFind] Testing finished.')
}
