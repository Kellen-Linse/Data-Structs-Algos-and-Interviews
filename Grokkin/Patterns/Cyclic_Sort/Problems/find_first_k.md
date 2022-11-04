# Find the First K Missing Positive Numbers (hard)

> **Prompt:** Given an **unsorted array containing numbers** and a **number ‘k’**, 
> - **find the first ‘k’ missing positive numbers in the array.**
> - **Note:** 
>   - Notice that the prompt says **numbers** and not *positive numbers or a range* like some other problems! 
>     - This means you need to account for numbers that can be out of bounds by being negative, or by being greater than the length of the array! 

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

    let outOfBounds = nums[i] < 1 || nums[i] > nums.length + 1
    let correctOrDupe = nums[i] === nums[j]

    if( outOfBounds || correctOrDupe ){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let missingNumbers = []; // Results array holding missing numbers.
  let missNumCount = 0;

  // Find all missing numbers, stop loop early if k missing numbers are found.
  for(let i = 0; i < nums.length && missNumCount < k; i++){
    let missingNumFound = nums[i] !== i+1
    
    if( missingNumFound ){
      missingNumbers.push(i+1);
      missNumCount++;
    }  
  }

  // If k missing numbers are not found within the sorted array, we need to add the rest to our results array.
  let missingNumsLeft = k - missNumCount;
  // We start with our counter at 0 and count until we reach the amount of missing numbers left.
  // Our missing numbers will be the length, plus one, plus the current counter.
  for(let i = 0; i < missingNumsLeft; i++){
    missingNumbers.push(nums.length + 1 + i);
  }
  
  return missingNumbers;
};
```
<br>

### **Comments:**
  - The tricks with this problem are:
    - **First**, making sure that your conditions are set up correctly, so that out of bounds (both above and below) numbers are skipped over as well as when a number is correct or a duplicate.
    - **Second**, adding all of the missing numbers correctly to the results array. You will need to account for the fact that there may not be k missing numbers within the array and so you may need to add them afterwards.
      - You will need to track the amount of missing numbers you have found and if the number of missing numbers is less than k at the end of the array you will need to add them yourself. 


<br>

### **Basic Pattern:**
  1. Sort the array using cyclic sort.
  2. Find all missing numbers in the array, stop loop early if k missing numbers are found.
  3. If k missing numbers are not found within the array, add missing numbers to the end of results array.
