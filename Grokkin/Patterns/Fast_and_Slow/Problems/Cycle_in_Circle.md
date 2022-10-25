# Cycle in a Circular Array (Hard)

> **Prompt:**
> We are given an **array containing positive and negative numbers**. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. 
> 
> You should assume that the array is circular which means two things:
>
> - 1. If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
> - 2. If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
>
> **Write a method to determine if the array has a cycle.** 
>  - The **cycle should have more than one element** and,
>  - **should follow one direction** 
>    - which means the cycle should not contain both forward and backward movements.

<br>

- **Example:**

```js
Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
```

<br>

- **Big O:**

  - Time: `O(N^2)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const circular_array_loop_exists = function (arr) {

  for (i = 0; i < arr.length; i++) {
    let pos = arr[i] >= 0;
    let slow = i,
        fast = i;

    while (true) {
      slow = findNext(arr, pos, slow);
      fast = findNext(arr, pos, fast);
      if (fast !== -1) fast = findNext(arr, pos, fast);

      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    if (slow === fast && slow !== -1) return true;
  }

  return false;
};

function findNext(arr, pos, currIdx) {
  let curSign = arr[currIdx] >= 0;

  if (pos !== curSign) return -1;

  let nextIdx = (currIdx + arr[currIdx]) % arr.length;
  if (nextIdx < 0) nextIdx += arr.length;
  if (nextIdx === currIdx) nextIdx = -1;

  return nextIdx;
}

// Comments
const circular_array_loop_exists = function (arr) {

  // Iterate over the array
  for (i = 0; i < arr.length; i++) {
    // Check whether the current value is positive
    let pos = arr[i] >= 0;

    // Create fast and slow pointers that will move through the array starting at the current index.
    let slow = i,
        fast = i;

    // As we move through the array,
    // if slow or fast becomes '-1' this means we can't find a cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = findNext(arr, pos, slow);

      // move one step for fast pointer
      fast = findNext(arr, pos, fast);

      // If fast is not equal to -1, move another step for the fast pointer
      if (fast !== -1) fast = findNext(arr, pos, fast);

      // If we have found a reason to break early or we have completed a cycle, exit the loop
      // This line encompasses ALL POSSIBLE CONDITIONS, so one condition will always be hit to leave the loop eventually.
      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    // If when we exit the loop, slow is equal to fast,
    // (and it is not because they are both equal to -1)*
    // return true as we have found a cycle.
    //
    // *slow and fast could be used interchangeably here because slow === fast
    if (slow === fast && slow !== -1) {
      return true;
    }
  }

  // If we reach the end of the array and we have not found a cycle, return false.
  return false;
};

// Here we are finding the next index.
// If we find a non-valid index we will return -1.
// -1 will never be a valid index, so we return it if we find a non-cycle.
function findNext(arr, pos, currIdx) {
  // Check the sign of the value at the current index.
  let curSign = arr[currIdx] >= 0;

  // If the sign of the current value is not the same as the sign of the first value we started with,
  // we have found a switch in direction, so we return -1;
  if (pos !== curSign) return -1;

  // Find the next index: add current index and the value at that index,
  // then take the modulo of that value and the length of the array.
  // If the sum if the first value is negative, the value at nextIndex will be negative
  let nextIdx = (currIdx + arr[currIdx]) % arr.length;

  // If the nextIdx is negative we need to wrap around
  if (nextIdx < 0) nextIdx += arr.length;

  // one element cycle, return -1
  if (nextIdx === currIdx) nextIdx = -1;

  // return the next valid index if we get to this point.
  return nextIdx;
}
```

<br>

- **Comments:**
  - This problem is tricky, it requires a lot of thought towards the different conditions that the problem can run into.
  - Making use of a secondary function to find the next index makes this problem more manageable.
  - The trick with the secondary function is to also check whether the next index is valid and return -1 if an invalid index is found. 
    - -1 will never be a valid index, so it is a safe return value to indicate an invalid index has been found.
  - This problem makes use of an infinite loop, containing conditions that will eventually always be reached, at that point we will make use of the `break` keyword to exit the loop.
  - If when we exit the loop, slow is equal to fast, we need to check that it is not the case that they are equal because they are both -1!
  - We need to account for any of the values being greater than the amount remaining in the array, and for the case that the value is even greater than the length of the array, we can use the modulo operator for this:
    - `let nextIdx = (currIdx + arr[currIdx]) % arr.length;`
  - We also need to account for if the potential cycle is moving in the negative direction: 
    - `if (nextIdx < 0) nextIdx += arr.length;`

<br>

- **Basic Pattern:**
  1. Iterate over the array one index at a time.
  2. For each index create a fast and slow pointer starting at the current index.
  3. Loop over the array, find the next index for each the slow and the fast pointers.
  4. Check if the next indices are valid, invalid, or a cycle has been found.
  5. If a cycle has been found return true. If we reach the end of the array, return false. 

<br>

- **Algorithm:**

_Main function:_

1. Create a for loop to iterate over the array on index at a time, starting at the 0th index.
   1. Check the sign of the current index, storing the result in a variable, true for positive.
   2. Create a fast and slow variable and set them to be the current index.
   3. Create a while loop with a true condition, such that it will run until something inside the loop breaks it.
      1. Run the findNext function on the current slow pointer variable, set slow to be the returned value.
      2. Run the findNext function on the current fast pointer variable, set fast to be the returned value.
      3. If the findNext function did not returned -1, run the findNext function on the current fast pointer variable again and set fast to be the returned value.
      4. If either the fast or slow variable is set to -1, or the fast and slow variable are equal to each other, break out of the loop.
   4. If when we exit the loop, slow is equal to fast, **and it is not because they are both equal to -1**, return true as we have found a cycle.
2. If we reach the end of the for loop and we have not found a cycle, return false.

_findNext function:_

1. Start by checking the sign of the value at the passed in index.
2. If that sign is not the same as the sign of the value at the current index of the outer for loop, return -1, as we have reversed directions.
3. Next we will find the next index by taking the value at the current index and adding to the current index,  then taking that value mod the length of the array, we will set this value to be the next index.
4. If the next index is a negative value we must subtract it from the length of the array as the current direction is moving back to front.
5. If the current index is equal to the next index, return -1 as we have a one cycle loop.
6. Return the next index.