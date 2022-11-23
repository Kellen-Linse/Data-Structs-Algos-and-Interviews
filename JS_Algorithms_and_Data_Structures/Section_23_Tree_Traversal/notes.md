# Tree Traversal

## 172: Intro to Tree Traversal

> How do we visit every node one time?

### Two way to traverse a tree:
  - Breadth-first Search
  - Depth-first Search

#### Breadth First Search (BFS):

- Primary direction: going across, hitting the end, going down a layer.
  - Starting at the top and going layer by layer left to right.

#### Depth First Search (DFS):

- Primary Direction: going down.
- **Three Main Ways**
  - `inOrder`
  - `preOrder`
  - `postOrder`

---
## 173: Breadth First Search Intro (BFS):

  - **Visit all nodes on the same level before working our way down.**
  - Visit every sibling node BEFORE any child nodes.
    - First across, then down.
 
  ![BFS](../resources\breadth_first.JPG)

#### Steps (Iteratively):
  - Create a queue (can be an array, just needs to model a queue) and a variable to store the values of the nodes visited.
    - *Queue = FiFo structure*
  - Place the root node in the queue.
  - Loop as long as there is anything in the queue.
    - Dequeue a node from the queue amd push the value of the node into the variable that stores the nodes.
    - If there is a left property on the node dequeued:
      - add it to the queue.
    - If there is a right property on the node dequeued:
      - add it to the queue.
  - Return the variable that stores the values.

<br>

- Can think of the queue as a "to-do" list.

## 174: Breadth First Search Solution:

```js

  BFS(node){
    let data  = [];        //This will hold our data to return
    let queue = [];        //This will keep track of the nodes in our tree

    queue.push(node);      //This pushes the root node into the end of our tree, making it the first item in our queue
  
    while(queue.length){                      // Loop while there is something in the queue. We can't just say while(queue), an empty array still returns true
      node = queue.shift();                   // Take the node at the beginning of the queue and put it in the node
      data.push(node.value);                  // Push the current node's value into our data array
      if(node.left) queue.push(node.left);    // Check if there is a left node, if so add it to the queue
      if(node.right) queue.push(node.right);  // Check if there is a right node, if so add it to the queue
    }
    return data; // return the data in our array
  }

``` 

--- 
## 175: Depth First **PreOrder** Intro (DFS):

#### All Depth First Searches traverse **vertically**, down to the end of the tree before visiting any sibling nodes.
  - First down, then across.

#### Binary Tree Searches can be broken down into three main steps:
  - Visit the node.
  - Explore the left side.
  - Explore the right side.

### *Changing the order above will change the output of our search.*

<br> 

### PreOrder:

  > We look at the node, THEN we explore all children.


  - **Order:**
    1. **Visit the node.**
    2. Explore the left side.
    3. Explore the right side.

![DFS-pre](../resources/DFS-preOrder.JPG)

<br> 

### Steps (recursively):

- Create a variable to store the values of nodes visited.
- Store the root of the BST in a variable called current.
- Write a helper function which accepts a node:
  - **Push the value of the node to the variable that stores the values**
  - If the node has a **left property**:
    - call the helper function passing in the left child property of the node.
  - If the node has a **right property**:
    - call the helper function passing in the right child property of the node.
- Invoke the helper function with the current variable.
- Return the array of values.

<br>


## 176: Depth First preOrder Solution:

```js
class Binary Search Tree{
  ...
  preOrder_DFS(){
    // The array that will hold our return data.
    let data = [];     

    // Create a helper function to traverse.
    function traverse(node){    
      // Push the value in the argument node into our return value array    
      data.push(node.value);   
      
      //Check if there is a left and/or right node. If so, call the traverse function recursively, passing in the respective node.
      if(node.left)  traverse(node.left);   
      if(node.right) traverse(node.right);
    }
    
    // Call the traverse function, passing in the root node of the BST.
    traverse(this.root);

    // Return the data in our array.
    return data;         
  }
}
```
<br>

---
## 177: Depth First **PostOrder** Intro (DFS):

<br>

### PostOrder:
<br>

  > We explore all the children, THEN we look at the node.

  - **Order:**
    1. Explore the left side.
    2. Explore the right side.
    3. **Visit the node.**

![DFS-post](../resources/DFS-postOrder.JPG)

<br>

### Steps (recursively):

- Create a variable to store the values of nodes visited.
- Store the root of the BST in a variable called current.
- Write a helper function which accepts a node
  - If the node has a **left property:**
    - Call the helper function passing in the left child property of the node.
  - If the node has a **right property:**
    - Call the helper function passing in the right child property of the node.
  - **Push the value of the node to the variable that stores the values.**
- Invoke the helper function with the current variable.
- Return the array of values.

---
## 178: Depth First **PostOrder** Solution:

```js
class Binary Search Tree{
  ...
  postOrder_DFS(){
    // The array that will hold our return data.
    let data = [];     

    // Create a helper function to traverse.
    function traverse(node){    

      //Check if there is a left and/or right node. If so, call the traverse function recursively, passing in the respective node.
      if(node.left)  traverse(node.left);   
      if(node.right) traverse(node.right);

      // Push the value in the argument node into our return value array.
      data.push(node.value);                
    }
    
    // Call the traverse function, passing in the root node of the BST.
    traverse(this.root);

    // Return the data in our array.
    return data;         
  }
}
```

## 179: Depth First **InOrder** Intro (DFS):

### InOrder:

  > We explore the entire left side, we then look at the node, we then explore the entire right side.

  - **Order:**
    1. Explore the left side.
    2. **Visit the node.**
    3. Explore the right side.

![DFS-in](../resources/DFS-inOrder.JPG)

<br>

### Steps (recursively):

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - if the node has a **left property:**
    - call the helper function with the left property of the node
  - **Push the value of the node to the variable that stores the values**
  - if the node has a **right property:**
    - call the helper function with the right property of the node
- Invoke the helper function with the current variable
- Return the array of values

---
## 180: Depth First **inOrder** Solution:

```js
class Binary Search Tree{
  ...
  inOrder_DFS(){
    let data = [];  

    function traverse(node){
      if(node.left)  traverse(node.left);  
      data.push(node.value);   
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}
```

---
## 181: When to Use BFS and DFS:

> It depends...

  #### Complexity:
  - **Time is the same**
    - We're visiting every node once.
  - **Space is different**
    - This will vary depending on the search you choose.
    - How many nodes are we having to keep in memory at any given time.

  #### If your tree is fully flushed out, as wide as it can be all the way down:
    
  - Breadth First is a lot of nodes to keep in memory.
     ![BFirst](../resources/B_First_Mem.JPG)
<br>
  - Depth First only needs to keep track of one route all the way down 
     ![DFirst](../resources/D_First_Mem.JPG)

> - **If it's wider than it is deep: Depth First.**
> - **If it's deeper than it is wide: Breadth First.**

--- 
## When to us the different variants of DFS:

  ### Not any *REALLY* good answers, most of the time it is just because it is good to know.

  #### InOrder:

  - Will return the data we get back in order, left to right.

  #### PreOrder:

  - Good for flattening the tree out, or export it so that it can easily be reconstructed.