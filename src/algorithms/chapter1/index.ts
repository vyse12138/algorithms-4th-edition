import { UF } from './quickFind'
import { UF as UF2 } from './quickUnion'
import { UF as UF3 } from './weightQuickUnion'

export default function () {
  const size = 5000
  const input = []
  for (let i = 0; i < size * 3; i++) {
    input[i] = [
      Math.round(Math.random() * size),
      Math.round(Math.random() * size)
    ]
  }

  const uf1 = new UF(size + 1)
  const uf2 = new UF2(size + 1)
  const uf3 = new UF3(size + 1)

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

  console.log(
    `Quick find method tooked ${
      Math.round((p2 - p1) * 100) / 100
    } ms for ${size} cases. Found ${uf1.count} unions.`
  )

  console.log(
    `Quick union method tooked ${
      Math.round((p3 - p2) * 100) / 100
    } ms for ${size} cases. Found ${uf2.count} unions.`
  )
  console.log(
    `Weighted Quick union method tooked ${
      Math.round((p4 - p3) * 100) / 100
    } ms for ${size} cases. Found ${uf3.count} unions.`
  )
}
