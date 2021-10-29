/**
 * Class of weighted edge
 */
export default class Edge {
  /**
   * Constructor of a weighted edge
   */
  constructor(from: number, to: number, weight: number) {
    this.from = from
    this.to = to
    this.weight = weight
  }

  from: number
  to: number
  weight: number
}
