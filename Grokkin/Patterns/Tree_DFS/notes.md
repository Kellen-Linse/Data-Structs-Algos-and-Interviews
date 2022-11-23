# Tree: Depth First Search

<hr>

## General Notes

  - The "Worst Case" for a DFS problem is if the tree is actually just a linked list.

## Problems

### Binary Tree Path Sum (easy)

> **Prompt:** Given a binary tree and a number ‘S’, find if the tree has a path from **root-to-leaf** such that the **sum of all the node values of that path equals ‘S’**.

<br>

### **Example:**

![sum](./Resources/dfs-sum.JPG)

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
    const newSum = sum - node.value;

    if(!node.left && !node.right && newSum === 0) hasPath = true;
    if(node.left)  traverse(node.left,  newSum);
    if(node.right) traverse(node.right, newSum);
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
    const newSum = sum - node.value;

    if(!node.left && !node.right && newSum === 0) hasPath = true;
    if(node.left)  traverse(node.left,  newSum);
    if(node.right) traverse(node.right, newSum);
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

<br>

## All Paths for a Sum (medium)

> **Prompt:** Given a binary tree and a number ‘S’, **find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’**.

<br>

### **Example:**

![all](./Resources/dfs-all-sums.JPG)

<br>

### **Big O:**
  - Time: `O(n^2)` 
    - due to for every leaf node, we might have to store its path (by making a copy of the current path) which will take O(N) time.
  - Space: `O(n)`

<br>

### **Code:**

```js
// No comments
const find_paths = function(root, sum) {
  if(!root) return [];
  const resultsArr = [];

  const pathCheck = (node, s, path) => {
    if(!node) return;

    path.push(node.value);
    if(!node.left && !node.right && s - node.value === 0) resultsArr.push([...path]);
    pathCheck(node.left, s-node.value, path);
    pathCheck(node.right, s-node.value, path);
    path.pop();
  }

  pathCheck(root, sum, []);
  return resultsArr;
};

// Comments
const find_paths = function(root, sum) {
  if(!root) return [];
  const resultsArr = []; // Array to hold all paths

  // This enclosed function will always have access to the results array.
  const pathCheck = (node, s, path) => {
    if(!node) return;

    // For readability, condition for finding a correct path
    const correctPathCondition = !node.left && !node.right && s - node.val === 0;

    path.push(node.value); // Add the current nodes value to the path.

    // If we find a correct path, we push the path to the results array,
    // IMPORTANT: we need to make a DEEP copy of the path array, so that 
    // it remains unchanged once it enters the results array.
    if(correctPathCondition) resultsArr.push([...path]);

    // Recursively call pathcheck, the new sum (s) value will 
    // be the current value minus the nodes value.
    pathCheck(node.left, s-node.value, path);
    pathCheck(node.right, s-node.value, path);

    // Once we finish completely evaluating a node and it's children,
    // we need to pop it off the path array, 
    // as that node has been completely evaluated.
    path.pop();
  }

  // Call helper function after we defined it.
  pathCheck(root, sum, []);

  return resultsArr;
};
```
<br>

### **Comments:**
  - You **cannot** insert the path array into the results array without making a deep copy of it, if you don't, it will continue to be modified within the results array!


<br>

### **Basic Pattern:**
  1. Perform a preOrder traversal of the tree.
  2. Add the value at the given node to a path array.
  3. If you find a **leaf node** and the values along the path add to the given sum, 
     1. Make a deep copy of the path array and push the copy to the results array.
  4. Recursively call the traversal on the left and right nodes.
  5. After exploring the left and right nodes, pop the current nodes value off of the path array.
  6. Return results array.

<br>

## Sum of Path Numbers (medium)

> **Prompt:** Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

<br>

### **Example:**

![sum paths](./Resources/dfs-sum-paths.JPG)

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

<br>

## Path With Given Sequence (medium)

> **Prompt:** Given a binary tree and a number sequence, **find if the sequence is present as a root-to-leaf path in the given tree**.

<br>

### **Example:**

![paths](./Resources/dfs-path-seq.JPG)

<br>

### **Big O:**
  - Time: `O(n)` Worst case we have a wide tree as deep as the length and no correct paths.
  - Space: `O(l)` Our recursive stack will be as big as the length of the sequence.

<br>

### **Code:**

```js
// No comments
const find_path = function(root, seq) {
  if(!root) return false; 
  let pathFound = false;

  const pathCheck = node => {
    if(!node || node.value !== seq[0] || pathFound) return;
    
    const curNum = seq.shift();  

    if(seq.length === 0 && !node.left && !node.right){
      pathFound = true;
      return;
    }

    pathCheck(node.left);
    pathCheck(node.right);

    seq.unshift(curNum);
  }

  pathCheck(root);
  return pathFound;
};

// Comments
const find_path = function(root, seq) {
  if(!root) return false;
  let pathFound = false;

  const pathCheck = node => {
    // If we do not have a valid node, 
    // if the node's value is not equal to the current number we are evaluating for,
    // or, if we have found a correct path, return;
    if(!node || node.value !== seq[0] || pathFound) return;

    // Remove the first number from the sequence and store it's value
    // if we evaluate the node completely and find no correct sequence,
    // we will place the value back into the sequence.
    const curNum = seq.shift();
    
    // If there are no more numbers left in the sequence and 
    // we are at a leaf node, we have found a correct path.
    // We will set the pathFound variable in the enclosing scope to true.
    if(seq.length === 0 && !node.left && !node.right){
      pathFound = true;
      return;
    }

    // Evaluate the left and right side nodes
    pathCheck(node.left);
    pathCheck(node.right);

    // If we have evaluated this node, we need to backtrack,
    // we will place the current number back at the front of the sequence.
    seq.unshift(curNum);
  }
  
  // Call our recursive function on the root node.
  pathCheck(root);
  return pathFound;
};
```
<br>

### **Comments:**
  - The trick with this problem is immediately returning when you find and incorrect value, shifting the front value off when you find a correct value, and adding the value back on after traversing the left and right nodes.


<br>

### **Basic Pattern:**
  1. Create an outer function 
  2. Create a pathFound boolean
  3. Create an inner function that accepts a node.
     1. Check that we have a valid node, a correct number, and that the path is not found, return if not.
     2. Shift the first number off of the sequence and store it in a temp variable.
     3. If the sequence has no more values in it and the node is a leaf node,
        1. set the pathFound variable to true
     4. Evaluate the left and right side nodes, passing each into the inner fn and calling it recursively.
     5. Add the number in the temp variable back to the front of the sequence.
  4. Call the inner function passing in the root node of the give tree.
  5. Return the pathFound variable.