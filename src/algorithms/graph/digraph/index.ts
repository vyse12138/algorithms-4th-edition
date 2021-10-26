import Graph from './digraph'
import Topological from './diTopologicalOrder'

export default () => {
  const SIZE = 50
  let graphData: number[] = []
  const generate = () => {
    graphData = []

    // vertices
    graphData.push(SIZE)
    // edges
    graphData.push(SIZE)

    for (let i = 0; i < SIZE; i++) {
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.floor(Math.random() * SIZE))
    }
  }

  generate()

  let graph = new Graph(graphData)

  let topological = new Topological(graph)

  console.log(
    `The graph ${
      topological.isDAG()
        ? "has cycle, so it can't be topological ordered"
        : `has no cycle, the order of it is: ${topological.order}`
    }`
  )
}
