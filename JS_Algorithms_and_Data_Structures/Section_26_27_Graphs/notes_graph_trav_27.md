# Graphs

## 221: Intro to Graph Traversal

- No root node
- Need to specify a starting point
- No guarantee that there is one path between two nodes

- Many real world uses, so they often show up in interviews.
  - AI
  - Problem Solving
  - etc...

## 222: Depth First Traversal

- DFS: Prioritizing visiting **children** of a given node prior to visiting siblings.
- There is no root, so what does that mean?
  - For a given node, we follow one neighbor of that node, we then proceed to follow a neighbor of that node, and so on, **PRIOR** to visiting the other neighbors of that node.
  - We have to remember where we have been in a DFS

## 223: DFS Recursive Intro & 224: Solution

- We can keep track of our visited vertices with an object `{ 'a': true}`

- Pseudo:
  - Accept one node as starting point
  - Create a list to store the end result, to be returned at the very end
  - Create an object to store visited vertices
  - Create a helper function which accepts a vertex
    - return early if the vertex has already been visited
    - place the vertex accepted by the function into the 'visited' array
    - push the accepted vertex into the results array
    - loop over all of the values in tha aList for that vertex
    - if any of those values have not been visited, recursively invoke the helper function with the unvisited vertex.

Code: 

```js

depthFirst_Recursive(start){
  let resultsList = [];
  let visited = {};
  const adjacencyList = this.adjacencyList; // Here to make sure 'this' refers to the correct thing

  function DFS(vertex){
    if(!vertex) return null;
    visited[vertex] = true;
    resultsList.push(vertex)
    adjacencyList[vertex].forEach(neighbor => {
      if(! visited[neighbor]){
        return dfs(neighbor)
      }
    })
    DFS(start);
    return resultsList;
  }
}

```

## 225: DFS Iterative Intro & 226: Solution


- Pseudo:
  - Accept one node as starting point
  - Create a stack to help us keep track of vertices ( use list/array)
  - Create list to store the end result, to be returned at the end
  - Create an object to store visited vertices
  - Add the stating vertex to the stack, and mark it visited
  - While the stack has something in it:
    - Pop the next vertex from the stack
    - if that vertex hasn't been visited:
      - Mark it as visited
      - Add it to the result list
      - Push all of it's neighbors into the stack


Code: 

```js

depthFirst_Iterative(start){
  const stack = [start]
  const resultsList = [];
  const visited = {};
  let currentVertex;

  visited[start] = true;
  while(stack.length){
    currentVertex = stack.pop();
    result.push(currentVertex);

    this.adjacencyList[currentVertex].forEach( neighbor => {
      if(!visited[neighbor]){
        visited[neighbor] = true;
        stack.push(neighbor)
      }
    })
  }
}

```

## 227: Breadth First Traversal & Solution

- Visit neighbors at current depth first
- Not one specific order

- Pseudo:
  - Accept one node as starting point
  - Create a queue (array) and place the starting vertex in it
  - Create an array to store the nodes visited
  - Create an object to store nodes visited
  - Mark the starting nodes visited
  - Loop as long as there is anything in the queue
    - Remove the first vertex from the queue and push it on to the array that stores nodes visited
    - Loop over each vertex in the adjacency list for the vertex you are visiting
      - If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
  - return array of visited nodes

Code:

```js


breadthFirst(start){
  const queue = [start]
  const resultsList = [];
  const visited = {};
  let currentVertex;
  visited[start] = true;
  
  while(queue.length){
    currentVertex = queue.shift();
    result.push(currentVertex);

    this.adjacencyList[currentVertex].forEach( neighbor => {
      if(!visited[neighbor]){
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    })
  }
  return visited;
}

```