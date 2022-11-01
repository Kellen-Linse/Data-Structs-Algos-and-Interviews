# Reverse a LinkedList (easy)

## **This problem is the foundation for most reverse LL problems**

<br>

> **Prompt:** Given the **head of a Singly LinkedList**, *reverse the LinkedList.* 
> - Write a function to return the new head of the reversed LinkedList.

<br>

### **Example:**

```js
Original:       2 -> 4 -> 6 -> 8 -> x
Reversed:  x <- 2 <- 4 <- 6 <- 8 
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
  let curr = head,
      prev = null;

  while(curr){
    let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
  }
  return prev;
}

// Comments
function reverseLL(head){

  // Create two variables to hold values between iterations
  let curr = head,
      prev = null; // Initially point previous to null.

  // When curr is null we've reached the end of the list.
  while(curr){
    let next = curr.next; // Create a next variable and set it equal to the value current nodes next pointer.
        curr.next = prev; // Point the current nodes next pointer to be the value of the previous variable.
        prev = curr; // Set previous to be current, since we are working our way down the LL.
        curr = next; // Set current to next, as we are working our way down the list.
  }

  // We will return the previous variable as it will hold a reference to the new head of the LL.
  return prev;
}
```
<br>

### **Comments:**
  - To reverse a LL in place in O(1) space, we must use the **iterative method**. We can reverse it recursively, but that will take O(n) space.

<br>

### **Basic Pattern:**
  1. Create two pointers, **curr** pointing to head and **prev** pointing at null.
  2. Loop until the end of the LL is reached.
     1. Create a next pointer variable and set it equal to the current nodes next pointer. 
     2. Point the current nodes next pointer towards the previous node.
     3. Set the previous pointer to point to the current node.
     4. Set the current pointer to point to the node stored in the next pointer.
  3. Return the previous variable once we reach the end of the node, as that is the new head of the reversed LL.
