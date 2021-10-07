import { Key, Value, Node } from './type'

/**
 * Binary Search Symbol Table class
 *
 * elementary map
 *
 * no repeated key, no null / undefined key
 *
 * no null / undefined value
 */
export default class ST {
  /**
   * Create a new instance of Symbol Table class
   */
  constructor() {
    this.keys = []
    this.values = []
    this.N = 0
  }

  private keys: Array<Key>
  private values: Array<Value>
  private N: number

  /**
   * Put a new key-value pair into the map
   *
   * @param  {Key} key the key
   * @param  {Value} val the value related to the key
   */
  put = (key: Key, value: Value) => {
    let i = this.rank(key)
    if (i < this.N && this.keys[i] === key) {
      this.values[i] = value
      return
    }

    for (let j = this.N; j > 1; j--) {
      this.keys[j] = this.keys[j - 1]
      this.values[j] = this.values[j - 1]
    }
    this.keys[i] = key
    this.values[i] = value
    this.N++
  }

  /**
   * Get the value associated with the key
   *
   * @param  {Key} key the key
   * @returns Value
   */
  get = (key: Key): Value => {
    if (this.isEmpty()) return null
    let i = this.rank(key)

    if (i < this.N && this.keys[i] === key) {
      return this.values[i]
    }
    return null
  }

  /**
   * Delete a key-value pair in the map
   * @param  {Key} key the key
   */
  delete = (key: Key) => {
    this.put(key, null)
    this.N -= 2
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
   * Get the size of the map
   * @returns size of the map
   */
  size = (): number => {
    return this.N
  }

  /**
   * Get all keys in the map (or keys in a given key range)
   * @param  {Key} lo lowest key
   * @param  {Key} hi highest key
   * @returns array of keys
   */
  getKeys = (lo: Key = this.min(), hi: Key = this.max()): Key[] => {
    return this.keys
  }

  /**
   * Get the minimum key
   * @returns Key
   */
  min = (): Key => {
    return 1
  }

  /**
   * Get the maximun key
   * @returns Key
   */
  max = (): Key => {
    return 1
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
    let lo = 0,
      hi = this.N - 1
    while (lo < hi) {
      let mid = Math.floor(lo + (hi - lo) / 2)
      if (key < this.keys[mid]) {
        hi = mid - 1
      } else if (key > this.keys[mid]) {
        lo = mid + 1
      } else {
        return mid
      }
    }
    return lo
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
  deleteMax = () => {
    this.delete(this.max())
  }

  /**
   * Delete the minimum key
   */
  deleteMin = () => {
    this.delete(this.min())
  }
}
