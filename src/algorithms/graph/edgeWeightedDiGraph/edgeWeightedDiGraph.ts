import Edge from './diEdge'

/**
 * Class of edge weighted graph
 */
export default class Graph {
  /**
   * Constructor of edge weighted graph
   *
   * Input array example:
   * [3, 2, 0, 1, 0.25, 2, 1, 0.66]
   *
   * It means a graph with:
   *
   * 3 vertices (element at index 0)
   *
   * 2 edges (element at index 1)
   *
   * edge from vertex 0 to vertex 1 is weighted 0.25(elements at index 2, 3, 4)
   *
   * edge from vertex 2 to vertex 1 is weighed 0.66(elements at index 5, 6, 7)
   *
   * @param  {array} input Array representing the graph
   */
  constructor(input: number[]) {
    this.V = input.shift() ?? 0
    this.E = input.shift() ?? 0

    this.adj = new Array(this.V).fill(null).map(e => [])

    for (let i = 0; i < input.length; i += 3) {
      let e = new Edge(input[i], input[i + 1], input[i + 2])
      this.addEdge(e)
      this.edges.push(e)
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
   * Table of adjacent vertices of each vertex
   */
  adj: Edge[][]

  edges: Edge[] = []

  /**
   * Add an edge between two vertices
   *
   * @param  {number} v vertex 1
   * @param  {number} w vertex 2
   */
  addEdge = (e: Edge) => {
    this.adj[e.from].push(e)
    this.edges.push(e)
    this.E++
  }

  /**
   * Get all adjacent vertices of a given vertex
   *
   * @param  {number} v
   * @returns array of vertices
   */
  getAdj = (v: number): Edge[] => {
    return this.adj[v]
  }
}
