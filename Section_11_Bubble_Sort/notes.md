
# Bubble Sort

## 67: Intro to Sorting Algorithms 

> **Sorting:** Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

- Examples:
  - Sorting numbers from smallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year.
  - Sort movies by revenue

```js

let arr = [4, 6, 8, 2 , 8, 3];

sort(arr); // returns [2, 3, 4, 6, 8, 8]

```

#### Why do we need to learn this?

  - Sorting is a very common task, so it is good to know how it works.
  - There are many ways of sorting things, and each way has pros and cons.
    - Some can be faster on average, some are faster in certain situations.
    - [See this website for more details](https://www.toptal.com/developers/sorting-algorithms)
  - **They come up in interviews!!**

### The "Elementary Sorting Algorithms

  - They are less used because they are less efficient than some others.
<br>

  - **Bubble Sort**
  - **Selection Sort**
  - **Insertion Sort**

## 68: Built-in JavaScript Sorting

- In JavaScript, every array has a built in sort function.
  - **But it doesn't always work the way you want it to.**
  - The built in sort method accepts an optional *comparator* function to tell JS how you want to sort.
  - The comparator looks at a pair of elements (a and b), and determines their sorting order based on the return value.
    - if it returns a negative number, a should come before b
    - if it returns a positive number, b should come before a
    - if it returns 0, a and b are treated as equal and treats them as such.

#### Comparator Example:

```js

function numberCompare(num1, num2){
  return num1 - num2;
}

[8, 3, 7, 5].sort(numberCompare); // [3, 5, 7, 8]

```

## 69: Bubble Sort: Overview

> **A sorting algorithm where the largest values bubble up to the top (one at a time).**

### Swapping

- Many sorting algorithms involve some type of swapping functionality
- Some example:

```js

//ES5
function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2] ] = [arr[idx2], arr[idx1]];
}

```

### Bubble Sort Pseudocode


- Define a function that takes an array.
- Start an outer loop with a variable called i, loop from the **end** of the array, towards the beginning.
- Start an inner loop with a variable called j, loop from the **beginning** until i-1.
- **compare**, if arr[j] is greater than arr[j+1], swap those two values.
- return the sorted array.

## 70-71: Bubble Sort: Implementation - Code, and Optimization 

- If we check for whether or not we have made any swaps, we can potentially save ourselves some computation time.

```js
// optimized with noSwaps
function bubbleSort(arr){
  let noSwaps;

  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; i++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j+1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr
}

```

## 72: Bubble Sort: Big O Complexity 

- Time Complexity: **O(n^2)**
- Space Complexity: **O(1)**