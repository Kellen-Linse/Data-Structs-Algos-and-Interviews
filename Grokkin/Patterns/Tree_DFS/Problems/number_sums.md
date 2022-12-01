# Sum of Path Numbers (medium)

> **Prompt:** Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

<br>

### **Example:**

![sum paths](../Resources/dfs-sum-paths.JPG)

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(n)` worst case (linked list) ...basically always...

<br>

### **Code:**

```js
// No comments
const find_sum_of_path_numbers = function(root) {
  if(!root) return 0;
  let totalSum = 0;

  const sumPaths = (node, pathSum) => {
    if(!node) return

    pathSum = pathSum * 10 + node.value;
    if(!node.left && !node.right) totalSum += pathSum;
    sumPaths(node.left, pathSum);
    sumPaths(node.right, pathSum);
  }

  sumPaths(root, 0);

  return totalSum;
};

// Comments
const find_sum_of_path_numbers = function(root) {
  if(!root) return 0;
  let totalSum = 0; // Track the total sum in closure

  const sumPaths = (node, pathSum) => {
    if(!node) return

    pathSum = pathSum * 10 + node.value; // Find new number

    // If we have reached a leaf node, add to total sum.
    if(!node.left && !node.right) totalSum += pathSum;

    // Evaluate left and right nodes.
    sumPaths(node.left, pathSum);
    sumPaths(node.right, pathSum);
  }

  // Call sumPaths starting at the root with a pathSum of zero.
  sumPaths(root, 0);

  return totalSum;
};
```
<br>

### **Comments:**
  - preOrder DFS, tracking a pathSum variable and adding to a totalSum variable which exists outside of function to add up the path sum.


<br>

### **Basic Pattern:**
  1. Create an outer function
     1. Create a variable to track the total sum.
     2. Create a inner function accepting a node and a path sum.
        1. If no node exists, return
        2. Set pathSum to be itself times 10 plus the current node's value.
        3. If we are on a leaf node, add the pathSum to the total sum.
        4. Recursively call the inner function passing in left and right nodes and the pathSum.
     3. Call the outer function passing in the root node and zero for the path sum.
     4. Return the total sum.