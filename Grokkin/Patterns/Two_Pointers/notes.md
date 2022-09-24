# Two (Three) Pointers

## General Notes

- The **pointers may start in different points, and move in different directions** depending on the problem you are trying to solve.
- Sometimes a **for loop** can be used to make the code more readable.


## Problems

### Pair with Target Sum - TwoSum - (easy)

- **Prompt:** Given an *array of **sorted** numbers* and a *target sum*, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
<br>

- **Example:**
```
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
```
<br>

- **Basic Pattern:**
  - Create and assign pointers
  - Loop till pointers touch
    - check if condition is met, return values if so
    - move one pointer if not
  - return a negative response if the value is not found
  - <br>

- **Algorithm:**
  1. Create pointers at both ends.
  2. Create a loop that will run until the pointers meet.
  3. Add the value at the two pointers.
  4. If the added value (currentSum) matches the target, return the pointer values in an array.
  5. If the currentSum does not match the target,
     1. If the currentSum is greater than the target, decrement the right pointer.
     2. Else, increment the left pointer.
  6. If we reach this point, we have broken out of the loop and not found a matching value, so we will return `[-1, -1]` in this case as the prompt dictates.
<br>

- **Code:**
```js
// No comments
const pair_with_targetsum = function(arr, target_sum) {
  let lPtr = 0;
  let rPtr = arr.length - 1;

  while(lPtr < rPtr){
    const currentSum = arr[lPtr] + arr[rPtr]; 
    if(currentSum === target_sum) return [lPtr, rPtr];
    if(currentSum > target_sum){
      rPtr--;
    } else {
      lPtr++;
    }
  }
  return [-1, -1];
}

// Comments
const pair_with_targetsum = function(arr, target_sum) {

  // Create two pointers 
  // set them such that they will begin on either side of the array.
  let lPtr = 0;
  let rPtr = arr.length - 1;

  // Here we create a loop that will run until the pointers touch,
  // that means that one of the two pointers MUST move 
  // every time through the loop.
  while(lPtr < rPtr){
    // Here we find the current condition we will be checking against.
    // Creating a well named variable here will make your code more readable.
    const currentSum = arr[lPtr] + arr[rPtr]; 

    //Here we check if the value we are searching for has been found, returning if so.
    if(currentSum === target_sum) return [lPtr, rPtr];

    // If the value hasn't been found we will move one of the two pointers 
    // in an attempt to get closer to our target
    // because our array is sorted we know if the lPtr is incremented our sum will be 
    // either the same or increase, the opposite if the rPtr is decremented.
    if(currentSum > target_sum){
      rPtr--;
    } else {
      lPtr++;
    }
  }

  // If we have reached the end of the loop, no value has been
  // found that meets the conditions
  return [-1, -1];
}
```

### Pair with Target Sum - TwoSum - (easy)

- **Prompt:** 
<br>

- **Example:**
```

```
<br>

- **Basic Pattern:**

  - <br>

- **Algorithm:**

<br>

- **Code:**
```js
// No comments


// Comments

```
