# Find all Duplicate Numbers (easy)

> **Prompt:** We are given an **unsorted array** containing `n` numbers taken from the `range 1 to n`. 
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