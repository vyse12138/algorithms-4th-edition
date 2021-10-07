/**
 * Key of the map
 */
export type Key = string | number

/**
 * Value of the map
 */
export type Value = string | number | object | null

export type Node = {
  key: Key
  value: Value
}
