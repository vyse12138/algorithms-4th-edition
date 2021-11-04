import Graph from './edgeWeightedDiGraph'
import Edge from './diEdge'
import PQ from './minIPQ'

export default class SP {
  constructor(g: Graph, s: number) {
    this.distTo = new Array(g.V).fill(Number.MAX_SAFE_INTEGER)

    this.distTo[s] = 0

    this.pq = new PQ(g.V)

    this.pq.insert(s, 0)

    while (!this.pq.isEmpty()) {
      this.relaxVertex(g, this.pq.delMin())
    }
  }

  pathTo: Edge[] = []
  distTo: number[] = []
  edgeTo: Edge[] = []
  pq: PQ

  getDistTo = (v: number): number => {
    return this.distTo[v]
  }

  hasPathTo = (v: number): boolean => {
    return this.distTo[v] < Number.MAX_SAFE_INTEGER
  }

  getPath = (v: number): string[] => {
    if (!this.hasPathTo(v)) return []
    let path = []

    for (let e = this.edgeTo[v]; e != null; e = this.edgeTo[e.from]) {
      path.unshift(`${e.from} => ${e.to}`)
    }
    return path
  }

  private relaxEdge = (e: Edge) => {
    let v = e.from,
      w = e.to

    if (this.distTo[w] > this.distTo[v] + e.weight) {
      this.distTo[w] = this.distTo[v] + e.weight
      this.edgeTo[w] = e
    }
  }

  private relaxVertex = (g: Graph, v: number) => {
    for (let e of g.getAdj(v)) {
      let w = e.to

      if (this.distTo[w] > this.distTo[v] + e.weight) {
        this.distTo[w] = this.distTo[v] + e.weight
        this.edgeTo[w] = e

        if (this.pq.contains(w)) {
          this.pq.change(w, this.distTo[w])
        } else {
          this.pq.insert(w, this.distTo[w])
        }
      }
    }
  }
}
