import Graph from './edgeWeightedGraph'
import Edge from './edge'
import MinPQ from './minPQ'
import UF from '../../unionFind/weightedQuickUnion'
/**
 * Class for Minimal spanning tree in an edge weighted graph
 *
 * In kruskal algorithm
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
    this.uf = new UF(g.V)

    for (let edge of g.edges) {
      this.pq.insert(edge)
    }

    while (!this.pq.isEmpty() && this.mst.length < g.V - 1) {
      let e = this.pq.delMin()

      let v = e.either(),
        w = e.other(v)

      if (this.uf.connected(v, w)) continue

      this.uf.union(v, w)

      this.mst.push(e)
      this.weight += e.weight
    }
  }

  weight: number = 0
  mst: Edge[] = []
  pq: MinPQ
  uf: UF

  /**
   * visist v and push edges into minPQ
   *
   * @param  {Graph} g
   * @param  {number} v
   */
  private visit = (g: Graph, v: number) => {}
}
