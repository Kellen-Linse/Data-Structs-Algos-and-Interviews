# Cycle in a Linked List (easy)

> **Prompt:** Given the **head of a Singly LinkedList**, write a function to determine _if the LinkedList has a cycle in it or not_.

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js

// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments
function hasCycle(head){
  let slow = head,
      fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};

// Comments
function hasCycle(head){

  // Create two pointers
  let slow = head,
      fast = head;

  // We are going to iterate over the LL while we haven't reached the end.
  while (fast && fast.next) {

    // Each loop we will move the pointers, but at different rates.
    // The slow pointer will move one node at a time.
    // The fast pointer will move two nodes at a time.
    slow = slow.next;
    fast = fast.next.next;

    // The fast and slow pointers should never be the same node,
    // if they are, it means that the fast pointer has circled around back on the slow pointer.
    // In that case we will return trues as we have found a loop.
    if (slow === fast) return true;
  }

  // If we reach the end of the list, we return false,
  // as we will never reach the end of the list if there is a loop.
  return false;
};
```

<br>

### **Comments:**
  - _Pointers:_ Two a fast and slow pointer.
  - _Movement:_ The slow pointer will move through the list one node at a time and the fast pointer will move through the list two nodes at a time.
  - _Variables:_ No extra variables (other than pointers).
  - When you have two pointers, both starting at the beginning of a linked list, and moving through the list at two different speeds, one fast, one slow, if your linked list is non-cyclic, those pointers should never meet, and will eventually reach the end of the list. However, if there is a cycle in your linked list, once both pointers enter the cycle, eventually your two pointers will point to the same node, we can look for that condition to check to see if there is a cycle.
  - Remember to check for **fast && fast.next** as the fast pointer will be moving two nodes at a time.

<br>

### **Basic Pattern:**
  1. Create two pointers, set both pointers to the head of the LL.
  2. Create a loop that will run while we haven't reached the end of the LL.
     1. Set the slow pointer to be the next node after itself.
     2. Set the fast pointer to be two nodes after itself.
     3. If the slow pointer is equal to the fast pointer, return true, as we have found a loop.
  3. If get to the end of the LL, we can return false as there is no cycle within our loop.

### **Bonus Problem Notes**:

> Length of Cycle:
>
> - Given the head of a LinkedList with a cycle, find the length of the cycle.

<br>

- **Solution Notes:**

  - We can use the above solution to find the cycle in the LinkedList. 
  - Once the fast and slow pointers meet in the above solution, instead of returning,
  - Starting at that node we can move a pointer one node at a time until it returns to the starting node. 
  - At each node we will add 1 to the count.
  - When the node reaches the starting node again, we return the count.

- **Code:**

```js
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function find_cycle_length(head) {

  // Create pointers to run fast and slow algo
  let slow = head,
      fast = head;

  // Find the cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { // Cycle found     
      return calculate_cycle_length(slow); // Find then return the cycle length
    }
  }
  // If we reach here, no cycle was found
  return 0;
}

function calculate_cycle_length(start) {
  let current = start, // Create a new pointer starting at slow
      cycleLen = 0; // Cycle length count

  // Loop until the current pointer circles back around to the start pointer, 
  // counting each step as it goes
  while (true) {
    current = current.next;
    cycleLen++;
    if (current === start) {
      break;
    }
  }

  // return the length of the cycle once counted
  return cycleLen;
}
```