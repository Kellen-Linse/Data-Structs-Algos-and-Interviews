
//node
// piece of data - val
// reference to the next node - next
class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null; // Keeps track of the first node in the list
    this.tail = null; // Keeps track of the last node in the list
    this.length = 0;  // Keeps track of the amount of notes in the list
  }

  // Adds a new node to the list (append)
  // O(1)
  push(val){
    let newNode = new Node(val);

    if(!this.head){
      // In JS objects are passed by reference, so each the tail and the head are pointing to the same node object.
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Set the current nodes next property to point to the new node
      this.tail = newNode;      // Set the tail property of the linked list to be the new node
    }
    this.length++;
    
    return this // returns the whole linked list
  }


  // Traverse through the list and print out each value.
  traverseAndPrint(){
    let current = this.head;

    // check to see if current is a truthy value.
    while(current){ 
      console.log(current.val);
      current = current.next;
    }
  }

  // Remove the last node in a linked list
  Pop(){
    // If the list is empty
    if(!this.head) return undefined
    
    // If the list has one item
    if(this.length === 1){
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return temp;
    }

    // Trackers for the current and the previous node;
    let pre;
    let current = this.head;

    // while there is something for current to move forward to
    while(current.next){ 
      pre = current;
      current = current.next;
    }

    pre.next = null; // sever the connection with the old tail object
    this.tail = pre; // Reset the tail value of the List object
    this.length--;   // Decrement the length of the list
    return current;
  }

  shift(){
    if(!this.head) return undefined;
  
    let temp = this.head; //save original head to return
    this.head = this.head.next;
    this.length--;
    if(this.length === 0) this.tail = null;
    return temp;
  }

  unshift(val){
    let newNode = new Node(val);
  
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if(this.length === 1) this.tail = this.head;
  
    return this;
  }

  get(position){
    if(position > this.length || position < 0) return null;
  
    let current = this.head;
  
    for(let i = 0; i < position; i++){
      current = this.head.next;
    }
  
    return current
  }

  set(position, val){
    let foundNode = get(position);
    if(! foundNode) return false;
  
    foundNode.val = val;
    return true;
  }

  insert(position, val){
    if(position > this.length || position < 0) return false;
    if(position === this.length) return !!this.push(val);
    if(position === 0) return !!this.unshift(val);
  
    let newNode = new Node(val);
    let foundNode = get(position - 1);
  
    newNode.next = foundNode.next;
    foundNode.next = newNode;
  
    this.length++;
    return true;
  }

  set(position){
    if(position > this.length || position < 0) return false;
    if(position === this.length - 1) return this.pop();
    if(position === 0) return this.shift();
  
    let foundNode = get(position - 1);
  
    let tempNode = foundNode.next;
    foundNode.next = foundNode.next.next;
  
    this.length--;
    return tempNode;
  }

  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = node;
  
    let next;
    let prev = null;
    for(let i = 0; i > this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

}
