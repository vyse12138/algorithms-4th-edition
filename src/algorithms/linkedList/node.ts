export type NodeData = number | string | null

export default class Node {
  constructor(data: NodeData) {
    this.data = data
  }

  data: NodeData

  next: Node | null = null
}
