import { Comparable } from './types'

/**
 * Insertion sort class
 *
 * Time complexity: O(n^2)
 */
export default class Insertion {
  /**
   * Sort the array
   *
   * @param a Array to sortss
   * @param lo Optional starting index, default = `0`
   * @param hi Optional finishing index, default = `a.length`
   */
  static sort = (a: Comparable[], lo: number = 0, hi: number = a.length) => {
    for (let i = lo; i < hi; i++) {
      for (let j = i + 1; j > 0 && a[j - 1] > a[j]; j--) {
        Insertion.exch(a, j, j - 1)
      }
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
      if (Insertion.less(a[i], a[i - 1])) {
        return false
      }
    }
    return true
  }
}
