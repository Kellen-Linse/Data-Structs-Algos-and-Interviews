# Find the Missing Number (easy)

> **Prompt:** We are given an **array containing n distinct numbers** taken from the `range 0 to n`.
> - Since the array has only `n` numbers out of the total `n+1` numbers, find the missing number.

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
     // nums[i] represents the index of the value at i in sorted order.
    let j = nums[i];

    // If the value at i is equal to the length, or the value at i is in sorted order, increment i.
    if(nums[i] === n || nums[i] === nums[j]){ // correct place or the extra number
      i++;
    } else {
      // Else, swap the value at i into its sorted position, and the value currently at that position.
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  // Once we sort the array, we will be left with the out of range number (n) in the missing numbers position. We can return that position (i) as that will be the missing number.
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
  - *Movement:* One pointer will sort the array, swapping the values into their sorted positions, or skipping if the value at that index is equal to the length of the array, or it is in the correct position.
  - In this problem, **each number should be equal to its index**, since the array will have n numbers, this means array indices will range from 0 to n-1. **Therefore, we will ignore the number n as we can’t place it in the array.**
  - At each point in the sort, we are swapping or skipping.
  - When we finish sorting the array, n, the number equal to the length of the array, is going to be in place of the missing number. **If n is not in our sorted array once we are finished, that means n is our missing number.**


<br>

### **Basic Pattern:**
  1. Create a counter i set to 0.
  2. Iterate over the array until we reach the end.
     1.  If the value at i is equal to the length, or the value at i is in sorted order, 
         1.  increment i.
     2.  Else,
         1.  Swap the value at i into its sorted position, and the value currently at that position into i.
 1. Iterate over the sorted array looking for the length n, return the position you find n at, or return n if you don't find it.
