# Smallest Subarray With a Greater Sum (easy)

> **Prompt:** Given an **array of positive integers** and a number ‘S,’ find the **length** of the **smallest contiguous subarray** whose *sum is greater than or equal to ‘S’*. 
>  - **Return 0 if no such subarray exists.**

<br>

- **Example:**

```js
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].
```

<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null;
    if(s.length === 0 || arr.length === 0) return 0;

    let L = 0; 
    let smLen = Infinity;
    let curSum = 0; 

    for(let R = 0; R < arr.length; R++){ // O(n), technically O(2n) with while loop
        curSum += arr[R];
        while(curSum >= s){
            const curLen = R - L + 1;
            if(curLen < smLen) smLen = curLen;
            curSum -= arr[L];
            L++;
        }
    }
    return smLen === Infinity ? 0 : smLen;
};

// Comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null

    // Pointer var
    let L = 0; // Left side of sliding window

    // Tracker vars
    let smLen = Infinity; // Smallest length, set to infinity so that any length will be smaller.
    let curSum = 0; // current sum in window

    // Logic
    for(let R = 0; R < arr.length; R++){

        // Add the value at the R pointer to the current sum
        curSum += arr[R];

        // So long as the current sum is greater than or equal to the target
        while(curSum >= s){

            // Here we are checking to see if the sum in our window is greater than the target 's'.

            // find the current length of the window by subtracting the current window's R index from it's L index, then adding one to account for the array being zero indexed
            const curLen = R - L + 1;

            // If the current length is smaller than the smallest known length, set that to the smallest length
            if(curLen < smLen) smLen = curLen;

            // Here we are shrinking the window
            // Subtract the value at the L pointer from the current sum
            curSum -= arr[L];

            // Increment the L pointer
            L++;
        }
    }

    // Finally, we return the smallest known length, if no length is found return 0
    return smLen === Infinity ? 0 : smLen;
};
```

<br>

- **Comments:**
  - **This is a Dynamic Window type of sliding window problem.**
  - *Pointers:* Two, one pointer to point to the right side (R) of the sliding window, one two point to the left side of the window (L).
  - *Movement:* The R pointer will move to the left by one each iteration, adding the values at each index to a variable (curSum), then, once the curSum greater than the target (s) is reached, the window will shrink while the curSum is greater than the target, moving the L pointer towards the R pointer, and subtracting the value at L at each iteration.
  - *Variables:* Two, one to track the current sum (curSum) in the window, one to track the smallest length (smLen) of the sub-array where the sum is gt or et the target.
  - This same technique can be used in problems where you must find the largest or smallest sub-array given some condition.

<br>

- **Basic Pattern:**
  1. build up a window
  2. slide window across the array
  3. add the value at the R pointer to the current sum within the window
  4. while the the sum of the values in the window is greater or equal to the target value
     1. Find the length of the the window
     2. if it is smaller than the smallest known window length, set it's length to be the smallest
     3. subtract the value at the L pointer from the current sum
     4. increment the L pointer
  5. return the smallest length

<br>

- **Algorithm:**
  1. Create variables to track the smallest length of array that meets the condition, the current sum of the values within the window, and one to point to the L of the array.
  2. Create a R vaiable to track the right side of the window and loop while R is less than the array length
  3. Add the value at the R pointer to the current sum.
  4. Create a while loop that will run so long as the current sum is greater than or equal to the target.
     1. Check to see if the sum in our window is greater than the target
        1. If the current length of the window is less than the smallest known length set that length to be the smallest.
     2. Subtract the value at the L index from the current sum.
     3. increment the L pointer.
  5. Finally, we return the smallest known length, if no length is found return 0.

