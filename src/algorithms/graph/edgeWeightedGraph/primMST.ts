import Graph from './edgeWeightedGraph'
import Edge from './edge'
import MinPQ from './minPQ'
/**
 * Class for Minimal spanning tree in an edge weighted graph
 *
 * In prim algorithm
 *
 *
 */
export default class MST {
  /**
   * Constructor for MST
   *
   * @param  {Graph} g an edge weighted graph
   */
  constructor(g: Graph) {
    this.pq = new MinPQ(g.V)
    this.marked = new Array(g.V).fill(false)
    this.distTo = new Array(g.V).fill(Number.MAX_SAFE_INTEGER)

    this.pq.insert(new Edge(0, 0, 0))
  }

  weight: number = 0
  mst: Edge[] = []
  marked: boolean[]
  pq: MinPQ

  edgeTo: Edge[] = []
  distTo: number[]

  /**
   * visist v and push edges into minPQ
   *
   * @param  {Graph} g
   * @param  {number} v
   */
  private visit = (g: Graph, v: number) => {
    this.marked[v] = true

    for (let e of g.getAdj(v)) {
      let w = e.other(v)

      if (this.marked[w]) continue

      if (e.weight < this.distTo[w]) {
        this.edgeTo[w] = e
        this.distTo[w] = e.weight

        if (this.pq.contains(e)) {
        }
      }
    }
  }
}
