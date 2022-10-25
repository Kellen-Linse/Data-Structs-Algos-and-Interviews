# Middle of the LinkedList (easy)

> **Prompt:** Given the head of a Singly LinkedList, *write a method to return the middle node of the LinkedList.*
> - If the total number of nodes in the LinkedList is even, return the second middle node.

<br>

### **Example:**

```js
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4
```

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments
const findMid = function(head){
  let slow = head,
      fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Comments
const findMid = function(head){
  // Create two pointers at the start of the LL.
  let slow = head,
      fast = head;

  // Iterate over the LL while the fast pointer hasn't reached the end of the list.
  while (fast && fast.next) {
    // Move the pointers down the list, the slow pointer one node at a time and the fast pointer two nodes at a time.
    slow = slow.next;
    fast = fast.next.next;
  }

  // Return the slow pointer, it will be half way down the list when the fast pointer reaches the end.
  return slow;
};
```

<br>

### **Comments:**
  - If the LL is made up of an even number of elements, this will return the **second** middle node.
  - If the LL is made up of an odd number of elements, this will return the middle node.