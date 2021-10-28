import Graph from './edgeWeightedGraph'
import PrimMST from './primMST'
import LazyPrimMST from './lazyPrimMST'
export default () => {
  const SIZE = 50
  let graphData: number[] = []
  const generate = () => {
    graphData = []

    // vertices
    graphData.push(SIZE)
    // edges
    graphData.push(SIZE * 10)

    for (let i = 0; i < SIZE * 4; i++) {
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.floor(Math.random() * SIZE))
      graphData.push(Math.round(Math.random() * 100))
    }
  }

  generate()

  let graph = new Graph(graphData)
  console.log(graph)

  let lazyprimMST = new LazyPrimMST(graph)
  console.log(lazyprimMST)

  let primMST = new PrimMST(graph)
  console.log(primMST)
}
