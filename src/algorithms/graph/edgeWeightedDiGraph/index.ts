import Graph from './edgeWeightedDiGraph'
import DijkstraSP from './dijkstraSP'
export default () => {
  const SIZE = 5000
  let graphData: number[] = []
  const generate = () => {
    graphData = []

    // vertices
    graphData.push(SIZE)
    // edges
    graphData.push(SIZE * 4)

    for (let i = 0; i < SIZE * 3; i++) {
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.round(Math.random() * 100))
    }
  }

  generate()

  let graph = new Graph(graphData)

  let p1 = performance.now()

  let dijkstraSP = new DijkstraSP(graph, 0)

  let p2 = performance.now()

  let p3 = performance.now()
  // for (let i = 0; i < SIZE; i++) {
  //   console.log(
  //     `Dijkstra algorithm tooked ${
  //       Math.round((p2 - p1) * 100) / 100
  //     } ms to find a path to vertex ${i}: ${dijkstraSP.getPath(i)}`
  //   )
  // }

  console.log(
    `Dijkstra algorithm tooked ${
      Math.round((p2 - p1) * 100) / 100
    } ms to find the shortest path in ${SIZE} vertices`
  )
}
