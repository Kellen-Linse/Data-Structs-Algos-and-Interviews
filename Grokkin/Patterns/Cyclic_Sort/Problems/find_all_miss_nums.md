# Find all Missing Numbers (easy)

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

    // Skip if the number is at the correct position or we have found a duplicate.
    if(nums[i] === nums[j]){ // This condition covers both.
      i++;
    } else {
      // Swap the value at i with the value at it's sorted position.
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Iterate over the array and add the index+1 of any value that is out of alignment with it's sorted index.
  // The + 1 accounts for the array numbers starting at 1, not 0 like the indices.
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
    - If the range is 1 through 5, then the index of 1 is 0, for a -1 offset.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. Skip if the number is at the correct position or we have found a duplicate.
  3. Swap the value at i to it's sorted position, and the value at that position to i.
  4. Iterate over the array and add the index of any value that is out of alignment with it's sorted index.
  5. Return all missing numbers.