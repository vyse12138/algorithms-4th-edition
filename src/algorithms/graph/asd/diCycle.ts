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
  constructor(g: Graph) {
    this.edgeTo = new Array(g.V).fill(-1)
    this.marked = new Array(g.V).fill(false)
    this.onStack = new Array(g.V).fill(false)

    for (let v = 0; v < g.V; v++) {
      if (!this.marked[v]) {
        this.dfs(g, v)
      }
    }
  }

  /**
   * True if connected
   */
  marked: boolean[] = []

  /**
   * edge to a vertex
   */
  edgeTo: number[]

  cycle: number[] = []
  onStack: boolean[] = []

  /**
   * Depth first search
   *
   * @param  {Graph} g graph
   * @param  {number} v vertex
   */
  private dfs = (g: Graph, v: number) => {
    this.onStack[v] = true
    this.marked[v] = true

    for (let w of g.getAdj(v)) {
      if (this.hasCycle()) {
        return
      } else if (!this.marked[w]) {
        this.edgeTo[w] = v
        this.dfs(g, w)
      } else if (this.onStack[w]) {
        this.cycle = []
        for (let x = v; x != w; x = this.edgeTo[x]) {
          this.cycle.push(x)
        }
        this.cycle.push(w)
        this.cycle.push(v)
      }
    }
    this.onStack[v] = false
  }

  /**
   * Check if has cycle
   *
   *
   * @return {boolean} true if has cycle
   */
  hasCycle = (): boolean => {
    return this.cycle.length ? true : false
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
