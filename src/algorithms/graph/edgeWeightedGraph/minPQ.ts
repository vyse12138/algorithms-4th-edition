import Edge from './edge'

/**
 * Priority queue class
 *
 * find the top m largest (or smallest) elements in an input size of n
 *
 * Time complexity: nm (n log m if based on binary heap )
 *
 * Space complexity: m
 */
export default class PriorityQueue {
  pq: Edge[]
  N: number = 0

  /**
   * Constructor function for Priority queue
   *
   * @param n number of elements
   */
  constructor(n: number) {
    this.pq = new Array(n + 1)
  }

  /**
   * Insert an element into the priority queue
   *
   * @param v the element to insert
   */
  insert = (v: Edge) => {
    this.pq[++this.N] = v
    this.swim(this.N)
  }

  /**
   * Return the maximum element
   *
   * @return maximum element
   */
  min = (): Edge => {
    return this.pq[1]
  }

  /**
   * Delete and return the maximum element
   *
   * @return maximum element
   */
  delMin = (): Edge => {
    let min = this.pq[1]
    this.exch(1, this.N--)
    this.pq.length = this.N + 1
    this.sink(1)
    return min
  }

  /**
   * Check if the queue is empty
   *
   * @return true if queue is empty
   */
  isEmpty = (): boolean => {
    return this.N === 0
  }

  /**
   * Get the size of the queue
   *
   * @return size of queue
   */
  size = (): number => {
    return this.N
  }

  /**
   * Compare two elements in array and tell which one is more
   *
   * @param v First element's index
   * @param w Second element's index
   * @return True if first element is smaller
   */
  private more = (v: number, w: number): boolean => {
    return this.pq[v].weight > this.pq[w].weight ? true : false
  }

  /**
   * Exchange two elements in an array
   *
   * @param a Array
   * @param i Index of the first element
   * @param j Index of the secondelement
   */
  private exch = (i: number, j: number) => {
    ;[this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]]
  }

  /**
   * Swim up an element to order the heap
   *
   * @param a Array
   * @param i Index of the first element
   * @param j Index of the secondelement
   */
  private swim = (k: number) => {
    while (k > 1 && this.more(Math.floor(k / 2), k)) {
      this.exch(Math.floor(k / 2), k)
      k = Math.floor(k / 2)
    }
  }

  /**
   * Sink down an element to order the heap
   *
   * @param a Array
   * @param i Index of the first element
   * @param j Index of the secondelement
   */
  private sink = (k: number) => {
    while (2 * k <= this.N) {
      let j = 2 * k
      if (j < this.N && this.more(j, j + 1)) j++
      if (!this.more(k, j)) break
      this.exch(k, j)
      k = j
    }
  }
}
