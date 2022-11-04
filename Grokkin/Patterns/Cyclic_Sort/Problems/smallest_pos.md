# Find the Smallest Missing Positive Number (medium)

> **Prompt:** Given an **unsorted array containing numbers**, 
> - find the smallest missing positive number in it.
> - **Note:** 
>   - Positive numbers start from ‘1’.
>   - Our array contains just numbers. **Not a given range!** so we need to account for numbers that are higher and lower than our array indices as well.

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

    if(nums[i] < 1 || nums[i] > nums.length+1 || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return i+1;
  }
  
  return nums.length+1;
};


// Comments
const find_first_smallest_missing_positive = function(nums) {

  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1; // Sorted index of i;

    // If the value at i is less than 1 (non-positive) or greater than the length of the array, or at it's sorted position, increment i by one
    if(nums[i] < 1 || nums[i] > nums.length+1 || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Find the out of place value, return it's index+1
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1) return i+1;
  }
  
  // If there is no missing number in our array, the missing number is the length of our array+1
  return nums.length+1;
};
```
<br>

### **Comments:**
  - The trick with this problem is knowing to skip the non-positive values.
  - All that matter for this problem are the pos values, so you want to map them to their correct indices.
  - Keep in mind, because pos arrays start at one, not zero, you will need to account for the case that every number in the array is in it's correct spot, that means the smallest missing number is the length of the array + 1.
    - [1] smallest missing number `2`, that is equal to `nums.length+1`;


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is **non-positive or greater than the length of the array+1**, or at it's sorted position, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
     1. Return the index that the out of place value is at + 1, that is our missing number.
  5. If every number in the array is in the correct position the missing number is `nums.length+1`.