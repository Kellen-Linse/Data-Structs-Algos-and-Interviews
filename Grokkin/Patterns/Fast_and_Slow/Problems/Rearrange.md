# Rearrange a LinkedList (medium)

> **Prompt:** Given the head of a Singly LinkedList, write a method to **modify the LinkedList** such that **the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.** So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
>
> - Your algorithm should **use O(1) space** and the input LinkedList should be modified in-place.

<br>

### **Example:**

```js
Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
```

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

// No Comments
var reorderList = function(head) {

  let mid = findMid(head);
  let revHead = reverse(mid);

  let curr = head,
      revCurr = revHead;

  while(revCurr){
    let next = curr.next;
    let revNext = revCurr.next;
    curr.next = revCurr;
    revCurr.next = next;
    curr = next;
    revCurr = revNext;
  }

  if (curr) curr.next = null;
}

function findMid(head){
    let fast = head, 
        slow = head;

    while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    }

    return slow;
}

function reverse(node){
  let prev = null;
  let curr = node;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Comments
var reorderList = function(head) {

  // Find the middle of the LL.
  let mid = findMid(head);

  // Reverse the second half of the LL.
  let revHead = reverse(mid);

  // Create pointers at the head of each half of the list.
  let curr = head,
      revCurr = revHead;

  // Zip the two halves.
  while(revCurr){
    let next = curr.next;
    let revNext = revCurr.next;
    curr.next = revCurr;
    revCurr.next = next;
    curr = next;
    revCurr = revNext;
  }

  // If at the end of the rearranging, there is still a node at the current pointer,
  // then we need to point that node towards null, as it is the last node in our list.
  if (curr) curr.next = null;
}

function findMid(head){
    let fast = head, slow = head;

    while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    }

    return slow;
}

function reverse(node){
  let prev = null;
  let curr = node;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

<br>

### **Comments:**
  - Before you can solve this problem, you first must know how to **find the middle of a linked list**, **reverse a linked list**, and **merge two linked lists**.
  - Once that the middle is found and the second half is reversed, it is just a matter of zipping the two lists together.
  - The trick is getting the sequence correct for zipping tw two halves together and knowing that you must account for pointing the last node to null depending on whether the list is an odd or even length.

<br>

### **Basic Pattern:**
  1. Find the middle of the LL.
  2. Reverse the second half of the LL.
  3. Combine the two halves of the linked list in order.
  4. If the curr pointer still has a node it is pointing to, point that nodes next value to null.

<br>

### **Algorithm:**
  1. Find the middle of the LL.
  2. Reverse the second half of the LL.
  3. Create two pointers, one to point to the head of each half of the list (curr = head, revCurr = revHead).
  4. while there exists a node in the reverse current pointer (revCurr), we are going to run our while loop.
     1. Create two pointers to point the the next node in each list (next and revNext).
     2. Set the curr nodes next pointer to the revCurr node.
     3. Set the revCurr nodes next pointer to the next pointer we just created.
     4. Set curr and revCurr to be next and revNext respectively.
  5. Once out of the while loop, we need to check if there still exists a node at our curr pointer,
     1. If so, we will point it's next pointer to null as it is the last node it our list.
  6. We are modifying the list in place, so we do not return anything.
