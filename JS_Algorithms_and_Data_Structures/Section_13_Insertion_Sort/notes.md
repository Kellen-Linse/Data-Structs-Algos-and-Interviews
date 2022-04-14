# Insertion Sort

## 78: Insertion Sort: Intro

- **There are situations where Insertion sort does well.**
<br>

> **Insertion sort builds up the sort by gradually creating a larger left half, which is always sorted.**

### Insertion Sort Pseudocode:

- Start by picking the second element in the array
- Compare the second element with the one before it and swap if the left element is greater than the right.
- Continue to the next element and if it is less than the element to its left, iterate through the sorted portion, to place the element in the space where it is less than the element on it's right, but greater than the element to it's left.
- Repeat until the array is sorted.

## 79: Insertion Sort: Implementation 

```js

function insertionSort(arr){

  for( let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){ // extra conditional in check allows us to save some lines of code
      arr[j+1] = arr[j];
    }
    arr[J+1] = currentVal;
  }
  return arr;
}

insertionSort([5, 3, 9, 6]); // [3, 5, 6, 9]

```

## 80: Insertion Sort: Big O Complexity 

- worst case: 
  - reversed: **O(n^2)**
- best case: 
  - inserting a value in a sorted array: **O(n)**
