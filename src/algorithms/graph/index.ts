import graph from './graph'
import diGraph from './diGraph'
import eWGraph from './edgeWeightedGraph'
import eWDiGraph from './edgeWeightedDiGraph'

export default () => {
  console.warn(`[graph] Testing...`)

  graph()

  console.log(
    '----------------------------------------------------------------'
  )

  diGraph()

  console.log(
    '----------------------------------------------------------------'
  )
  eWGraph()

  console.log(
    '----------------------------------------------------------------'
  )

  eWDiGraph()

  console.warn(`[graph] Testing finished.`)
}
