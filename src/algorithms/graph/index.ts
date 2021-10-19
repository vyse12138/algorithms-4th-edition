import Graph from './graph'
import DFS from './depthFirstSearch'

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
  let dfs = new DFS(graph, 0)
  console.log(dfs.marked)
}
