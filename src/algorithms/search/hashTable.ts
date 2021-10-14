import { Key, Value } from './type'

/**
 * Hash table class
 *
 * Hash table with linear probing
 *
 * Map based on hash table
 *
 */
export default class HT {
  // Map size
  private N: number = 0

  // Table size
  private M: number

  private keys: Array<Key | null> = []
  private values: Value[] = []

  constructor(M: number = 16) {
    this.M = M
  }

  /**
   * Put a new key-value pair into the map
   *
   * @param  {Key} key the key
   * @param  {Value} val the value related to the key
   */
  put = (key: Key | null, value: Value) => {
    if (this.N > this.M / 2) {
      this.resize(2 * this.M)
    }

    let i

    for (i = this.hash(key); this.keys[i]; i = (i + 1) % this.M) {
      if (this.keys[i] === key) {
        this.values[i] = value
      }
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
    for (let i = this.hash(key); this.keys[i]; i = (i + 1) % this.M) {
      if (key === this.keys[i]) {
        return this.values[i]
      }
    }
    return null
  }

  /**
   * Delete a key-value pair in the map
   * @param  {Key} key the key
   */
  delete = (key: Key) => {
    if (!this.keys.includes(key)) {
      return
    }
    let i = this.hash(key)

    while (!(key === this.keys[i])) {
      i = (i + 1) % this.M
    }

    this.keys[i] = null
    this.values[i] = null
    i = (i + 1) % this.M
    while (this.keys[i]) {
      let keyToRedo = this.keys[i]
      let valueToRedo = this.values[i]
      this.keys[i] = null
      this.values[i] = null

      this.N--

      this.put(keyToRedo, valueToRedo)

      i = (i + 1) % this.M
    }

    this.N--

    if (this.N > 0 && this.N === this.M / 8) {
      this.resize(this.M / 2)
    }
  }

  /**
   * Generate a hashcode for the key
   *
   * Java-like hashcode generator for string
   *
   * @param  {Key} key
   * @returns number hashcode
   */
  private hashcode = (key: Key | null): number => {
    if (typeof key === 'string') {
      let hash = 0
      for (let i = 0; i < key.length; i++) {
        const character = key.charCodeAt(i)
        hash = (hash << 5) - hash + character
        hash = hash & hash
      }
      return hash
    }
    return 0
  }

  /**
   * Generate a hashcode for the key
   *
   * This hash is being used in the map
   *
   * @param  {Key} key
   * @returns number hashcode
   */
  private hash = (key: Key | null): number => {
    return (this.hashcode(key) & 0x7fffffff) % this.M
  }

  private resize = (size: number) => {
    let temp = new HT(size)
    for (let i = 0; i < this.M; i++) {
      if (this.keys[i]) {
        temp.put(this.keys[i], this.values[i])
      }
      this.keys = temp.keys
      this.values = temp.values
      this.M = temp.M
    }
  }
}
