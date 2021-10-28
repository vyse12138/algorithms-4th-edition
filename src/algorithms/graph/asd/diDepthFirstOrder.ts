import Graph from './diGraph'

/**
 * Class for Depth first order
 */
export default class DFS {
  /**
   * Order a graph
   *
   * @param  {Graph} g the graph to search
   * @param  {number} s the starting vertex
   */
  constructor(g: Graph) {
    this.marked = new Array(g.V).fill(false)

    for (let v = 0; v < g.V; v++) {
      if (!this.marked[v]) {
        this.dfs(g, v)
      }
    }
  }

  /**
   * True if connected
   */
  marked: boolean[]

  pre: number[] = []
  post: number[] = []
  reversePost: number[] = []

  /**
   * Depth first search
   *
   * @param  {Graph} g graph
   * @param  {number} v vertex
   */
  private dfs = (g: Graph, v: number) => {
    this.pre.unshift(v)

    this.marked[v] = true

    for (let w of g.getAdj(v)) {
      if (!this.marked[w]) {
        this.dfs(g, w)
      }
    }

    this.post.unshift(v)
    this.reversePost.push(v)
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
