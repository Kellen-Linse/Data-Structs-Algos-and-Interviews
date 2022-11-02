# Cyclic Sort

<hr>

## General Notes

- Cyclic Sort describes an approach to dealing with problems involving arrays containing numbers in a given range.
- For Example:
  - You are given an unsorted array containing `n` numbers taken from the range `1` to `n`. The array can have duplicates, which means that some numbers will be missing. Find all the missing numbers.
- To efficiently solve this problem, we can use the fact that the input array contains numbers in the range of `1 to n`. 
  - For example, to efficiently sort the array, we can try placing each number at its correct place, i.e., placing `1` at `index '0'`, placing `2` at `index ‘1’`, and so on. 
  - Once we are done with the sorting, we can iterate the array to find all indices missing the correct numbers. These will be our required numbers.


## Problems

<hr>

## Cyclic Sort (easy)

> **Prompt:** We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.
> - Write a function to sort the objects in-place on their creation sequence number in O(n) time and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

<br>

### **Example:**

```js
// Example 1
Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

// Example 2
Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`
  - **Note:** 
    - *The time complexity of the algorithm is `O(n)`. Although we are not incrementing the `index i` when swapping the numbers, this will result in more than `n` iterations of the loop, but in the worst-case scenario, the while loop will swap a total of `n-1` numbers, and once a number is at its correct index, we will move on to the next number by incrementing `i`. So overall, our algorithm will take `O(n) + O(n-1)` which is asymptotically equivalent to `O(n)`*

<br>

### **Code:**

```js
// No comments
const cyclic_sort = function(nums) {

  for(let i = 0; i < nums.length; i++){

    while(nums[i] !== nums[nums[i]-1]){
      swap(nums, i, nums[i]-1);
    }
  }
  return nums;
}

function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]];
}


// Comments
const cyclic_sort = function(nums) {

  // Iterate over each element in the array
  for(let i = 0; i < nums.length; i++){
    
    // Swap the value at i into it's correct position until the correct value is found for that index.
    while(nums[i] !== nums[nums[i]-1]){
      swap(nums, i, nums[i]-1);
    }
  }

  // Return modified array.
  return nums;
}

// Swap helper function
function swap(arr, i, j){
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

```
<br>

### **Comments:**
  - *Pointers:* One pointer to track the current index of the array.
  - *Movement:* The pointer will move one index at a time, but will loop there until the correct value of that index is found.
  - Getting the condition for the while loop is the important part of this problem.
  - Remember that we need to find the correct value for a given index before we move on to the next. If not, we may swap an incorrect value into that index and never encounter it's counter part to move it into the correct place.
  - Every time we swap, we are placing a number at it's correct location, so while we still check every index O(n), we will only ever have to make `O(n-1)` swaps, so we are at a runtime of `O(n) + O(n-1)`, asymptotically `O(n)`.


<br>

### **Basic Pattern:**
  1. Iterate over each element in the array.
  2. Swap the value at i into it's correct position until the correct value is found for that index.
  3. Once we reach the end of the array, return the modified array.

<br>

### **Algorithm:**
  1. Create a for loop tracking i, iterating L to R one i at a time.
  2. Loop at that index while the value at i is not the correct value for that index.
     1. Swap the value at i into it's correct position, placing the value that was at that values correct position into i.
  3. Return the modified array when we reach the end of the array.