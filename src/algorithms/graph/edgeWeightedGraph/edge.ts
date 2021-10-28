/**
 * Class of weighted edge
 */
export default class Edge {
  /**
   * Constructor of a weighted edge
   */
  constructor(v: number, w: number, weight: number) {
    this.v = v
    this.w = w
    this.weight = weight
  }

  v: number
  w: number
  weight: number

  /**
   * Either vertex of the edge
   *
   * @returns vertex
   */
  either = (): number => {
    return this.v
  }

  /**
   * The other vertex of the edge
   *
   * @param vertex
   * @returns vertex
   */
  other = (v: number): number => {
    if (v === this.v) return this.w
    if (v === this.w) return this.v
    throw Error('inconsistent edge')
  }

  compareTo(e: Edge): number {
    if (this.weight < e.weight) return -1
    if (this.weight > e.weight) return 1
    return 0
  }
}
