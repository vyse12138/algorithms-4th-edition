import Graph from './digraph'
import DFO from './diDepthFirstOrder'
import Cycle from './diCycle'
/**
 * Class for Topological order
 */
export default class Topological {
  /**
   * Order a graph
   *
   * @param  {Graph} g the graph to search
   * @param  {number} s the starting vertex
   */
  constructor(g: Graph) {
    const cycle = new Cycle(g)
    if (!cycle.hasCycle()) {
      const dfo = new DFO(g)
      this.order = dfo.reversePost
    }
  }

  order: number[] = []

  isDAG = (): boolean => {
    return this.order.length === 0
  }
}
