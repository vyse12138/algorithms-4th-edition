// Knuth-Morris-Pratt search
// Time complexity (avg): O(1.1N)
// Time complexity (worst case): O(2N)
export default class SearchKMP {
  constructor(pat: string) {
    this.pat = pat
    let M = pat.length
    let R = 256
    this.dfa = []

    this.dfa = new Array(R).fill(null).map(() => new Array(256).fill(0))

    this.dfa[pat.charCodeAt(0)][0] = 1

    for (let X = 0, j = 1; j < M; j++) {
      for (let c = 0; c < R; c++) {
        this.dfa[c][j] = this.dfa[c][X]
      }

      this.dfa[pat.charCodeAt(j)][j] = j + 1

      X = this.dfa[pat.charCodeAt(j)][X]
    }
  }

  pat: string
  dfa: number[][]

  search = (txt: string) => {
    let i,
      j,
      N = txt.length,
      M = this.pat.length

    for (i = 0, j = 0; i < N && j < M; i++) {
      j = this.dfa[txt.charCodeAt(i)][j]
    }
    if (j === M) {
      return i - M
    } else {
      return N
    }
  }
}
