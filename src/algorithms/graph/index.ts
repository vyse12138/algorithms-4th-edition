import Graph from './graph'
import DFSSearch from './depthFirstSearch'
import BFS from './breadthFirstPath'
import DFS from './depthFirstPath'
import CC from './connectedComponents'

export default () => {
  const SIZE = 100
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
  let search = new DFSSearch(graph, 0)
  // console.log(search.marked)
  // for (let i = 0; i < 10; i++) {
  //   console.log(search.isMarked(i))
  // }

  let dfs = new DFS(graph, 0)

  for (let i = 1; i < 11; i++) {
    console.log(dfs.pathTo(i))
  }

  let bfs = new BFS(graph, 0)
  console.log(
    '----------------------------------------------------------------'
  )
  for (let i = 1; i < 11; i++) {
    console.log(bfs.pathTo(i))
  }

  console.log(
    '----------------------------------------------------------------'
  )

  let cc = new CC(graph)

  console.log(
    `there are ${cc.count} connected components set in the graph of ${SIZE} vertices`
  )
}
