export class UF {
  /**
   * Number of union
   */
  count: number = 0

  /**
   * Array to store all points and their unino
   */
  id: number[] = []

  /**
   * Array to store the tree size of all points
   */
  size: number[] = []

  /**
   * Init a new union finder instance with the given number of points
   *
   * @param n Number of points
   */
  constructor(n: number) {
    if (!Number.isInteger(n)) {
      throw new Error('n must be an interger')
    }
    if (n <= 0) {
      throw new Error('n must be greater than 0')
    }
    this.count = n
    for (let i = 0; i < n; i++) {
      this.id[i] = i
      this.size[i] = i
    }
  }

  /**
   * Check if two points are connected
   *
   * @param p Point 1
   * @param q Point 2
   * @returns Are two points connected
   */
  connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  /**
   * Find the union of a point
   *
   * Time complexity: getting close to O(1)
   *
   * @param p Point
   * @returns Union
   */
  find(p: number): number {
    let paths = []
    while (p !== this.id[p]) {
      paths.push(p)
      p = this.id[p]
    }
    for (let path of paths) {
      this.id[path] = p
    }
    return p
  }

  /**
   * Function to unionize two points
   *
   * @param p Point 1
   * @param q Point 2
   */
  union(p: number, q: number): void {
    let pId = this.find(p)
    let qId = this.find(q)
    if (pId === qId) {
      return
    }

    if (this.size[pId] < this.size[qId]) {
      this.id[pId] = qId
      this.size[qId] += this.size[pId]
    } else {
      this.id[qId] = pId
      this.size[pId] += this.size[qId]
    }
    this.count--
  }
}
