import Graph from './graph'

/**
 * Class for Breadth first path finder in a graph
 */
export default class BFS {
  /**
   * Find all paths that starting with a given vertex
   *
   * @param  {Graph} g the graph to search
   * @param  {number} s the starting vertex
   */
  constructor(g: Graph, s: number) {
    this.marked = new Array(g.V).fill(false)
    this.edgeTo = new Array(g.V).fill(-1)

    this.s = s

    this.bfs(g, s)
  }

  /**
   * True if connected
   */
  marked: boolean[]

  /**
   * edge to a vertex
   */
  edgeTo: number[]

  /**
   * Starting point
   */
  s: number

  /**
   * Total connected vertices to the starting vertex
   */

  /**
   * breadth first search
   *
   * @param  {Graph} g graph
   * @param  {number} v vertex
   */
  private bfs = (g: Graph, s: number) => {
    let queue: number[] = []

    this.marked[s] = true

    queue.push(s)

    while (queue.length > 0) {
      let v = queue.shift()
      if (v === undefined) throw new Error()

      for (let w of g.getAdj(v)) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          this.marked[w] = true
          queue.push(w)
        }
      }
    }
  }

  /**
   * Check if there's a path to a vertex
   *
   * @param  {number} w vertex
   *
   * @return {boolean} true if is connected
   */
  hasPathTo = (w: number): boolean => {
    return this.marked[w]
  }

  /**
   * Get the path to a vertex
   *
   * @param  {number} w vertex
   *
   * @return {number[]} path ( null if there's no path)
   */
  pathTo = (v: number): number[] | null => {
    if (!this.hasPathTo(v)) {
      return null
    }

    let path: number[] = []

    for (let x = v; x != this.s; x = this.edgeTo[x]) {
      path.push(x)
    }
    path.push(this.s)

    return path.reverse()
  }
}
