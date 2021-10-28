import Graph from './diGraph'
import DFO from './diDepthFirstOrder'

/**
 * Class for finding the strong connected components in a graph
 * (Kosaraju algorthim)
 */
export default class SCC {
  /**
   * Set up connected components class
   *
   * @param  {Graph} g the graph to search
   */
  constructor(g: Graph) {
    this.marked = new Array(g.V).fill(false)

    const order = new DFO(g.reverse())

    for (let s of order.reversePost) {
      if (!this.marked[s]) {
        this.dfs(g, s)
        this.count++
      }
    }
  }

  /**
   * True if connected
   */
  marked: boolean[] = []

  /**
   * ID of connected components
   */
  id: number[] = []

  /**
   * Total connected components sets
   */
  count = 0

  /**
   * Depth first search
   *
   * @param  {Graph} g graph
   * @param  {number} v vertex
   */
  private dfs = (g: Graph, v: number) => {
    this.marked[v] = true
    this.id[v] = this.count

    for (let w of g.getAdj(v)) {
      if (!this.marked[w]) {
        this.dfs(g, w)
      }
    }
  }

  /**
   * Check if two vertices are strongly connected
   *
   * @param  {number} v vertex 1
   * @param  {number} w vertex 2
   *
   * @return {boolean} true if is connected
   */
  isStronglyConnected = (v: number, w: number): boolean => {
    return this.id[v] === this.id[w]
  }

  /**
   * Get  the CC set id
   *
   * @param  {number} v vertex 1
   *
   * @return {number} id
   */
  getId = (v: number): number => {
    return this.id[v]
  }
}
