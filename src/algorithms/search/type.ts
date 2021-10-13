/**
 * Key of the map
 */
export type Key = string | number | null

/**
 * Value of the map
 */
export type Value = string | number | object | null

export type Node = {
  key: Key
  value: Value
}

export class TreeNode {
  key: Key
  value: Value
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    key?: Key | null,
    value?: Value,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.key = key ?? 0
    this.value = value ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}
