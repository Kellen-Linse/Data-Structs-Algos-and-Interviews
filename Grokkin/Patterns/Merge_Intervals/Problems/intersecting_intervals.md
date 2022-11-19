# Intervals Intersection (medium)

> **Prompt:** Given two lists of intervals, **find the intersection of these two lists.** Each list consists of **disjoint intervals sorted on their start time**.

<br>

## **Example:**

```js
Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
```

<br>

## **Big O:**
  - Time: `O(n+m)`
  - Space: `O(n+m)`

<br>

## **Code:**

```js
// No comments
const merge = function(arr1, arr2) {
  let result = [];
  
  let i = 0, j = 0;
  
  while(i < arr1.length && j < arr2.length){
    const merge1 = arr1[i].end >= arr2[j].start && arr1[i].start <= arr2[j].end;
    const merge2 = arr2[j].end >= arr1[i].start && arr2[j].start <= arr1[i].end;

    if(merge1 || merge2){
      const start = Math.max(arr1[i].start, arr2[j].start);
      const end = Math.min(arr1[i].end, arr2[j].end);

      result.push(new Interval(start, end));
    }
    arr1[i].end < arr2[j].end ? i++ : j++;
  }

  return result;
};

// Comments
const merge = function(arr1, arr2) {
  let result = []; // Array to hold intersecting intervals
  
  let i = 0, j = 0; // Counters
  
  // Loop until one of the arrays reaches the end
  while(i < arr1.length && j < arr2.length){

    // Intersections, merge conditions
    const merge1 = arr1[i].end >= arr2[j].start && arr1[i].start <= arr2[j].end;
    const merge2 = arr2[j].end >= arr1[i].start && arr2[j].start <= arr1[i].end;

    // Intersection
    if(merge1 || merge2){

      // Find the start and end of the intersection
      const start = Math.max(arr1[i].start, arr2[j].start);
      const end = Math.min(arr1[i].end, arr2[j].end);

      // Add the intersecting interval to the results array
      result.push(new Interval(start, end));
    }

    // Move the lesser of the two intervals to the next interval
    arr1[i].end < arr2[j].end ? i++ : j++;
  }

  return result;
};
```
<br>

## **Comments:**
  - It definitely helps to **draw out the problem** and talk it through, 
    - it's all about the defining the intersecting condition correctly, and it's very difficult to reason it out just by talking.


<br>

## **Basic Pattern:**
  1. Loop over the arrays.
  2. Check the current intervals for an intersection between the two.
  3. Create a new interval out of the intersection and add it to the results array.
  4. return results array.

<br>

## **Algorithm:**
  1. Create a results array.
  2. Create two counters, set both to 0.
  3. Create a while loop to run while both counters are within the range of their respective arrays.
     1. If an intersection is found.
        1. Find the start and end of the intersection.
        2. Create a new interval with the start and end of the intersection and add it to the results array.
     2. Move the lesser of the two intervals to the next interval.
  4. Return the results array.

## **Leetcode Solution:**

```js
var intervalIntersection = function(arr1, arr2) {
  let result = [];
  const start = 0, end = 1;
  
  let i = 0, j = 0;
  
  while(i < arr1.length && j < arr2.length){
    const merge1 = arr1[i][end] >= arr2[j][start] && arr1[i][start] <= arr2[j][end];
    const merge2 = arr2[j][end] >= arr1[i][start] && arr2[j][start] <= arr1[i][end];

    if(merge1 || merge2){
      const iStart = Math.max(arr1[i][start], arr2[j][start]);
      const iEnd = Math.min(arr1[i][end], arr2[j][end]);

      result.push([iStart, iEnd]);
    }
    arr1[i][end] < arr2[j][end] ? i++ : j++;
  }
  
  return result;
};
```