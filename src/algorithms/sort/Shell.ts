import { Comparable } from './types'

/**
 * Shell sort class
 *
 * Time complexity: O(n^2)
 */
export default class Selection {
  /**
   * Sort the array
   *
   * @param a Array to sort
   */
  static sort = (a: Comparable[]) => {
    for (let i = 0; i < a.length; i++) {
      let min = i
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[min]) {
          min = j
        }
      }
      Selection.exch(a, i, min)
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
      if (Selection.less(a[i], a[i - 1])) {
        return false
      }
    }
    return true
  }
}
