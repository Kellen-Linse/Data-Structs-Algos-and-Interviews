# Cyclic Sort

<hr>

## General Notes

- Cyclic Sort describes an approach to dealing with problems involving **arrays containing numbers in a given range.**
- For Example:
  - You are given an unsorted array containing `n` numbers taken from the range `1` to `n`. The array can have duplicates, which means that some numbers will be missing. Find all the missing numbers.
- To efficiently solve this problem, we can use the fact that the input array contains numbers in the range of `1 to n`. 
  - For example, to efficiently sort the array, we can try placing each number at its correct place, i.e., placing `1` at `index '0'`, placing `2` at `index ‘1’`, and so on. 
  - Once we are done with the sorting, we can iterate the array to find all indices missing the correct numbers. These will be our required numbers.

//==============

 - These problems are all about knowing when to skip a number within the array as you sort the array.
   - Such as:
     - When the value at the current index is our of bounds (larger than the array size or < 0)
     - When the value is a duplicate or the value is at the correct position.

<br>

**- All of these problems follow almost the exact same pattern.**


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

<br>

## Find the Missing Number (easy)

> **Prompt:** We are given an array containing n distinct numbers taken from the range 0 to n. Since the array has only n numbers out of the total n+1 numbers, find the missing number.

<br>

### **Example:**

```js
Input: [4, 0, 3, 1]
Output: 2
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_missing_number = function(nums) {
  let n = nums.length;
  let i = 0;

  while(i < n){
    let j = nums[i];
    if(nums[i] === n || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === n) return i;
  }

  return n;
}

// Comments
const find_missing_number = function(nums) {
  let n = nums.length; // For readability
  let i = 0; // Index to track where we are in the array.

  // Iterate over the array until we reach the end.
  while(i < n){
     // For readability, nums[i] represents the index of the value in sorted order.
    let j = nums[i];

    // If the value at i is equal to the length, or the value at i is in sorted order, increment i.
    // Else, swap the value at i into its sorted position, and the value currently at that position.
    if(nums[i] === n || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Once we sort the array, we will be left with the out of range number (n) in the missing numbers position, we can return that position (i) as that will be the missing number.
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === n) return i;
  }

  // If we reach the end of the array and we haven't found an out of order number, the missing number is the one number that is out of range for the given set, n.
  return n;
}
```
<br>

### **Comments:**
  - *Pointers:* Two pointers, but used one at a time. Used first to sort the array, then to look for the out of place/missing number.
  - *Movement:* One pointer will sort the array, swapping the values into their sorted positions, or skipping if the value at that index is equal to the length of the array.
  - In this problem, each number should be equal to its index, since the array will have n numbers, this means array indices will range from 0 to n-1. Therefore, we will ignore the number n as we can’t place it in the array.
  - At each point in the sort, we are swapping or skipping.
  - When we finish sorting the array, in place of the missing number is going to be the number equal to the length of the array, n. If n is not in our sorted array once we are finished, that means n is our missing number.


<br>

### **Basic Pattern:**
  1. Create a counter i set to 0.
  2. Iterate over the array until we reach the end.
     1.  If the value at i is equal to the length, or the value at i is in sorted order, 
         1.  increment i.
     2.  Else,
         1.  Swap the value at i into its sorted position, and the value currently at that position into i.
 1. Iterate over the sorted array looking for the length n, return the position you find n at, or n if you don't find it.

<br>

## Find all Missing Numbers (easy)

> **Prompt:** We are given an **unsorted array** containing **numbers taken from the range `1 to ‘n’`**. 
> - The array can have duplicates, which means some numbers will be missing.
> - Find all those missing numbers.

<br>

### **Example:**

```js
Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_missing_numbers = function(nums) {
  let missingNumbers = []; 
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;
    if(nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let k = 0; k < nums.length; k++){
    if(nums[k] !== k + 1) missingNumbers.push(k + 1);
  }

  return missingNumbers;
};

// Comments
const find_missing_numbers = function(nums) {
  let missingNumbers = []; // Return array
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index for the value at i.

    // Skip if the number is at the correct or we have found a duplicate.
    if(nums[i] === nums[j]){
      i++;
    } else {
      // Swap the value at i to it's sorted position.
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Iterate over the array and add the index of any value that is our of alignment with it's sorted index.
  for(let k = 0; k < nums.length; k++){
    if(nums[k] !== k + 1) missingNumbers.push(k + 1);
  }

  // Return all missing numbers.
  return missingNumbers;
};
```
<br>

### **Comments:**
  - *Pointers:* One pointer used in two different places.
  - *Movement:* Pointer used first to sort the array, next used to find all missing numbers.
  - **Remember to always account for any offset between the range of numbers and the length of the array!!**
    - If the range is 1-5, then the index of 1 is 0, for a -1 offset.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. Skip if the number is at the correct or we have found a duplicate.
  3. Swap the value at i to it's sorted position, and the value at that position to i.
  4. Iterate over the array and add the index of any value that is our of alignment with it's sorted index.
  5. Return all missing numbers.

<br>

## Find the Duplicate Number (easy)

> **Prompt:** We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

<br>

### **Example:**

```js
Input: [1, 4, 4, 3, 2]
Output: 4
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_duplicate = function(nums) {
  let i = 0;
  
  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return nums[i];
  }
};

// Comments
const find_duplicate = function(nums) {
  let i = 0;
  
  while(i < nums.length){
    let j = nums[i]-1; // Sorted index for the value at i.

    // If the number is sorted or a duplicate, increment i.
    if(nums[i] === nums[j]){
      i++;
    } else {
      // Swap the value at i with the value at it's sorted position.
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Once we have the sorted array, the value that is out of place will be our duplicate number.
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return nums[i];
  }
};
```
<br>

### **Comments:**
  - *Pointers:* One pointer used in two different places.
  - *Movement:* Pointer used first to sort the array, next used to find the duplicate number.
  - There is a pattern where the duplicate number, or the out of bounds number, etc.. is the same as a number that is missing, and that number is placed in the index where the missing number would be. The difference is how to extract that number after the array is sorted.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
  5. Return the value that is out of place, that is our duplicate number.

<br>

## Find all Duplicate Numbers (easy)

> **Prompt:** We are given an **unsorted array containing n numbers taken from the range 1 to n**. 
> - The array has some numbers appearing twice.
> - **Find all these duplicate** numbers using constant space.

<br>

### **Example:**

```js
Input: [3, 4, 4, 5, 5]
Output: [4, 5]
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_all_duplicates = function(nums) {
  duplicateNumbers = [];
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) duplicateNumbers.push(nums[i]);
  }
  
  return duplicateNumbers;
};

// Comments
const find_all_duplicates = function(nums) {
  duplicateNumbers = []; // Return array
  let i = 0; // Index

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index of i;

    // If the value at i is at it's sorted position or there is a duplicate, increment i
    if(nums[i] === nums[j]){
      i++;
    } else {
      // Else, swap the value at i into it's sorted position
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Iterate over the array and add any out of place number to the return array.
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) duplicateNumbers.push(nums[i]);
  }
  
  return duplicateNumbers;
};
```
<br>

### **Comments:**
  - *Pointers:* One pointer used in two different places.
  - *Movement:* Pointer used first to sort the array, next used to find all missing numbers.
  - This problem follows the same pattern as the last several, with minimal variation, just how the out of place numbers are added to the results array.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find all of the values that are out of place, and push each into the return array.
  5. Return the return array.

## Find the Corrupt Pair (easy)

> **Prompt:** We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

<br>

### **Example:**

```js
Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_corrupt_numbers = function(nums) {
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return [nums[i], i+1];
  }

  return [-1, -1];
};

// Comments
const find_corrupt_numbers = function(nums) {
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index of i;

    // If the value at i is at it's sorted position or there is a duplicate, increment i
    if(nums[i] === nums[j]){
      i++;
    } else {
      // Else, swap the value at i into it's sorted position
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Find the out of place number, that will be our duplicate, and it's index+1 will be our missing number
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return [nums[i], i+1];
  }

  return [-1, -1];
};
```
<br>

### **Comments:**
  - *Pointers:* One pointer used in two different places.
  - *Movement:* Pointer used first to sort the array, next used to find the duplicate number.
  - This problem is just like duplicate number, the only difference is that it is asking you to find the duplicate number and the missing index (which are located at the same place in the array).


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
  5. Return the value that is out of place, that is our duplicate number, and the index that it is at + 1, that is our missing number.

<br>


## Find the Smallest Missing Positive Number (medium)

> **Prompt:** Given an unsorted array containing numbers, find the smallest missing positive number in it.
> - **Note:** Positive numbers start from ‘1’.

<br>

### **Example:**

```js
Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
```

<br>

### **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

### **Code:**

```js
// No comments
const find_first_smallest_missing_positive = function(nums) {
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] < 1 || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return i+1;
  }
  
  return -1;
};


// Comments
const find_first_smallest_missing_positive = function(nums) {
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index of i;

    // If the value at i is less than 1 (non-positive) or at it's sorted position or there is a duplicate, increment i by one
    if( nums[i] < 1 || nums[i] === nums[j]){
      i++;
    } else {
      // Else, swap the value at i into it's sorted position
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Find the out of place value, return it's index+1
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return i+1;
  }
};

```
<br>

### **Comments:**
  - The trick with this problem is knowing to skip the non-positive values.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is **non-positive** or at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
  5. Return the index that the out of place value is at + 1, that is our missing number.

<br>


## Find the First K Missing Positive Numbers (hard)

> **Prompt:** Given an **unsorted array containing numbers** and a **number ‘k’**, 
> - find the first ‘k’ missing positive numbers in the array.
> - **Note:** Notice that the prompt says **numbers** and not positive numbers like some other problems! This means you need to account for numbers that can be out of bounds by being negative, or by being greater than the length of the array! 

<br>

### **Example:**

```js
Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
```

<br>

### **Big O:**
  - Time: `O(n + k)`
  - Space: `O(1)` // not including return array `O(k)` with results array.

<br>

### **Code:**

```js
// No comments
const find_first_k_missing_positive = function(nums, k) {
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] < 1 || nums[i] > nums.length + 1 || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let missingNumbers = [];
  let missNumCount = 0;

  for(let i = 0; i < nums.length && missNumCount < k; i++){
    if(nums[i] !== i+1 ){
      missingNumbers.push(i+1);
      missNumCount++;
    } 
  }

  for(let i = 0; i < k - missNumCount; i++){
    missingNumbers.push(nums.length + 1 + i);
  }
  
  return missingNumbers;
};

// Comments
const find_first_k_missing_positive = function(nums, k) {
  let i = 0; 

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index for nums[i] value.

    // Conditions for moving index forward: the value at i is out of bounds, or in the correct position.
    if(nums[i] < 1 || nums[i] > nums.length + 1 || nums[i] === nums[j]){
      i++;
    } else {
      // Swap the value at i into it's correct, sorted index.
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let missingNumbers = []; // Results array holding missing numbers.
  let missNumCount = 0;

  // Find all missing numbers, stop loop early if k missing numbers are found.
  for(let i = 0; i < nums.length && missNumCount < k; i++){
    if(nums[i] !== i+1 ){
      missingNumbers.push(i+1);
      missNumCount++;
    } 
  }

  // If k missing numbers are not found within the sorted array, we need to add the rest to our results array.
  // We start with our counter at 0 and count until we reach the amount of missing numbers left.
  // Our missing numbers will be the length, plus one, plus the current counter.
  for(let i = 0; i < k - missNumCount; i++){
    missingNumbers.push(nums.length + 1 + i);
  }
  
  return missingNumbers;
};
```
<br>

### **Comments:**
  - The tricks with this problem are:
    - First, making sure that your conditions are set up correctly, so that out of bounds (both above and below) numbers are skipped over.
    - Second, adding all of the missing numbers correctly to the results array. You will need to account for the fact that there may not be k missing numbers within the array and so you may need to add them afterwards.
      - You will need to track the amount of missing numbers you have found and if the number of missing numbers is less than k at the end of the array you will need to add them yourself. 


<br>

### **Basic Pattern:**
  1. Sort the array using cyclic sort.
  2. Find all missing numbers in array, stop loop early if k missing numbers are found.
  3. If k missing numbers are not found within the array, add missing numbers to the end of results array.
