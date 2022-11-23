# Tree: Depth First Search - General Notes

<br>

## Notes:

<hr>
<br> 

- Depth First Searches methods are **Top Down**,
  - We can visit every node in the tree in three main ways:
    - inOrder
    - preOrder
    - postOrder
  - The primary way to perform a DFS is with **Recursion**, but it can be done with **Iteration** as well.
  - Often times we can make use of a helper function defined (enclosed) in an outer function.
  - 

<br>

- Often used in problems asking: Does the path exist?

<br>

- We can use preOrder when storing the values in the tree such that we can recreate that tree later.

### Examples of adding all nodes to an array with **in**, **pre**, **post** order traversal:

```js

/**
 * Definition for a binary tree node.
 * function TreeNode(value, left, right) {
 *     this.value = (val===undefined ? 0 : value)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function inOrderValues(root){
  const resultsArr = [];

  const traversal = (node) => {
    if(!node) return;
    traversal(node.left);
    resultsArr.push(node.value);
    traversal(node.right);
  }

  traversal(root);

  return resultsArr;
}

function preOrderValues(root){
  const resultsArr = [];

  const traversal = (node) => {
    if(!node) return;
    resultsArr.push(node.value);
    traversal(node.left);
    traversal(node.right);
  }

  traversal(root);

  return resultsArr;
}

function postOrderValues(root){
  const resultsArr = [];

  const traversal = (node) => {
    if(!node) return;
    traversal(node.left);
    traversal(node.right);
    resultsArr.push(node.value);
  }

  traversal(root);

  return resultsArr;
}
```

### Example of adding all node values to an array in reverse order

```js
function inRevOrderValues(root){
  const resultsArr = [];

  const traversal = (node) => {
    if(!node) return;
    traversal(node.right); // <----- Notice here right is BEFORE left!
    resultsArr.push(node.value);
    traversal(node.left); //  <----- Left is after right!
  }

  traversal(root);

  return resultsArr;
}
```