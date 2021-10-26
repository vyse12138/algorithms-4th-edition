import Graph from './graph'

/**
 * Class for Depth first search in a graph
 */
export default class DFS {
  /**
   * Search in a graph based on the given starting vertex
   *
   * @param  {Graph} g the graph to search
   * @param  {number} s the starting vertex
   */
  constructor(g: Graph, s: number) {
    this.marked = new Array(g.V).fill(false)

    this.dfs(g, s)
  }

  /**
   * True if connected
   */
  marked: boolean[] = []

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
