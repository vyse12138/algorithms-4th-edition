import Graph from './diGraph'

/**
 * Class to find the cycle in a directed graph
 */
export default class DFS {
  /**
   * Find the cycle in a directed graph
   *
   * @param  {Graph} g the graph to search
   * @param  {number} s the starting vertex
   */
  constructor(g: Graph, s: number) {
    this.edgeTo = new Array(g.V).fill(-1)
    this.marked = new Array(g.V).fill(false)

    this.dfs(g, s)
  }

  /**
   * True if connected
   */
  marked: boolean[] = []

  /**
   * edge to a vertex
   */
  edgeTo: number[]

  /**
   * Total connected vertices to the starting vertex
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
    this.count++

    for (let w of g.getAdj(v)) {
      if (!this.marked[w]) {
        this.dfs(g, w)
      }
    }
  }

  /**
   * Check if vertex w is connected to the starting vertex in the given graph
   *
   * @param  {number} w vertex
   *
   * @return {boolean} true if is connected
   */
  isMarked = (w: number): boolean => {
    return this.marked[w]
  }
}
