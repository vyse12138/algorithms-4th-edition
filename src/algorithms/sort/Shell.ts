import { Comparable } from './types'

/**
 * Shell sort class
 *
 * Time complexity: O(n^(3/2))
 */
export default class Shell {
  /**
   * Sort the array
   *
   * @param a Array to sort
   */
  static sort = (a: Comparable[]) => {
    let h = 1
    while (h < a.length / 3) h = 3 * h + 1
    while (h >= 1) {
      for (let i = h; i < a.length; i++) {
        for (let j = i; a[j] < a[j - h]; j -= h) {
          Shell.exch(a, j, j - h)
        }
      }
      h = Math.floor(h / 3)
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
      if (Shell.less(a[i], a[i - 1])) {
        return false
      }
    }
    return true
  }
}
