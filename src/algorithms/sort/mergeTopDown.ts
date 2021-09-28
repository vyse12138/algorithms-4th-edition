import { Comparable } from './types'

/**
 * Merge sort class (top down)
 *
 * Time complexity: O(nlog(n))
 */
export default class Merge {
  static aux: Comparable[] = []

  /**
   * Sort the array
   *
   * @param a Array to sort
   */
  static sort = (a: Comparable[]) => {
    Merge.s(a, 0, a.length - 1)
  }

  private static s = (a: Comparable[], lo: number, hi: number) => {
    if (lo >= hi) return
    let mid = lo + Math.floor((hi - lo) / 2)
    Merge.s(a, lo, mid)
    Merge.s(a, mid + 1, hi)
    Merge.merge(a, lo, mid, hi)
  }

  static merge = (a: Comparable[], lo: number, mid: number, hi: number) => {
    let i = lo,
      j = mid + 1

    if (a[mid] < a[mid + 1]) return

    for (let k = lo; k <= hi; k++) {
      Merge.aux[k] = a[k]
    }
    for (let k = lo; k <= hi; k++) {
      if (i > mid) a[k] = Merge.aux[j++]
      else if (j > hi) a[k] = Merge.aux[i++]
      else if (Merge.aux[j] < Merge.aux[i]) a[k] = Merge.aux[j++]
      else a[k] = Merge.aux[i++]
    }
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
      if (Merge.less(a[i], a[i - 1])) {
        return false
      }
    }
    return true
  }
}
