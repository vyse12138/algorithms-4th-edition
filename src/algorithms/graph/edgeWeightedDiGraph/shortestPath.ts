import Graph from './edgeWeightedDiGraph'
import Edge from './diEdge'
export default class SP {
  constructor(g: Graph, s: number) {
    this.distTo = new Array(g.V).fill(Number.MAX_SAFE_INTEGER)

    this.distTo[s] = 0
  }

  pathTo: Edge[] = []
  distTo: number[] = []
  edgeTo: Edge[] = []

  getDistTo = (v: number): number => {
    return this.distTo[v]
  }

  hasPathTo = (v: number): boolean => {
    return this.distTo[v] < Number.MAX_SAFE_INTEGER
  }

  getPath = (v: number): Edge[] => {
    if (!this.hasPathTo(v)) return []

    let path = []

    for (let e = this.edgeTo[v]; e != null; e = this.edgeTo[e.from]) {
      path.push(e)
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
      }
    }
  }
}
