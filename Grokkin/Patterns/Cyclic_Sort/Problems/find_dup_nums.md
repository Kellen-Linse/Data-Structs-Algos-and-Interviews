# Find the Duplicate Number (easy)

> **Prompt:** We are given an **unsorted array** containing `n+1` numbers taken from the `range 1 to n`. 
> - The array has only **one duplicate** but **it can be repeated multiple times**. 
> - **Find that duplicate number without using any extra space.** You are, however, allowed to modify the input array.

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
    - Ex: 
      - `if(nums[i] !== i+1) return nums[i];`
      - `if(nums[i] !== i+1) return i+1;`


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
  5. Return the value that is out of place, that is our duplicate number.