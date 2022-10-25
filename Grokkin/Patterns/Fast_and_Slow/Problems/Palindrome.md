# Palindrome LinkedList (medium)

> **Prompt:** Given the head of a Singly LinkedList, _write a method to check if the LinkedList is a palindrome or not_.
>
> - The algorithm should run in **O(N) time complexity** 
> - The algorithm should use **O(1) space**
> - **The input LinkedList should be in the original form once the algorithm is finished.**

<br>

### **Example:**

```js
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true
```

<br>

### **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

### **Code:**

```js
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments
const is_palindromic_linked_list = function (head) {
  let fast = head,
      mid = head;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }

  let reversedHead = reverse(mid);
  let copyReversedHead = reversedHead;

  while (head && reversedHead) {
    if (head.value !== reversedHead.value) break;
    head = head.next;
    reversedHead = reversedHead.next;
  }

  reverse(copyReversedHead);

  return !reversedHead;
};

function reverse(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// Comments
const is_palindromic_linked_list = function (head) {
  // Find the middle of the linked list
  let fast = head,
    mid = head;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }

  // Reverse from the middle of the linked list to the end
  let reversedHead = reverse(mid);

  // Save a reference to the head of the reversed portion, we will need to switch it back at the end
  let copyReversedHead = reversedHead;

  // Iterate over the first half of the linked list and compare the values at each node.
  // If the nodes don't match, it means either that we have found two nodes that are not the same.
  // We cannot return false yet, because the prompt states the list "should be in the original form once the algorithm is finished."
  // We will break out of the loop if the nodes don't match or if the one of the heads is null.
  while (head && reversedHead) {
    if (head.value !== reversedHead.value) break;
    head = head.next;
    reversedHead = reversedHead.next;
  }

  // Here we are reversing the second half of the linked list back to it's original state.
  reverse(copyReversedHead);

  // Now we check to see if the reverseHead reached the end of it's list when we were comparing.
  // Either it reached the end of it's list, a null value, and we have therefore found a palindrome, 
  // or it stopped when it encountered a mismatched value. 
  return !reversedHead;
};

// Can't use recursion, we need O(1) space
function reverse(head) {
  // Create a previous node.
  let prev = null,
      curr = head;

  // Iterate until we get to the end of the list.
  while (curr) {
    // Create a next pointer and set it to the current pointers next node.
    let next = curr.next;

    // Now set the current nodes next to the prev node (which will start with null, since the head is now the end it will point to null).
    curr.next = prev;

    // Now we will set the prev to be the current node as it will be the next one to be pointed to.
    prev = curr;

    // Finally we will set current to be the node currently in next, as it is the next node to be evaluated.
    curr = next;
  }

  // The last time we set prev it will be what was the last node in the original list and is now the head of the reversed list.
  return prev;
}
```

<br>

### **Comments:**
  - _Pointers:_ This problem uses several different pointers and of different types. We first use a fast and slow pointer to find the center of the LL. We then use two head pointers to point to the heads of the start of the list and the reversed portion. Finally, we will use a pointer to the original head of reversed portion of the list.
  - _Movement:_ The first two pointers move in a fast and slow pattern to find the center of the linked list. The two heads of the list portions move in tandem down their respective lists. The second copy of the head of the reversed portion of the list is used to tell the reverse function where to start.
  - _Variables:_ Only pointers are used in the main function, two temp variables are used in the reverse function.

<br>

### **Basic Pattern:**
  1. Find the middle of the linked list.
  2. Reverse the second half of the LL.
  3. Compare the nodes in each half of the list.
  4. Reverse the second half of the LL back to it's original order.
  5. Return the results of the comparison.

<br>

### **Algorithm:**
  1. Find the middle of the linked list.
  2. Reverse from the middle of the linked list to the end.
  3. Save a reference to the head of the reversed portion, we will need to switch it back at the end.
  4. Iterate over the first and second half of the linked list and compare the values at each node.
     1. If the nodes don't match, it means that we have found two nodes that are not the same,
        1. here we will **break** the loop, NOT RETURN, WE NEED TO REVERSE THE LIST BACK TO PROPER ORDER FIRST (as per the prompt).
  5. Reverse the second half of the LL to it's original state.
  6. Check if the original pointer to the head of the reversed second half the LL is equal to null.
     1. If so, it means we reached the end of our comparison without finding a mismatch, so we can **return true**.
     2. If not, it means a mismatch was found, so we **return false**.

<br>