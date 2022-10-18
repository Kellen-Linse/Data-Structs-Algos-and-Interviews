# Fast and Slow Pointers

<hr>

## General Notes

- The Fast & Slow pointer technique is a pointer algorithm that uses two pointers which move through an array (or linked list) at different speeds. This approach is quite useful when dealing with cyclic linked list or arrays.


## Problems

### LinkedList Cycle (easy)

> **Prompt:** Given the **head of a Singly LinkedList**, write a function to determine *if the LinkedList has a cycle in it or not*.

<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js

// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments
const has_cycle = function(head) {
  let slow = head,
      fast = head;

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) return true;
  }

  return false;
}

// Comments
const has_cycle = function(head) {

  // Create two pointers
  let slow = head,
      fast = head;

  // We are going to iterate over the LL while we haven't reached the end.
  while(fast && fast.next){

    // Each loop we will move the pointers, but at different rates.
    // The slow pointer will move one node at a time.
    // The fast pointer will move two nodes at a time.
    slow = slow.next;
    fast = fast.next.next;

    // The fast and slow pointers should never be the same node,
    // if they are, it means that the fast pointer has circled around back on the slow pointer.
    // In that case we will return trues as we have found a loop.
    if(slow === fast) return true;
  }

  // If we reach the end of the list, we return false, 
  // as we will never reach the end of the list if there is a loop.
  return false;
}
```
<br>

- **Comments:**
  - *Pointers:* Two a fast and slow pointer.
  - *Movement:* The slow pointer will move through the list one node at a time and the fast pointer will move through the list two nodes at a time.
  - *Variables:* No extra variables (other than pointers).
  - When you have two pointers, both starting at the beginning of a linked list, and moving through the list at two different speeds, one fast, one slow, if your linked list is non-cyclic, those pointers should never meet. However, if there is a cycle in your linked list, once both pointers enter the cycle, eventually your two pointers will point to the same node, we can look for that condition to check to see if there is a cycle.


<br>

- **Basic Pattern:**
  1. Create two pointers, set both pointers to the head of the LL.
  2. Create a loop that will run while we haven't reached the end of the LL.
     1. Set the slow pointer to be the next node after itself.
     2. Set the fast pointer to be two nodes after itself.
     3. If the slow pointer is equal to the fast pointer, return true, as we have found a loop.
  3. If get to the end of the LL, we can return false as there is no cycle within our loop.

### Bonus Problem Notes:

> Length of Cycle:
>   - Given the head of a LinkedList with a cycle, find the length of the cycle.

<br>

- **Solution Notes:**
  - *We can use the above solution to find the cycle in the LinkedList. Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow pointer again to find the length of the cycle.*

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

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) { // found the cycle

      // Return the cycle length
      return calculate_cycle_length(slow);
    }
  }

  // If we reach here there is no cycle
  return 0;
}


function calculate_cycle_length(slow) {

  
  let current = slow, // Create a new pointer starting at slow
      cycle_length = 0; // Cycle length count
  
  // Loop until the current pointer circles around back to the slow pointer, counting each step as it goes
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }

  // return the length of the cycle once counted
  return cycle_length;
}
```