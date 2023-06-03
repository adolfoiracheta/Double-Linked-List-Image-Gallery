export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  //push a new value to the tail of the linked list
  push(value) {
    let node = new Node(value);
    this.length++
      if (!this.head) {
        this.head = node
        this.tail = node
      }
      else {
        this.tail.next = node 
        node.prev = this.tail 
        this.tail = node 
      }
  }

  //remove an item from the end of the linked list
  pop() {
    if (this.length == 1) {
      this.head = null 
      this.tail = null 
    }
    else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.length--
  }

  //remove a node from the beginning of the list
  shift() {
    if (this.length == 1) {
      this.head = null
      this.tail = null
    }
    else {
      this.head = this.head.next
      this.head.prev = null 
    }
    this.length--
  }

  //add a node to the head of the linked list
  unshift(value) {
    let node = new Node()
      if (!this.tail) {
        this.head = node
        this.tail = node
      }
      else {
        this.head.prev = node
        node.next = this.head 
        this.head = node
      }
      this.length++
  }

  //get a Node at a specific index
  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null 
    }
    else if (index < Math.floor(this.length / 2)) {
      let current = this.head
      let counter = 0
      while (counter < index) {
        current = current.next
        counter++
      }
      return current
    }
    else {
      let current = this.tail
      let counter = this.length - 1
      while (counter > index) {
        current = current.prev
        counter--
      } 
      return current 
    }
  }

  //set a node at a specific index
  setNodeAtIndex(index, value) {
    if (!this.getNodeAtIndex(index)) {
      return false
    }
    else {
      this.getNodeAtIndex(index).value = value
      return true 
    }
  
  }

  //insert a node at a specific index
  insertAtIndex(index, val) {
    let node = new Node(val);
    if (index < 0 || index > this.length) {
    return null
    }
    else if (index == 0) {
      return this.unshift(val);
    }
    else if (index == this.length) {
      return this.push(val)
    }
    let preNode = this.getNodeAtIndex(index - 1)
    let currentNode = preNode.next
    node.next = currentNode 
    currentNode.prev = node 
    preNode.next = node 
    node.prev = preNode
    this.length++
    }

  //remove a node at a specific index
  removeAtIndex(index) {
    if (index < 0 || index > this.length) {
      return null
    }
    else if (index == 0) {
      return this.shift() 
    }
    else if (index == this.length - 1) {
      return this.pop()

    }
    let currentNode = this.getNodeAtIndex(index);
    currentNode.prev.next = currentNode.next
    currentNode.next.prev = currentNode.prev
    currentNode.next = null 
    currentNode.prev = null
    this.length--
  }
}
