import graph from './graph'
import diGraph from './diGraph'
import eWGraph from './edgeWeightedGraph'
export default () => {
  console.warn(`[graph] Testing...`)

  graph()

  console.log(
    '----------------------------------------------------------------'
  )

  // diGraph()
  console.log(
    '----------------------------------------------------------------'
  )
  eWGraph()

  console.warn(`[graph] Testing finished.`)
}
