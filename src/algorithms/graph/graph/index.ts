import Graph from './graph'
import DFSSearch from './depthFirstSearch'
import BFS from './breadthFirstPath'
import DFS from './depthFirstPath'
import CC from './connectedComponents'

export default () => {
  const SIZE = 15000
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

  let p1 = performance.now()

  let dfs = new DFS(graph, 0)

  let p2 = performance.now()

  let bfs = new BFS(graph, 0)

  let p3 = performance.now()

  let cc = new CC(graph)

  let p4 = performance.now()

  console.log(
    `DFS tooked ${
      Math.round((p2 - p1) * 100) / 100
    } ms to find the path for ${SIZE} vertices`
  )

  console.log(
    `BFS tooked ${
      Math.round((p3 - p2) * 100) / 100
    } ms to find the path for ${SIZE} vertices`
  )

  console.log(
    `CC tooked ${Math.round((p4 - p3) * 100) / 100} to find ${
      cc.count
    } connected components set in the graph of ${SIZE} vertices`
  )
}
