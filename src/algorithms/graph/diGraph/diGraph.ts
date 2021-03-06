/**
 * Class of directed graph
 */
export default class Graph {
  /**
   * Constructor of an directed graph
   *
   * Input array example:
   * [3, 2, 0, 1, 2, 1]
   *
   * It means a graph with:
   *
   * 3 vertices (element at index 0)
   *
   * 2 edges (element at index 1)
   *
   * edge from vertex 0 to vertex 1 (elements at index 2 and 3)
   *
   * edge from vertex 2 to vertex 1 (elements at index 4 and 5)
   *
   * @param  {array} input Array representing the graph
   */
  constructor(input: number[]) {
    this.V = input.shift() ?? 0
    this.E = input.shift() ?? 0

    this.adj = new Array(this.V).fill(null).map(e => [])

    for (let i = 0; i < input.length; i += 2) {
      this.addEdge(input[i], input[i + 1])
      this.E--
    }
  }

  /**
   * Number of vertices
   */
  V: number

  /**
   * Number of edges
   */
  E: number

  /**
   * Table of adjacent vertices of each vertex, starting at that vertex
   */
  adj: number[][]

  /**
   * Add an edge from v to w
   *
   * @param  {number} v starting vertex
   * @param  {number} w finishing vertex
   */
  addEdge = (v: number, w: number) => {
    this.adj[v].push(w)
    this.E++
  }

  /**
   * Get all adjacent vertices of a given vertex, starting at that vertex
   *
   * @param  {number} v
   * @returns array of vertices
   */
  getAdj = (v: number): number[] => {
    return this.adj[v]
  }

  /**
   * Return the reverse of the graph
   *
   * @returns Graph
   */
  reverse = (): Graph => {
    const graph = new Graph([this.V])
    for (let v = 0; v < this.V; v++) {
      for (let w of this.getAdj(v)) {
        graph.addEdge(w, v)
      }
    }
    return graph
  }

  /**
   * Get the degree of a vertex
   *
   * Where degree is the number of edges it is connected to
   *
   * @param  {number} v vertex
   * @returns degree
   */
  degree(v: number): number {
    return this.getAdj(v).length
  }

  /**
   * Get the maximum degree of the graph
   *
   * Where degree is the number of edges it is connected to
   *
   * @returns degree
   */
  maxDegree(): number {
    let max = 0
    for (let v = 0; v < this.V; v++) {
      if (this.degree(v) > max) {
        max = this.degree(v)
      }
    }
    return max
  }

  /**
   * Get the average degree of the graph
   *
   * Where degree is the number of edges it is connected to
   *
   * @returns degree
   */
  avgDegree(): number {
    return (2 * this.E) / this.V
  }

  numberOfSelfLoops(): number {
    let count = 0
    for (let v = 0; v < this.V; v++) {
      for (let w of this.getAdj(v)) {
        if (v === w) count++
      }
    }
    // Each edge is being counted twice
    return count / 2
  }
}
