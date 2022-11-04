# Find the Corrupt Pair (easy)

> **Prompt:** We are given an **unsorted array** containing `n` numbers taken from the `range 1 to n`. The array originally contained all the numbers from 1 to n, but due to a data error, **one of the numbers got duplicated which also resulted in one number going missing.** 
> - Find **both** these numbers.

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
  - This problem is just like duplicate number, the only difference is that it is asking you to find the duplicate number and the missing index (which are located at the same place in the array), if you have found one you have found the other.


<br>

### **Basic Pattern:**
  1. Iterate over the array.
  2. If the number is at it's sorted position or a duplicate, increment i.
  3. Else, swap the value at i with the value at it's sorted position.
  4. Once we have the sorted array, we can iterate over the array and find the value that is out of place.
  5. Return the value that is out of place, that is our duplicate number, and the index that it is at + 1, that is our missing number.