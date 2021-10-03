import { Comparable } from './types'

/**
 * Priority queue class
 *
 * find the top m smallest (or largest) elements in an input size of n
 *
 * Time complexity: nm (n log m if based on binary heap )
 *
 * Space complexity: m
 */
export default class PriorityQueue {
  pq: Comparable[]
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
   * @param k the element's index
   * @param v the element to insert
   */
  insert = (k: number, v: Comparable) => {
    this.pq[++this.N] = v
    this.swim(this.N)
  }

  /**
   * Change an element by index
   *
   * @param k the index we want to change
   * @param v the new element
   */
  change = (k: number, v: Comparable) => {}

  /**
   * Check if there's an element with index `k`
   *
   * @param k the index
   */
  contains = (k: number) => {}

  /**
   * Delete index `k` and it's element
   *
   * @param k the index
   */
  delete = (k: number) => {}

  /**
   * Return the maximum element
   *
   * @return maximum element
   */
  max = (): Comparable => {
    return this.pq[1]
  }

  /**
   * Delete and return the maximum element
   *
   * @return maximum element
   */
  delMax = (): Comparable => {
    let max = this.pq[1]
    this.exch(1, this.N--)
    this.pq.length = this.N + 1
    this.sink(1)
    return max
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
   * Compare two elements in array and tell which one is less
   *
   * @param v First element's index
   * @param w Second element's index
   * @return True if first element is smaller
   */
  private less = (v: number, w: number): boolean => {
    return this.pq[v] < this.pq[w] ? true : false
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
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
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
      if (this.less(j, j + 1)) j++
      if (!this.less(k, j)) break
      this.exch(k, j)
      k = j
    }
  }
}
