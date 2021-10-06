import Node from './node'

export default class LinkedList {
  constructor(head: Node | null = null) {
    this.head = head
  }

  head: Node | null

  size = () => {
    let count = 0
    const head = this.head
    let node = this.head
    while (node) {
      count++
      node = node.next
      if (head === node) {
        return -1
      }
    }
    return count
  }

  clear = () => {
    this.head = null
  }

  getHead = (): Node | null => {
    return this.head
  }
  getTail = (): Node | null => {
    let tail = this.head
    if (tail) {
      while (tail.next) {
        tail = tail.next
      }
    }
    return tail
  }
}
