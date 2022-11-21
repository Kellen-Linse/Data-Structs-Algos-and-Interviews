# General Notes


- Any problem involving the **traversal of a tree in a level-by-level order** can be efficiently solved using Breadth First Search. We will use a Queue to keep track of all the nodes of a level before we jump to the next level. 
  - **This also means that the space complexity of the algorithm will be O(W), where ‘W’ is the maximum number of nodes on any level.**
- Can think of the queue as a todo list.
- If **LEVEL** is mentioned you most likely are looking at a BFS problem.
  
<br>

- **It is always important to understand how the nodes are shaped!**
  - Sometimes it is `this.val`, sometimes `this.value`
    - Also note what happens if a property is left undefined like: 
      - `this.val = (val===undefined ? 0 : val)`
  - Ex: 

```js
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
```

<br>

- Example of BFS from Colt Steele JS_DSA course.

```js

  BFS(node){
    let data  = [];        //This will hold our data to return
    let queue = [];        //This will keep track of the nodes in our tree

    queue.push(node);      //This pushes the root node into the end of our tree, making it the first item in our queue
  
    while(queue.length){                           // Loop while there is something in the queue. We can't just say while(queue), an empty array still returns true
      node = queue.shift();                        // Take the node at the beginning of the queue and put it in the node
      (Do some work here `data.push(node.value);`) // Push the current node's value into our data array
      if(node.left) queue.push(node.left);         // Check if there is a left node, if so add it to the queue
      if(node.right) queue.push(node.right);       // Check if there is a right node, if so add it to the queue
      (Or possibly do some work here depending on the problem)
    }
    return data; // return the data in our array
  }

``` 

- Example of doing some work level by level.

```js
const traverse = function(root) {
  let results = [];
  let node;
  const queue = [root];

  while(queue.length){

    // Here we are creating an array that will store data from the current level.
    let level = [];

    // The current length of the queue is the number of nodes in the current level.
    // We need to separate the current length from queue.length, it will change as 
    // we add more nodes to our queue.
    const qLen = queue.length;
    
    for(let i = 0; i < qLen; i++){
          node = queue.shift();
          level.push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
    }

    // Here we are adding the level data to our results.
    results.push(level);
  }

  return results;
};
```