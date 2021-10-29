import Graph from './edgeWeightedGraph'
import PrimMst from './lazyPrimMST'
import KruskalMST from './kruskalMST'
export default () => {
  const SIZE = 5000
  let graphData: number[] = []
  const generate = () => {
    graphData = []

    // vertices
    graphData.push(SIZE)
    // edges
    graphData.push(SIZE * 4)

    for (let i = 0; i < SIZE * 4; i++) {
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.round(Math.random() * 100))
    }
  }

  generate()

  let graph = new Graph(graphData)

  let p1 = performance.now()

  let primMST = new PrimMst(graph)

  let p2 = performance.now()

  let kruskalMST = new KruskalMST(graph)

  let p3 = performance.now()

  console.log(
    `Prim algorithm tooked ${
      Math.round((p2 - p1) * 100) / 100
    } ms to find the minimal weight of MST in ${SIZE} vertices: ${
      primMST.weight
    }`
  )

  console.log(
    `Kruskal algorithm tooked ${
      Math.round((p3 - p2) * 100) / 100
    } ms to find the minimal weight of MST in ${SIZE} vertices: ${
      kruskalMST.weight
    }`
  )
}
