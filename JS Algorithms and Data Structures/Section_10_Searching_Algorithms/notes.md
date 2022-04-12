
# Searching Algorithms

## 56: Intro to Searching

- Think less google search, more trying to find an object in an array.

## 57-58: Intro to Linear Search

- Start at the beginning and work to the end, ur vise-versa. 
- Works well for unsorted data, but there are better ways to search if the data is sorted.

> Linear Search: We are moving at a set interval, checking one item at a time, front to back, or back to front.

#### Linear Search Pseudocode:

- Write a function that accepts an array and a value.
- Loop through the array and check if the current array element is equal to the value.
- If it is, return the index at witch the element is found.
- If the value is never found, return -1.

```js

function linearSearch(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val) return i;
  }
  return -1;
}

```

## 60-63: Binary Search

- Binary Search is a much faster form of search
- Rather than eliminating one element at a time, you eliminate *half* of the remaining elements.
- Binary search only works on **sorted** arrays.

> Binary Search is an example of a **Divide and Conquer** algorithm.

#### Binary Search: Pseudo Code

- Function accepts an array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array.
- While the left pointer is less than the right pointer
  - Create a pointer in the middle
  - If you find the value you want, return the index of the pointer in the middle
  - If the value at the middle index is smaller than the input value
    - Move the left pointer up to the middle index plus 1
  - If the value at the middle index is larger than the input value
    - Move the right pointer down to the middle index minus 1
  - If you never find the value, return - 1

#### Binary Search Code

```js

function binarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;
  let middle = (start + end) / 2;
  middle = middle | 0; // floors middle incase it is a floating point number

  while(arr[middle] !== val && start <= end){
    if(val < arr[middle]){
      end = middle - 1;
    } else {
      start = middle + 1;
    }
      middle = (start + end) / 2;
      middle = middle | 0;
  }
  return arr[middle] === val ? middle : -1;
}

```

### Big O

- Time: O(log n)
  - (very good)

## 64 - 65: Naive String Search

#### Pseudo Naive String Search

- loop over the longer string
- loop over the shorter string
  - if the char don't match, break out of the inner loop
  - if the characters do match, keep going
  - if you complete the loop and find a match, increment the counter
- return the counter

```js

function naiveSearch(long, short){
  let count;

  for(let i = 0; i < 0; i++){
    for(let j = 0; j < 0; j++){
      if(short[j] !== long[i + j]) break;
      if(j === short.length - 1) count++ 
    }
  }

  return count;
}


```