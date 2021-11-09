// Brutal search
// Time complexity (avg): O(1.1N)
// Time complexity (worst case): O(MN)
export const search = (pat: string, txt: string): number => {
  const M = pat.length
  const N = txt.length

  for (let i = 0; i < N - M; i++) {
    let j
    for (j = 0; j < M; j++) {
      if (txt.charAt(i + j) !== pat.charAt(j)) {
        break
      }
    }
    if (j === M) return i
  }

  return N
}
