import Graph from './edgeWeightedGraph'
import Edge from './edge'
import MinPQ from './minPQ'
/**
 * Class for Minimal spanning tree in an edge weighted graph
 *
 * In lazy prim algorithm
 *
 * Edges between two marked vertices can stay in the minPQ
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

    this.visit(g, 0)

    while (!this.pq.isEmpty()) {
      let e = this.pq.delMin()

      let v = e.either(),
        w = e.other(v)

      if (this.marked[v] && this.marked[w]) {
        continue
      }
      this.mst.push(e)
      this.weight += e.weight

      if (!this.marked[v]) {
        this.visit(g, v)
      }

      if (!this.marked[w]) {
        this.visit(g, w)
      }
    }
  }

  weight: number = 0
  mst: Edge[] = []
  marked: boolean[]
  pq: MinPQ

  /**
   * visist v and push edges into minPQ
   *
   * @param  {Graph} g
   * @param  {number} v
   */
  visit = (g: Graph, v: number) => {
    this.marked[v] = true
    for (let e of g.getAdj(v)) {
      if (!this.marked[e.other(v)]) {
        this.pq.insert(e)
      }
    }
  }
}
