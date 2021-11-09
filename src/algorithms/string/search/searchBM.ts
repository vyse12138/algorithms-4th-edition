// Boyer-Moore search
// Time complexity (avg): O(N/M)
// Time complexity (worst case): O(MN)
export default class SearchKMP {
  constructor(pat: string) {
    this.pat = pat

    let M = pat.length
    let R = 256

    this.right = new Array(R).fill(0)

    for (let c = 0; c < R; c++) {
      this.right[c] = -1
    }

    for (let j = 0; j < M; j++) {
      this.right[pat.charCodeAt(j)] = j
    }
  }

  right: number[]
  pat: string

  search = (txt: string): number => {
    let N = txt.length
    let M = this.pat.length
    let skip

    for (let i = 0; i < N - M; i += skip) {
      skip = 0

      for (let j = M - 1; j >= 0; j--) {
        if (this.pat.charAt(j) !== txt.charAt(i + j)) {
          skip = j - this.right[txt.charCodeAt(i + j)]
          if (skip < 1) {
            skip = 1
          }
          break
        }
      }
      if (skip === 0) {
        return i
      }
    }
    return N
  }
}
