import { Key, Value, Node } from './type'

/**
 * Sequential Search Symbol Table class (based on JS array instead of LinkedList)
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
    this.array = []
  }

  private array: Array<Node>

  /**
   * Put a new key-value pair into the map
   *
   * @param  {Key} key the key
   * @param  {Value} val the value related to the key
   */
  put = (key: Key, value: Value) => {
    if (this.has(key)) {
      this.array.find(n => n.key === key)!.value = value
      return
    }
    this.array.push({ key, value })
  }

  /**
   * Get the value associated with the key
   *
   * @param  {Key} key the key
   * @returns Value
   */
  get = (key: Key): Value => {
    return this.array.find(n => n.key === key)?.value ?? null
  }

  /**
   * Delete a key-value pair in the map
   * @param  {Key} key the key
   */
  delete = (key: Key) => {
    this.put(key, null)
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
    return this.array.filter(n => n.value !== null).length
  }

  /**
   * Get all keys in the map (or keys in a given key range)
   * @param  {Key} lo lowest key
   * @param  {Key} hi highest key
   * @returns array of keys
   */
  keys = (lo: Key = this.min(), hi: Key = this.max()): Key[] => {
    return this.array.filter(n => this.has(n.key)).map(n => n.key)
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
    return 1
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
