import LinkedList from './linkedList'
import linkedList from './linkedList'
import Node from './Node'

export default () => {
  let n1 = new Node(1)
  let n2 = new Node(2)
  let n3 = new Node(3)
  let n4 = new Node(4)
  let n5 = new Node(5)
  console.log(n1)
  let l1 = new LinkedList(n1)
  n1.next = n2
  n2.next = n3
  n3.next = n4
  console.log(l1.getTail())
}
