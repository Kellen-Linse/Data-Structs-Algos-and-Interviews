# Cyclic Sort (easy)

> **Prompt:** We are given an **array containing n objects**. 
> - Each object, when created, was assigned a unique number from the `range 1 to n` based on their creation sequence. 
>   - This means that the object with sequence number 3 was created just before the object with sequence number 4.
> - Write a function to **sort the objects in-place on their creation sequence number in O(n) time and without using any extra space.** 
>   - For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

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
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
}

// Comments
const cyclic_sort = function(nums) {
  let i = 0; // Index

  // Iterate over each element in the array
  while(i < nums.length){
    let j = nums[i]-1; // Sorted index of the value at i.
    
    // Swap the value at i into it's correct position until the correct value is found for i.
    if(nums[i] === nums[j]){ // Condition for moving i forward
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  // Return modified array.
  return nums;
}
```
<br>

### **Comments:**
  - *Pointers:* One pointer to track the current index of the array.
  - *Movement:* The pointer will move one index at a time, but will stay there and loop until the correct value of that index is found.
  - Getting the condition correct for the while loop is the defining part of this problem.
  - Remember that we need to find the correct value for a given index before we move on to the next. If not, we may swap an incorrect value into that index and never encounter it's counter part to move it into the correct place.
  - Every time we swap, we are placing a number at it's correct location, so while we still check every index `O(n)`, we will only ever have to make `O(n-1)` swaps, so we are at a runtime of `O(n) + O(n-1)`, asymptotically `O(n)`.


<br>

### **Basic Pattern:**
  1. Iterate over each element in the array.
  2. Swap the value at i into it's correct position until the correct value is found for i.
  3. Once we reach the end of the array, return the modified array.

<br>

### **Algorithm:**
  1. Create i to track the index.
  2. Loop while i is less than the length of the array.
     1. Create a variable to hold the sorted index of the value currently at i.
     2. If the value at i is at it's sorted position, 
        1. increment i.
     3. Else, 
        1. Swap the value at i into it's correct position and swap the value at that position into i.
  3. Return the modified array when we reach the end of the array.
