export default (s: string) => {
  let N = s.length

  let R = 26

  let aux: string[] = []

  let count: number[] = new Array(R + 1).fill(0)

  for (let i = 0; i < N; i++) {
    count[key(s[i]) + 1]++
  }

  for (let r = 0; r < R; r++) {
    count[r + 1] += count[r]
  }

  for (let i = 0; i < N; i++) {
    aux[count[key(s[i])]++] = s[i]
  }

  let res = aux.join('')

  return res
}

const key = (s: string): number => {
  return s.charCodeAt(0) - 'a'.charCodeAt(0)
}
