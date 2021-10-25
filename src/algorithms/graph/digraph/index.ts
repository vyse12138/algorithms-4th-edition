import Graph from './digraph'

import Cycle from './diCycle'

export default () => {
  const SIZE = 5000
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

  let cycle = new Cycle(graph)

  console.log(cycle.cycle)
}
