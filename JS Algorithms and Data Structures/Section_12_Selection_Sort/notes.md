# Selection Sort

## 74: Selection Sort: Intro

- **Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.**

> - **Bubble Sort Goes Up**
> - **Selection Sort Goes Down**

- In selection sort, we start at the beginning, and compare our first unsorted value against the other values, then swapping the lowest value into to lowest unsorted position.

### Selection Sort Pseudocode

- Store the first element as the smallest value you've seen so far, set as the "minimum".
- Compare the item to the next item in the array until you find a smaller number.
  - if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
  - if the "minimum" is not the value you initially began with, swap those two values.
- Repeat this with the next element until the array is sorted.

## 75: Selection Sort: Implementation 


```js

const oneLineSwap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 

function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i+1; j < arr.length; j++){
      console.log("See the numbers being compared here:" i, j);

      if(arr[j] < arr[lowest]){
        lowest = j;
      }
      if(i !== lowest) swap(arr, i, lowest);
    }
  }

  return arr
}

```

## 76: Selection Sort: Big 0 Complexity

- Time Complexity: **Big O(n^2)**

- Selection Sort is more or less the same as Bubble Sort, the only time you may want Selection sort over Bubble sort is if you need to limit the amount of swaps you make. 