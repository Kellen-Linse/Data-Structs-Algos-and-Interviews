# Validate Binary Search Tree (medium)

> **Prompt:** Given the root of a binary tree, **determine if it is a valid binary search tree (BST)**.
> - A valid BST is defined as follows:
>   - The left subtree of a node contains only nodes with keys less than the node's key.
>   - The right subtree of a node contains only nodes with keys greater than the node's key.
>   - Both the left and right subtrees must also be binary search trees.

<br>

### **Example:**

![validate](../Resources/dfs-validate.JPG)

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(n)`

<br>

### **Code:**

InOrder Check
```js
// No comments
var isValidBST = function (root) {
    let valid = true;
    let prevNode = null;

    const inOrderCheck = (node) => {
        if(!node) return;

        inOrderCheck(node.left);
        if(prevNode && node.val <= prevNode.val) valid = false;
        prevNode = node;
        inOrderCheck(node.right);
    };
    inOrderCheck(root);

    return valid;
};

// Comments
var isValidBST = function (root) {
    if(!root) return false;

    // Create a valid flag 
    // and a temp var that will hold the node evaluated last
    let valid = true, prevNode = null;

    const inOrderCheck = (node) => {
        if(!node) return;

        // Move all the way to the left side of the tree
        inOrderCheck(node.left);

        // Check that the prevNode is not null (it will be to start)
        // Check that the value of the current node is less or equal to the previous node.
        // If so, we have found an invalid node.
        if(prevNode && node.val <= prevNode.val) valid = false;
        // After checking the current node, make it the previous node.
        prevNode = node;

        // Move the current node to the right.
        inOrderCheck(node.right);
    };

    // Call recursive fn on the root.
    inOrderCheck(root);

    // Return the valid flag.
    return valid;
};
```

Fill Array with Nodes in Order, then Check Array.
```js
// Comments
var isValidBST = function(root) {

    let nodeVals = []; // Array to hold node values.
    
    // Fill NodeVals array with values from nodes in an inOrder method.
    const fillNodeVals = (node) => {
        if(!node) return;
        fillNodeVals(node.left);
        nodeVals.push(node.val);
        fillNodeVals(node.right);
    }
    fillNodeVals(root);

    // Check that all values are in ascending order
    // return false if we find an out of order value.
    for(let i = 1; i < nodeVals.length; i++){
        if(nodeVals[i] <= nodeVals[i-1]) return false;
    }

    // If we reach here, all nodes are in proper order.
    return true;
};
```

<br>

### **Comments:**
  - Moving in an inOrder fashion will allow for us to check against the previous node as we traverse left to right.

<br>

### **Basic Pattern:**
  1. Create an outer fn.
  2. Create a valid flag set to true.
  3. Create a prevNode variable and set to null.
  4. Create a inner fn, accepting a node.
     1. Move all the way to the left by calling the inner fn passing the node's left child.
     2. Check that the prevNode is not null and that that the value the current node is less or equal to the previous node's value.
        1. If so, we have found an invalid node, return false.
     3. Set the prevNode to be the current node.
     4. Move the current node to the right, calling the inner fn passing the node's right child.
  5. Call inner fn on the root node.
  6. Return the valid flag.