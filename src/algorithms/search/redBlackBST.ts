import node from '../linkedList/node'
import { Key, Value } from './type'

class TreeNode {
  key: Key
  value: Value
  N: number
  left: TreeNode | null = null
  right: TreeNode | null = null
  color: boolean
  constructor(key: Key | null, value: Value, N: number, color: boolean) {
    this.key = key ?? 0
    this.value = value ?? 0
    this.N = N ?? 0
    this.color = color
  }
}

/**
 * Red Black Binary Search Tree class
 *
 * no repeated key, no null / undefined key
 *
 * no null / undefined value
 */
export default class RBBST {
  /**
   * Create a new instance of Binary Search Tree class
   */
  constructor() {}

  root: TreeNode | null = null
  private readonly RED = true
  private readonly BLACK = false

  /**
   * Check if a node is connected with a red link from parent
   *
   * @param  {TreeNode|null} node
   * @returns true if red
   */

  private isRed = (node: TreeNode | null): boolean => {
    return node === null ? false : node.color === this.RED
  }

  /**
   * Put a new key-value pair into the map
   *
   * @param  {Key} key the key
   * @param  {Value} val the value related to the key
   */
  put = (key: Key, value: Value) => {
    this.root = this.putR(this.root, key, value)
    this.root.color = this.BLACK
  }

  /** Internal recursive function for put
   *
   * @param  {TreeNode|null} node
   * @param  {Key} key
   * @returns Value
   */
  private putR(h: TreeNode | null, key: Key, value: Value): TreeNode {
    if (h === null) {
      return new TreeNode(key, value, 1, this.RED)
    }

    if (key < h.key) {
      h.left = this.putR(h.left, key, value)
    } else if (key > h.key) {
      h.right = this.putR(h.right, key, value)
    } else {
      h.value = value
    }

    if (this.isRed(h.right) && !this.isRed(h.left)) {
      h = this.rotateLeft(h)
    }

    if (this.isRed(h.left) && this.isRed(h.left!.left)) {
      h = this.rotateRight(h)
    }

    if (this.isRed(h.left) && this.isRed(h.right)) {
      this.flipColors(h)
    }

    h.N = this.size(h.left) + this.size(h.right) + 1

    return h
  }

  /**
   * Get the value associated with the key
   *
   * @param  {Key} key the key
   * @returns Value
   */
  get = (key: Key): Value => {
    return this.getR(this.root, key)
  }

  /** Internal recursive function for get
   * @param  {TreeNode|null} node
   * @param  {Key} key
   * @returns Value
   */
  private getR(node: TreeNode | null, key: Key): Value {
    if (node === null) return null

    if (key < node.key) return this.getR(node.left, key)
    else if (key > node.key) return this.getR(node.right, key)
    else return node.value
  }

  /**
   * Delete a key-value pair in the map
   * @param  {Key} key the key
   */
  delete = (key: Key) => {
    this.root = this.deleteR(this.root, key)
  }

  /** Internal recursive function for delete
   * @param  {TreeNode|null} node
   * @param  {Key} key
   * @returns Value
   */
  private deleteR(node: TreeNode | null, key: Key): TreeNode | null {
    if (node === null) return null
    if (key < node.key) {
      node.left = this.deleteR(node.left, key)
    } else if (key > node.key) {
      node.right = this.deleteR(node.right, key)
    } else {
      if (node.right === null) return node.left
      if (node.left === null) return node.right
      const n = node
    }
    return node
  }

  /** rotate a right red link to left
   *
   * @param  {TreeNode} h parent tree node
   * @returns TreeNode the new parent node
   */
  private rotateLeft = (h: TreeNode): TreeNode => {
    if (h.right) {
      const x: TreeNode = h.right

      h.right = x.left

      x.left = h

      x.color = h.color
      h.color = this.RED

      x.N = h.N

      h.N = 1 + this.size(h.left) + this.size(h.right)

      return x
    }
    return h
  }

  /** rotate a left red link to right
   *
   * @param  {TreeNode} h parent tree node
   * @returns TreeNode the new parent node
   */
  private rotateRight = (h: TreeNode): TreeNode => {
    if (h.left) {
      const x: TreeNode = h.left

      h.left = x.right

      x.right = h

      x.color = h.color
      h.color = this.RED

      x.N = h.N

      h.N = 1 + this.size(h.left) + this.size(h.right)

      return x
    }
    return h
  }

  private flipColors = (h: TreeNode) => {
    if (h.left && h.right) {
      h.color = this.RED

      h.left.color = this.BLACK
      h.right.color = this.BLACK
    }
  }
  /**
   * Get the size of the map
   * @returns size of the map
   */
  size = (node: TreeNode | null = this.root): number => {
    return node ? node.N : 0
  }

  /**
   * Check if there's a value related to the key in the map
   *
   * @param  {Key} key
   * @returns true if there is a value associated with the key
   */
  has = (key: Key): boolean => {
    return this.get(key) !== null
  }

  /**
   * Check if the map is empty
   *
   * @returns true if empty
   */
  isEmpty = (): boolean => {
    return this.size() === 0
  }

  /**
   * Get all keys
   * @returns array of keys
   */
  getKeys = (): Key[] => {
    const keys: Key[] = []

    this.getKeysR(this.root, keys)

    return keys
  }

  /**
   * Internal recursive function for getKey
   * @param  {TreeNode|null} node
   * @param  {Key[]} keys
   */
  private getKeysR = (node: TreeNode | null, keys: Key[]) => {
    if (node) {
      this.getKeysR(node.left, keys)
      keys.push(node.key)
      this.getKeysR(node.right, keys)
    }
  }

  /**
   * Get the minimum key
   * @returns Key
   */
  min = (): Key | null => {
    if (!this.root) {
      return null
    }
    let node: TreeNode | null = this.root
    let min = this.root.key
    while (node) {
      min = node.key
      node = node.left
    }
    return min
  }

  /**
   * Get the maximun key
   * @returns Key
   */
  max = (): Key | null => {
    if (!this.root) {
      return null
    }
    let node: TreeNode | null = this.root
    let max = this.root.key
    while (node) {
      max = node.key
      node = node.right
    }
    return max
  }

  /**
   * TODO
   *
   * Get the maximum key that is smaller than `key`
   * @param  {Key} key
   * @returns Key
   */
  floor = (key: Key): Key => {
    return 1
  }

  /**
   * TODO
   *
   * Get the minimum key that is greater than `key`
   * @param  {Key} key
   * @returns Key
   */
  ceil = (key: Key): Key => {
    return 1
  }

  /**
   * TODO
   *
   * Get the number of keys that are smaller than `key`
   * @param  {Key} key
   * @returns Number
   */
  rank = (key: Key): number => {
    return 0
  }

  /**
   * TODO
   *
   * Select the key with the given rank
   * @param  {number} k the rank
   * @returns Key
   */
  select = (k: number): Key => {
    return 1
  }

  /**
   * Delete the maximum key
   */
  deleteMax = () => {}

  /**
   * Delete the minimum key
   */
  deleteMin = () => {
    if (this.root) {
      if (this.isRed(this.root.left) && !this.isRed(this.root.right)) {
        this.root.color = this.RED
      }

      this.root = this.deleteMinR(this.root)

      if (this.root && !this.isEmpty()) {
        this.root.color = this.BLACK
      }
    }
  }

  /**
   * @param  {TreeNode|null=this.root} h
   */
  private deleteMinR = (h: TreeNode | null = this.root): TreeNode | null => {
    if (h) {
      if (h.left === null) {
        return null
      }

      if (!this.isRed(h.left) && !this.isRed(h.left.left)) {
        h = this.moveRedLeft(h)
      }

      h.left = this.deleteMinR(h.left)

      return this.balanace(h)
    }

    return null
  }

  private moveRedLeft = (h: TreeNode): TreeNode => {
    this.flipColors(h)
    if (h.right && this.isRed(h.right.left)) {
      h.right = this.rotateRight(h.right)
      h = this.rotateLeft(h)
    }
    return h
  }

  private balanace = (h: TreeNode): TreeNode => {
    if (this.isRed(h.right)) {
      h = this.rotateLeft(h)
    }

    if (this.isRed(h.right) && !this.isRed(h.left)) {
      h = this.rotateLeft(h)
    }

    if (this.isRed(h.left) && this.isRed(h.left!.left)) {
      h = this.rotateRight(h)
    }

    if (this.isRed(h.left) && this.isRed(h.right)) {
      this.flipColors(h)
    }

    h.N = this.size(h.left) + this.size(h.right) + 1

    return h
  }
}
