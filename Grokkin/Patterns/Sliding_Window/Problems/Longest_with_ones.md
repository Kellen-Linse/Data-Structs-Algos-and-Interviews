# Longest Subarray with Ones after Replacement (medium)

> **Prompt:** Given an **array containing 0s and 1s**, if you are allowed to *replace no more than ‘k’ 0s with 1s*, find the length of the **longest contiguous subarray** having all 1s.

<br>

- **Example:**

```js
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
```

<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

- **Code:**

```js
// No comments
const length_of_longest_substring = function(arr, k) {
  let maxLen = 0, 
      onesCount = 0, 
      L = 0;

  for(let R = 0; R < arr.length; R++){

    if(arr[R] === 1) onesCount++;

    let curLen = R - L + 1;
    let numReplacedZeros = curLen - onesCount;

    if(numReplacedZeros > k){
      if(arr[L] === 1) onesCount--;
      L++;
      curLen--;
    }

    maxLen = maxLen < curLen ? curLen : maxLen;
  }
  return maxLen;
};

// Comments
const length_of_longest_substring = function(arr, k) {

  // Track the largest sub-array, and the number of ones within the window
  let maxLen = 0, onesCount = 0;

  // Pointer for the left side of the sliding window
  let L = 0;

  // Iterate over the array once, using R to represent the right side of the sliding window.
  for(let R = 0; R < arr.length; R++){

    // If the value at R is 1, add it to the ones count, as it will be entering the window.
    if(arr[R] === 1) onesCount++;

    // Find the current length, more for readability.
    let curLen = R - L + 1;

    // IMPORTANT: The current length minus the onesCount represents the number of 0's replaced with ones.
    // Variable made for readability:
    let numReplacedZeros = curLen - onesCount;

    // If the number of replaced zeros is greater than k (representing the number of zeros we are allowed to skip).
    if(numReplacedZeros > k){

      // If the value at the L pointer is a 1, decrement the onesCount as that one will be leaving the window.
      if(arr[L] === 1) onesCount--;

      // Increment the L pointer by one
      // This DOESN'T shrink the window, but it doesn't allow it to grow!
      L++;

      // Here we are decrementing the current length by one, 
      // setting it to the size it was at the beginning of the loop.
      curLen--;
    }

    // The last thing we will do within our for loop is check to see if the length of the sub-array is 
    // larger than any we have seen. If it is we will set the surrent length to be the largest.
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  // return the length of the longest sub-array.
  return maxLen;
};
```

<br>

- **Comments:**
  - *Pointers:* Two, one to track the left and right side of the sliding window.
  - *Movement:* The sliding window will move one place to the right with each iteration of the for loop. The window will contract when the number of replaced zeros is greater than k.
  - *Variables:* Two, one to track the number of ones within the window, and one to track the max length of the sub-array.

```js
          Important bit to remember:
//========================================================
    let curLen = R - L + 1;
    let numReplacedZeros = curLen - onesCount; // <---- Instead of tracking the replacements (zeros in this case), you track the correct values (ones), then you find the count of the incorrect values in the sub-array by *subtracting* the correct values from the sub-arrays length

    if(numReplacedZeros > k){  // <--------------- Then shrinking the sub-arrays length if the conditions are exceeded
      if(arr[L] === 1) onesCount--;
      L++;
      curLen--; // It is important that the length is properly decremented after the left pointer is moved forward.
    }
    // What happens is that the sliding window will will drag behind the R pointer, only ever increasing when a larger correct sub-string is found.
//========================================================
```

<br>

- **Basic Pattern:**
  1. Create vars to track the largest sub-array, and the number of ones within the window.
  2. Create a pointer to represent the left side of the sliding window.
  3. Iterate over the array once, using a pointer (R) to represent the right side of the sliding window.
     1. If the value at R is 1, add it to the ones count, as it that value be inside the window.
     2. The current length minus the onesCount represents the number of 0s replaced with 1s inside the window.
     3. If the difference is greater than k,
        1. If the current value at the L pointer is a 1, decrement the onesCount as that 1 will be leaving the window when the L pointer is incremented in the next step.
        2. Increment the L pointer by one.
        3. Decrement the current length by one, as one value has just left (this only happens when the difference is greater than k)
     4. If the current length of the window is larger than the current max, make the current value the max.


