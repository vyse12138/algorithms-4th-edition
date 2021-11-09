import string from '.'

type Value = number | null

class Node {
  val: Value = 0
  next: Node[] = new Array(256).fill(new Node())
}

// String search tree
export default class StringST {
  private R = 256
  root: Node = new Node()

  get = (key: string): Value => {
    let x: Node | null = this.getR(this.root, key, 0)

    if (x === null) return null

    return x.val
  }

  getR = (x: Node, key: string, d: number): Node | null => {
    if (x === null) {
      return null
    }

    if (d === key.length) {
      return x
    }

    let c = key.charCodeAt(d)

    return this.getR(x.next[c], key, d + 1)
  }

  put = (key: string, val: Value) => {
    this.root = this.putR(this.root, key, val, 0)
  }

  putR = (x: Node | null, key: string, val: Value, d: number) => {
    if (x === null) {
      x = new Node()
    }

    if (d === key.length) {
      x.val = val
      return x
    }

    let c = key.charCodeAt(d)

    x.next[c] = this.putR(x.next[c], key, val, d + 1)

    return x
  }

  // delete = (key: string) => {}

  // contains = (key: string): boolean => {
  //   return false
  // }

  // isEmpty = (): boolean => {
  //   return false
  // }

  // longestPrefixOf = (s: string): string => {
  //   return ''
  // }

  keysWithPrefix = (pre: string): string[] => {
    let queue: string[] = []

    let root = this.getR(this.root, pre, 0)

    if (root) {
      this.collect(root, pre, queue)
    }

    return queue
  }

  collect = (x: Node, pre: string, queue: string[]) => {
    if (x === null) return
    if (x.val !== null) {
      queue.push(pre)
    }

    for (let c = 0; c < this.R; c++) {
      this.collect(x.next[c], pre + c, queue)
    }
  }

  /**
   * `.` can match anything
   *
   * @param  {string} s
   * @returns string[]
   */
  keysThatMatch = (s: string): string[] => {
    return []
  }

  getKeys = (): string[] => {
    return this.keysWithPrefix('')
  }
}
