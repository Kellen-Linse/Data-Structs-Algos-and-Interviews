# Level Order Traversal - Store Each Level  (medium)

> **Prompt:** Given a binary tree, populate an array to represent its level-by-level traversal. 
> - **You should populate the values of all nodes of each level from left to right in separate sub-arrays.**

<br>

### **Example:**

![bfs](../Resources/bfs.JPG)

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(n)` The queue and return array will grow as the input tree grows

<br>

### **Code:**

```js
// No comments
const traverse = function(root) {
  let node;
  const results = [], queue = [root];

  while(queue.length){
    let level = [];
    const qLength = queue.length;
    
    for(let i = 0; i < qLength; i++){
          node = queue.shift();
          level.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
    }
    results.push(level);
  }

  return results;
};
// Comments
const traverse = function(root) {
  
  let node; // Create a node to hold our current node;

  // Create two arrays, one to act as a queue holding the 
  // root as the first element, and one to hold the level arrays.
  const results = [], queue = [root];

  // Loop while there is nodes in the queue.
  while(queue.length){

    // Create a level array to hold the values of a given level
    const level = [];

    // Create a variable to store the current length of the queue,
    // this length must be separate from the queue length in the for loop because
    // the queue will grow as we add children to the queue inside of the loop.
    const qLength = queue.length;

    // Loop the current length of the queue, before adding 
    // the nodes from the current level.
    for(let i = 0; i < qLength; i++){
          // Take the first node out of the queue.
          node = queue.shift();

          // Add it's value to the current levels result array.
          level.push(node.val);

          // Add it's children to the queue.
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
    }
    
    // Add the current level array to the results array.
    results.push(level);
  }

  return results;
};
```
<br>

### **Comments:**
  - With Breadth First Traversal, we use an **iterative approach** utilizing a **queue**.
  - To store all levels individually we need a second loop that will run for the current values in the queue.
    - We can use a for loop to track the nodes of a level.
  - We need to separate the length of the queue prior to using that length in the for loop!
    - If not, each time we move through the for loop and add children nodes to the queue that length will grow.
  - We will store the values at a given level within an array and then store that array in the results array.


<br>

### **Basic Pattern:**
  1. Starting with the root node as the first node in a queue,
  2. Loop while there are items in the queue.
     1. Create an array to hold the values of the given level.
     2. Loop for as long as the current length of the queue.
        1. Set the current node to be the first node shifted out of the queue.
        2. Add the current nodes val to the level array
        3. Add the current nodes children to a queue
     3. Add the level array to the results array.
