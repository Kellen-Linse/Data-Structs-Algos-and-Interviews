# In-place Reversal of a Linked List

<hr>

## General Notes

- 

## Problems

<hr>

## Problem Name (Difficulty)

> **Prompt:** Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

<br>

### **Example:**

```js
Original:      2 -> 4 -> 6 -> 8 -> x
Reversed: x <- 2 <- 4 <- 6 <- 8 
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
function reverseLL(head){
  let current = head,
      previous = null;

  while(current){
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
  }
  return previous;
}

// Comments
function reverseLL(head){

  // Create two variables to hold values between iterations
  let current = head,
      previous = null; // Initially point previous to null

  // Current will end at null
  while(current){
    let next = current.next; // Create a next variable and sent it equal to the value current nodes next pointer.
        current.next = previous; // Point the current nodes next pointer to be the value of the previous variable.
        previous = current; // Set previous to be current, since we are working our way down the LL.
        current = next; // Set current to next, as we will be switching where it points next.
  }

  // We will return the previous variable as it will hold a reference to the new head of the LL.
  return previous;
}
```
<br>

### **Comments:**
  - *Variables:* Three, two outer to hold values between loops, and one temp within the loop.
  - *Movement:* We will work our way down the LL until we hit the null value.


<br>

### **Basic Pattern:**
  1. Create two variables to hold values between iterations.
  2. Loop until the end of the LL is reached.
  3. In the loop, 
     1. point the current nodes next pointer towards the previous node, 
     2. update the current and previous variables.
  4. Return the previous variable.

<br>

## Reverse a Sub-list (medium)

> **Prompt:** Given the head of a LinkedList and two positions ‘p’ and ‘q’, **reverse the LinkedList from position ‘p’ to ‘q’**.

<br>

### **Example:**

![LLrev](./resources/LL-rev.JPG)

<br>

### **Big O:**
  - Time: `O(n)` technically O(4n)
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
function reverseSubList(head, p, q){
  if( !head || !q || !p || p > q ) return null;
  if(p === q) return head;

  let preStart = get(p - 1, head),
      start    = get(p, head),
      end      = get(q, head); 
  if( !end || !start ) return null;

  return reverse(preStart, start, end, head);
}

// ================ helper functions ===============

function get(position, head){
  if(position <= 0) return null;
  let current = head;

  while(position-1 && current){
    current = current.next;
    position--;
  }
  return current;
}


function reverse(preStart, start, end, head){
  let current = start, 
      endNext = end.next,
      previous = end.next;

  while(current !== endNext){
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
  }

  if(preStart){
      preStart.next = previous;
      return head;
  } else {
      return previous;
  }
}

// Comments
function reverseSubList(head, p, q){
  // Edge cases 
  if( !head || !q || !p || p > q ) return null;
  if(p === q) return head;

  // Get nodes we will need to reverse section of LL
  let preStart = get(p - 1, head),
      start    = get(p, head),
      end      = get(q, head);
  
  // If end or start doesn't exist return null
  if( !end || !start ) return null;

  // return the head of the reversed LL
  return reverse(preStart, start, end, head);
}

// ================ helper functions ===============

// Get a node at a given position within the LL 
function get(position, head){
  if(position <= 0) return null; // 1 indexed, make sure we're in bounds
  let current = head;

  while(position-1 && current){
    current = current.next;
    position--; // Count down position until you get there.
  }
  return current;
}


function reverse(preStart, start, end, head){
  let current = start, // Start of the section to reverse
      endNext = end.next, // First node after reversed section
      previous = end.next; // Think of end.next like null when you are reversing an entire list

  // Iterate over the list switching directions until you hit the end of the section to reverse
  while(current !== endNext){
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
  }

  // We are going to have different outcomes depending on if we started 
  // reversing from the head node. In both cases, previous will hold the first section of the reversed section.
  if(preStart){
      // If there exists a node ahead of where we started reversing, the head remains the same,
      // But we need to point that node at the new beginning of the reversed section.
      preStart.next = previous; 
      return head;
  } else {
      // If no node exists before where we started reversing, previous will be the new head.
      return previous;
  }
}
```
<br>

### **Comments:**
  - This problem becomes easier when you break it in to sub problems.
  - There are lots of edge cases to consider with this problem.
  - The better you know the basic algorithms, the easier this problem becomes.
  - It is much easier to understand this problem if you draw it out or use some sort of visual aid.


<br>

### **Basic Pattern:**
  1. Get nodes we will need to reverse section of LL, start - 1, start, end.
  2. Reverse from start to end, 
     1. Making sure to account for the pointers pointing to the new start of the reversed section and pointing from the new section to the rest of the list.
  3. Return the head of the LL, making sure to account for the reversed list possibly having a new head node.

<br>

### Alternate Solution

![reverseSub](./resources/revSub.jpg)

```js
var reverseBetween = function(head, p, q){
  // Edge cases 
  if(p === q) return head;

  // Get nodes we will need to reverse section of LL
  let preStart = get(p - 1, head),
      start    = get(p, head),
      end      = get(q, head), 
      postEnd  = end.next;

  // return the head of the reversed LL
  reverse(start, end);
  
  // point the node before the reverse section to the new start of the reversed section (the old end)
  if(preStart) preStart.next = end;

  // Point the new end node of the reversed section (the old start) towards the node after the reversed section.
  start.next = postEnd;

  // If there were nodes before the reversed section, the head remains the same.
  // If not, the old end node will be the new head of the LL.
  return preStart ? head : end;
}

// ================ helper functions ===============

// Get a node at a given position within the LL 
function get(position, head){
  if(position <= 0) return null;
  let current = head;

  while(position-1 && current){
    current = current.next;
    position--;
  }
  return current;
}

// Reverse a portion of the LL 
function reverse(start, end){
  let current = start,
      endNext = end.next, // need to make a pointer to end.next because it will change
      previous = null;

  while(current !== endNext){
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
  }
}
```


## Reverse every K-element Sub-list (medium)

> **Prompt:** Given the head of a LinkedList and a number ‘k’, **reverse every ‘k’ sized sub-list starting from the head**.
> - If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

<br>

### **Example:**

![revSub](resources/revSub.jpg)

<br>

### **Big O:**
  - Time: `O(n)` 
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const reverse_every_k_elements = function(head, k){
  let newListHead = null,
      newSubHead = null,
      start = head;
  
  while(start){ 
    let end = findEnd(start, k); 
    let prevHead = start; 
    [newSubHead, start] = reverse(start, end); 
    prevHead.next = findEnd(start, k); 
    if(!newListHead) newListHead = newSubHead; 
  }
  return newListHead;
}

function findEnd(head, count){
  if(!head) return null;
  let curr = head;

  while(count-1 && curr.next){ 
    curr = curr.next;
    count--;
  }
  return curr;
}

function reverse(start, end){
  let curr = start,
      prev = null,
      endNext = end.next; 

  while(curr !== endNext){
    let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
  }
  return [prev, curr];
}

// Comments
const reverse_every_k_elements = function(head, k){
  let newListHead = null,
      newSubHead = null,
      start = head;
  
  // Run while there are more sub-groups left
  while(start){
    // find the end of the first sub-group, k nodes away.  
    let end = findEnd(start, k); 

    // Save the current head of the sub-group.
    let prevHead = start; 

    // Reverse the current sub group,  
    // returns new sub-section head and next sub-section start node.
    [newSubHead, start] = reverse(start, end); 

    // Here we are connecting the new last node in the section to 
    // what will be the first node in the next section once it is reversed.
    // If there are no more sub-sections left this will return null.
    prevHead.next = findEnd(start, k); 

    // After the first reversal we will save the new head 
    // of the first section as the new head of the linked list.
    if(!newListHead) newListHead = newSubHead; 
  }
  
  return newListHead;
}

//============ Helper Functions ========================

// Here we are taking the start node of a sub-section 
// and returning the end node of that section
function findEnd(head, count){
  if(!head) return null;
  let curr = head;

  // if no curr.next end loop early, we have reached the end of our list
  while(count-1 && curr.next){ 
    curr = curr.next;
    count--;
  }

  // If we reach a null value before the end of the section, 
  // that is the last section and we return the current node.
  return curr;
}

function reverse(start, end){
  let curr = start,
      prev = null,

      // We need a pointer to the next node in the list after the reversed section,
      // we can't just use end.next as the condition in the while loop, because end is modified.
      endNext = end.next; 

  while(curr !== endNext){
    let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
  }

  // We are returning the node currently in prev, 
  // which will be the beginning of our reversed list,
  // and the node in curr which will be the start of our next section.
  return [prev, curr];
}
```
<br>

### **Comments:**
  - The trick with this problem is keeping track of where the reversed sections point. 
    - If we keep track of the previous head (which is now the tail of a reversed section),
    - we can point it towards the next sections end ( which will become the next sections start).
  - This is another problem where drawing out the steps will help you see the solution.


<br>

### **Basic Pattern:**
  1. While the start node is not null.
  2. Give the current start find the end, k nodes away.
  3. Save a reference to the current start node.
  4. Reverse the string from start to end, returning the head of the reversed section and the next start node.
  5. Set the original start node's next pointer to point to the last node in the next section 
     1. (this will end up being the first node in the reversed section)
  6. After the first section is reversed, set the head of the reversed section to be the head of the list.
  7. Return the list.
