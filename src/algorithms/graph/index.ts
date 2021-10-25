import Graph from './graph'
import DiGraph from './digraph/diGraph'
import DFSSearch from './depthFirstSearch'
import BFS from './breadthFirstPath'
import DFS from './depthFirstPath'
import CC from './connectedComponents'

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

  // let graph = new Graph(graphData)
  let graph = new DiGraph(graphData)
  let search = new DFSSearch(graph, 0)

  // console.log(search.marked)
  // for (let i = 0; i < 10; i++) {
  //   console.log(search.isMarked(i))
  // }
  for (let k = 0; k < 30; k++) {
    let dfs = new DFS(graph, k)
    let j = 0
    for (let i = 0; j < 5 && i < SIZE; i++) {
      if (dfs.hasPathTo(i)) {
        console.log(dfs.pathTo(i))
        j++
      }
    }
    console.log(
      '----------------------------------------------------------------'
    )
  }
  console.log(
    '----------------------------------------------------------------'
  )
  for (let k = 0; k < 30; k++) {
    let bfs = new BFS(graph, k)
    let j = 0
    for (let i = 0; j < 5 && i < SIZE; i++) {
      if (bfs.hasPathTo(i)) {
        console.log(bfs.pathTo(i))
        j++
      }
    }
    console.log(
      '----------------------------------------------------------------'
    )
  }

  console.log(
    '----------------------------------------------------------------'
  )

  let cc = new CC(graph)

  console.log(
    `there are ${cc.count} connected components set in the graph of ${SIZE} vertices`
  )
}
