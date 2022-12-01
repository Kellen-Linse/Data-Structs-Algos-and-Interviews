# Path with Maximum Sum (hard)


> **Prompt:** **Find the path with the maximum sum in a given binary tree.** Write a function that returns the maximum sum.
> - A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

<br>

### **Example:**

![max-sum-path](../Resources/path-max-sum.JPG)

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(n)`

<br>

### **Code:**

```js
// No comments
var maxPathSum = function(root) {
    let maxPathSum = -Infinity;
    
    dfs(root);
    
    return maxPathSum;
    
    function dfs(node) {
        if (!node) return 0;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        maxPathSum = Math.max(maxPathSum, left + right + node.val);

        return node.val + Math.max(0, left, right);
    }
};

// Comments
var maxPathSum = function(root) {
    // As with almost all "max" variables, start with -Infinity
    let maxPathSum = -Infinity; 

    // Call Traversal fn.
    dfs(root);
    
    return maxPathSum;
    

    //Define traversal fn. Hoisting will allow fn to be called above definition.
    function dfs(node) {
        if (!node) return 0; //Base case
        
        // Post order traversal
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        // Check the current path sum vs the largest path sum
        maxPathSum = Math.max(maxPathSum, left + right + node.val);

        // Zero here represents ignoring all the values the the current node
        // If for instance all the values are negative.
        return node.val + Math.max(0, left, right);
    }
};
```
<br>

### **Comments:**
  - **POST ORDER PROBLEMS WORK BOTTOM UP!**
    - In this problem we start adding up the sum starting at the bottom.
  - For any given node, the path consists of a path starting from it's left node, itself, and a path starting from it's right node.
  - It is possible that the sum of some path is less than zero, a negative number will never sum to make a greater positive, in the case that we have a negative sum at some node we replace that sum with zero, effectively cutting that part of the path off.
  - When considering the greatest path at a given node, we have three scenarios.
    - The node value plus the left sum is greater than the node value plus the right sum, in which case we return the node value plus the left sum, or 
    - vice versa, 
    - Or both the left and right sums are negative, in which case we return zero.


<br>

### **Basic Pattern:**
  1. Create outer fn.
  2. Create a variable to track the max path sum.
  3. Create an inner fn, taking a root node as an argument.
     1. Recursively call the inner fn on both the left and right nodes of the input node, setting the returned value to a left and right variable respectively.
     2. Set the max path variable to be the larger of itself and the sum of the node's value and both the left and right variable set in the previous step.
     3. Return the largest value between 0, the node value plus the left value, and the node value plus the right variable.
  4. Return the max path variable.