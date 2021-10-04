import { Comparable } from './types'
import Insertion from './insertion'
/**
 * Quick sort class
 *
 * Time complexity: O(n log n)
 */
export default class Quick {
  /**
   * Sort the array
   *
   * @param a Array to sort
   */
  static sort = (a: Comparable[]) => {
    this.quickSort(a, 0, a.length - 1)
  }

  /**
   * Internal sort method
   *
   * @param  {Comparable[]} a array to sort
   * @param  {number} lo low
   * @param  {number} hi high
   */
  private static quickSort(a: Comparable[], lo: number, hi: number) {
    if (lo >= hi) return

    let j = this.partition(a, lo, hi)

    this.quickSort(a, lo, j - 1)
    this.quickSort(a, j + 1, hi)
  }

  /** Find partition point
   * @param  {Comparable[]} a array
   * @param  {number} lo low
   * @param  {number} hi high
   * @returns number
   */
  private static partition(a: Comparable[], lo: number, hi: number): number {
    let i = lo,
      j = hi + 1,
      v = a[lo]
    while (true) {
      while (a[++i] < v) if (i === hi) break
      while (v < a[--j]) if (j === lo) break
      if (i >= j) break

      this.exch(a, i, j)
    }
    this.exch(a, lo, j)
    return j
  }
  /**
   * Compare two value and tell which one is less
   *
   * @param v First value
   * @param w Second value
   * @return True if `v` is less than `w`
   */
  private static less = (v: Comparable, w: Comparable): boolean => {
    return v < w ? true : false
  }

  /**
   * Exchange two elements in an array
   *
   * @param a Array
   * @param i Index of the first element
   * @param j Index of the secondelement
   */
  private static exch = (a: Comparable[], i: number, j: number) => {
    ;[a[i], a[j]] = [a[j], a[i]]
  }

  /**
   * Test if array is sorted
   *
   * @param a Array
   * @return True if array is sorted
   */
  static isSorted = (a: Comparable[]): boolean => {
    for (let i = 1; i < a.length; i++) {
      if (Quick.less(a[i], a[i - 1])) {
        return false
      }
    }
    return true
  }
}
