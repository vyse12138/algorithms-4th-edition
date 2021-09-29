import { Comparable } from './types'
import Insertion from './insertion'
/**
 * Quick sort class ( with 3 ways)
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

  private static quickSort(a: Comparable[], lo: number, hi: number) {
    if (lo + 10 > hi) {
      Insertion.sort(a, lo, hi)
      return
    }

    let lt = lo,
      i = lo + 1,
      gt = hi

    let v = a[lo]

    while (i <= gt) {
      if (a[i] < v) this.exch(a, lt++, i++)
      else if (a[i] > v) this.exch(a, i, gt--)
      else i++
    } // this achieves a[lo ... lt-1] < v = a[ly ... gt] < a[gt+1 ... hi]

    this.quickSort(a, lo, lt - 1)
    this.quickSort(a, gt + 1, hi)
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
