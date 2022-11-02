# Reverse alternating K-element Sub-list (medium)

> **Prompt:** Given the **head of a LinkedList** and **a number ‘k’**, *reverse every alternating ‘k’ sized sub-list starting from the head*.
> - If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

<br>

### **Example:**

![revAlt](../resources/revAlt.JPG)

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const reverse_alternate_k_elements = function(head, k) {
  let linkNode = null,
      revLinkNode = head,
      curr = head,
      groupCount = 1;

  while(curr){
    let prev = null, i = 0;

    if(groupCount % 2 !== 0){
      revLinkNode = curr;

      while(curr && i < k){
        let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
      }

      if(linkNode){
        linkNode.next = prev;
      } else {
        head = prev;
      }

    } else {   
      revLinkNode.next = curr;

      while(curr && i < k){
        prev = curr;
        curr = curr.next;
        i++;
      }

      linkNode = prev;
    }
    groupCount++;
  }

  return head;  
};

// Comments
const reverse_alternate_k_elements = function(head, k) {

  // Create two pointers that will point towards the first node in the next section, linking the sections together.
  // One for the reversed section, one for the section that remains unchanged.
  let linkNode = null, revLinkNode = head;

  // Create pointer to track where we are in the list.
  let curr = head;

  // Create counter variable that will track the current group we are in,
  // odd groups will be reversed, even will remain in the same order.
  let groupCount = 1;

  // While we haven't reached the end of the list.
  while(curr){

    // Create a pointer variable to point to the node one before the current node.
    let prev = null;

    // Create a counter variable to count the nodes within a group as we move through it.
    let i = 0;

    // Odd numbered groups will get reversed, even will remain in the same order.
    if(groupCount % 2 !== 0){ // odd, reversed section

      // Set the link node pointer for the reversed section to the node at the current pointer.
      revLinkNode = curr;

      // While we haven't reached the end of the list and the current number of 
      // nodes in the group (i) is less than the size of a group (k).
      while(curr && i < k){
        let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
      }

      // If there is a node in the non-reversed section that needs linked, 
      // we set it's next pointer to point to the node in the prev pointer (the last node in the current group).
      if(linkNode){
        linkNode.next = prev;
      } else {
        // If linkNode is null, we are in the first section, 
        // so we need to set the head to be the first node of the reversed section.
        head = prev;
      }
    } else { // even, non-reversed section

      // Set the reversed sections link node to be the node at the curr pointer (the first of the next section).
      revLinkNode.next = curr;

      // Move over the unchanged group
      while(curr && i < k){
        prev = curr;
        curr = curr.next;
        i++;
      }

      // Set the link node to be the last node in that section
      linkNode = prev;
    }

    // After each section update the group count.
    groupCount++;
  }
  return head;  
};
```
<br>

### **Comments:**
  - This is another one of those problems where drawing out really helps.
  - This problem is all about knowing where to place your pointers and in what order.
  - Just as the last problem, using two pointers to point towards two subsequent subsections makes this problem easier.


<br>

### **Basic Pattern:**
  1. Create two pointers that will point towards the nodes we will link, in the current section and the one before it.
  2. Count the number of groups, starting at 1.
  3. If the group number is odd
     1. Set the link node for that section
     2. Reverse that section
     3. Set the head pointer or the linkNode for the previous section to prev.
  4. If the group number is even
     1. Set the link node for the reversed section's next pointer to point towards the curr node.
     2. Move over the sub-section.
     3. set the link node for that section to prev.
  5. Increment the group count by 1.
  6. Return the list head. 