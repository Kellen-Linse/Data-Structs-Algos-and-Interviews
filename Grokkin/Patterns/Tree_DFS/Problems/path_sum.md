# Binary Tree Path Sum (easy)

> **Prompt:** Given a binary tree and a number ‘S’, find if the tree has a path from **root-to-leaf** such that the **sum of all the node values of that path equals ‘S’**.

<br>

### **Example:**

![sum](../Resources/dfs-sum.JPG)

<br>

### **Big O:**
  - Time: `O(n)` we will visit each node once.
  - Space: `O(n)` worst case (linked list).

<br>

### **Code:**

```js
// No comments
const has_path = function(root, sum) {
  if(!root) return false;
  let hasPath = false;
  
  function traverse(node, sum){
    if(!node) return;
    const newSum = sum - node.value;

    if(!node.left && !node.right && newSum === 0) hasPath = true;
    traverse(node.left,  newSum);
    traverse(node.right, newSum);
  }

  traverse(root, sum);
  return hasPath;
};

// Comments
const has_path = function(root, sum) {
  if(!root) return false;
  // Create a variable to flag if a path was found.
  let hasPath = false;
  
  // We will subtract the value at the current node from the input sum, and 
  // check to see if we are at a leaf node with the newSum equal to zero, if so we will return true,
  // if not we will recursively traverse over the tree, 
  // at each node we will traverse the left and/or right child passing in the newSum.
  function traverse(node, sum){
    if(!node) return;

    const newSum = sum - node.value;
    if(!node.left && !node.right && newSum === 0) hasPath = true;
    traverse(node.left,  newSum);
    traverse(node.right, newSum);
  }

  // Will call traverse and set hasPath if a correct node is found.
  traverse(root, sum);

  return hasPath;
};
```

<br>

### **Comments:**
  - This problem can be solved either with recursion directly, or by using a recursive helper function.
  - Recursive helper function is a few more lines of code but is arguably more readable.
  - We are subtracting the current nodes value from the passed in sum, this allows us to work down and look for zero.


<br>

### **Basic Pattern:**
  1. Create a hasPath boolean set to false.
  2. Traverse the tree passing in the node and the sum.
     1. Define the new sum to be the sum minus the nodes value.
     2. If the node is a leaf and the newSum is equal to zero, set the hadPath var to true.
     3. Traverse the left and right nodes passing in the newSum.


### **Alternate Solution:**

- Direct recursive fn, no helper fn.

```js
// No comments
const has_path = function(root, sum) {
  if(!root) return false;

  if(!root.left && !root.right && sum - root.value === 0) return true;

  return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
};

// Comments
const has_path = function(root, sum) {
  if(!root) return false; // Base case

  // If we find a leaf node where the value meets the prompt requirement return true.
  if(!root.left && !root.right && sum - root.value === 0) return true;


  // Recursively call has path for both the left and right nodes of the current node
  // Subtract the current value from the sum before passing it in to the recursive call.
  return has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value);
};
```

### **Basic Pattern:**
  1. Define base case.
  2. Check for a leaf node where the the sum minus the current nodes value is zero.
  3. Recursively call the function on the left and right nodes, passing in the current value subtracted from the sum.
