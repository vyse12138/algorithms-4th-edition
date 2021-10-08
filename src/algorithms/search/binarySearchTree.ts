import { Key, Value } from './type'

class TreeNode {
  key: Key
  value: Value
  N: number
  left: TreeNode | null = null
  right: TreeNode | null = null
  constructor(key?: Key | null, value?: Value, N?: number) {
    this.key = key ?? 0
    this.value = value ?? 0
    this.N = N ?? 0
  }
}

/**
 * Binary Search Tree class
 *
 * no repeated key, no null / undefined key
 *
 * no null / undefined value
 */
export default class BST {
  /**
   * Create a new instance of Binary Search Tree class
   */
  constructor() {}
  root: TreeNode | null = null

  /**
   * Put a new key-value pair into the map
   *
   * @param  {Key} key the key
   * @param  {Value} val the value related to the key
   */
  put = (key: Key, value: Value) => {
    this.root = this.putR(this.root, key, value)
  }

  /** Internal recursive function for put
   * @param  {TreeNode|null} node
   * @param  {Key} key
   * @returns Value
   */
  private putR(node: TreeNode | null, key: Key, value: Value): TreeNode | null {
    if (node === null) {
      return new TreeNode(key, value, 1)
    }

    if (key < node.key) node.left = this.putR(node.left, key, value)
    else if (key > node.key) node.right = this.putR(node.right, key, value)
    else node.value = value

    node.N = this.size(node.left) + this.size(node.right) + 1

    return node
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
   * Get all keys in the map (or keys in a given key range)
   * @param  {Key} lo lowest key
   * @param  {Key} hi highest key
   * @returns array of keys
   */
  getKeys = (): Key[] => {
    return []
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
   * Get the maximum key that is smaller than `key`
   * @param  {Key} key
   * @returns Key
   */
  floor = (key: Key): Key => {
    return 1
  }

  /**
   * Get the minimum key that is greater than `key`
   * @param  {Key} key
   * @returns Key
   */
  ceil = (key: Key): Key => {
    return 1
  }

  /**
   * Get the number of keys that are smaller than `key`
   * @param  {Key} key
   * @returns Number
   */
  rank = (key: Key): number => {
    return 0
  }

  /**
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
  deleteMin = () => {}
}
