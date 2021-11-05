export default class LSD {
  static R = 256
  static aux: string[] = []

  /**
   * Sort an array of equal-length string
   *
   * @param  {string[]} a input array of string
   * @param  {number} w length of string
   */
  static sort = (a: string[], W: number) => {
    const N = a.length
    this.aux = []

    this.sortR(a, 0, N - 1, 0)
  }

  private static sortR = (a: string[], lo: number, hi: number, d: number) => {
    if (hi <= lo) {
      return
    }
    let count: number[] = Array(this.R + 2).fill(0)

    for (let i = lo; i <= hi; i++) {
      count[this.charAt(a[i], d) + 2]++
    }

    for (let r = 0; r < this.R + 1; r++) {
      count[r + 1] += count[r]
    }

    for (let i = lo; i <= hi; i++) {
      this.aux[count[this.charAt(a[i], d) + 1]++] = a[i]
    }

    for (let i = lo; i <= hi; i++) {
      a[i] = this.aux[i - lo]
    }

    for (let r = 0; r < this.R; r++) {
      this.sortR(a, lo + count[r], lo + count[r + 1] - 1, d + 1)
    }
  }

  private static charAt(s: string, d: number): number {
    return d < s.length ? s.charCodeAt(d) : -1
  }
}
