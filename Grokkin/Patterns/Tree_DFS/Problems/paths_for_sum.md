# Count Paths for a Sum (medium)

<br>

> **Prompt:** Given a binary tree and a number ‘S’, **find ALL paths in the tree such that the sum of all the node values of each path equals ‘S’**. 
>   - Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

<br>

### **Example:**

![all sums](../Resources/dfs-all-path-sums.JPG)

<br>

### **Big O:**
  - Time: `O(n)` 
    - Reduced from `O(n^2) where each node must be examined as the root.
  - Space: `O(n)`

<br>

### **Code:**

```js
// No comments
var pathSum = function(root, target) {
  if(!root) return 0;
  let pathCount = 0;
  const pfMap = {};

  const pathCheck = (node, prevSum) => {
    if(!node) return;
    const curSum = prevSum + node.val;

    if(curSum === target) pathCount++;
    pathCount += pfMap[curSum - target] || 0;
    pfMap[curSum] =  pfMap[curSum]+1 || 1;

    pathCheck(node.left, curSum);
    pathCheck(node.right, curSum);
    pfMap[curSum] = pfMap[curSum] - 1;
  }
  
  return pathCount;
};

// Light Comments

const count_paths = function(root, target) {
  if(!root) return 0;
  let pathCount = 0;
  const pfMap = {}; // Map of previous sums in CURRENT path

  const pathCheck = (node, prevSum) => {
    if(!node) return;

    // The sum of all nodes up to this point in the current path
    const curSum = prevSum + node.value;

    // Count path if we have a match
    if(curSum === target) pathCount++;

    // Increment the count by as many paths as are in the map for curSum - target.
    pathCount += pfMap[curSum - target] || 0;

    // Add or increment the curSum key in the map.
    pfMap[curSum] = pfMap[curSum]+1 || 1;

    // Navigate
    pathCheck(node.left, curSum);
    pathCheck(node.right, curSum);

    // Remove current sum from previous sums map
    pfMap[curSum] = pfMap[curSum] - 1;
  }

  // Call pathCheck starting at root
  pathCheck(root, 0);
  return pathCount;
};

// Heavy Comments
var pathSum = function(root, target) {
  if(!root) return 0;
  let pathCount = 0;
  const pfMap = {};

  const pathCheck = (node, prevSum) => {
    if(!node) return

    // Calculate the running sum, adding the current nodes value to the previous sum.
    const runningSum = prevSum + node.val;

    // if the running sum is equal to our target, increment out pathCount.
    if(runningSum === target) pathCount++;

    // Here we are checking if we have a key in our map that is equal to the current running sum minus
    // the target. If find a key in our map, that means there is a running sum in the current path which, if 
    // eliminated at that point will produce a valid path from the subsequent node to the current node.
    // If there is more than one such point, the map will reflect that and all points will be added to the count.
    // If there is no such key, nothing will be added to the count.
    pathCount += pfMap[runningSum - target] || 0;

    // Here we are setting the running sum in our map. Incrementing if it exists, 
    // or setting it to one if it doesn't.
    pfMap[runningSum] =  pfMap[runningSum]+1 || 1;

    // Evaluate the left and right child nodes, passing in the current running sum.
    pathCheck(node.left, runningSum);
    pathCheck(node.right, runningSum);

    // Remove the current running sum value from the pfMap.
    pfMap[runningSum] = pfMap[runningSum] - 1;
  }
  
  // Call pathCheck starting at the root with a previous sum of zero.
  pathCheck(root, 0);
  
  return pathCount;
};
```
<br>

### **Comments:**
  - This "prefix sum" concept used in the solution was quite tricky to grasp, [watch this video for a good explanation](https://www.youtube.com/watch?v=uZzvivFkgtM)
  - The trick with this problem is that you need to use a map to hold all the running sums at each node within the current path.
    - For any given node in a path, we can check the previous sums, if we find a previous sum such that, if we take away that sum, we are left with the target, the we have found a match.
    - We calculate the previous sum to search for by subtracting the running sum from the target.
      - `pathCount += pfMap[runningSum - target] || 0;`
      - As an example, if we have a running sum of 18, and we have a target of 8, we need to see if we have previously seen a running sum of 10.
        - If we have a running sum of 10 in our map, that means if we were to take all the nodes AFTER the node were we had a running sum of 10, they would sum to the target.
    - **The video does a better job of explaining this.**


<br>

### **Basic Pattern:**
  1. In an outer fn, create a variable to count the number of paths, and an object or map to hold the previous sums in the current path.
  2. In an inner fn, accept a root node and a previous sum
     1. Calculate the current running sum (curSum) by adding the previous sum and the value at the passed in node.
     2. If the curSum matches the target, add one to our count.
     3. Calculate the sum which, if removed would allow the rest of the nodes to add to the target. If we find this sum in our previous sum map, then all nodes after this node will sum to the target, and we have therefore found a valid path.
     4. Search map for this sum, if we find it, add the current value at that key plus one, to the count.
     5. Add or increment the curSum key in the map.
     6. Navigate the left and right nodes by calling the inner fn recursively, passing in the current sum.
     7. Remove the current sum from the map after all nodes have been explored.
  3. Call the inner fn, passing in the root node and 0 for the previous sum.
  4. Return the count.