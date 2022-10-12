# Maximum Sum Subarray of Size K (easy)

- **Prompt:** Given an *array of positive numbers* and a *positive number: **k***, find the maximum sum of any contiguous subarray of size ‘k’.

<br>

- **Example:**

```js
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
```

<br>

- **Brute Force:** A basic brute force solution will be to calculate the sum of all ‘k’ sized subarrays of the given array to find the subarray with the highest sum.
  - **O(n * k)** 

<br>

- A sliding window approach will save us from re-calculating the sum of the overlapping part of the sliding window. 

- **Optimal Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

- **Code:**

```js
// No comments
const max_sub_array_of_size_k = function(k, arr) {
  if(!Array.isArray(arr) || arr.length < k) return null;
  

  let maxSum = -Infinity;
  let curSum = 0;
  let L = 0;

  for(let R = 0; R < arr.length; R++){
    curSum += arr[R];
    if(R >= k)
      curSum -= arr[L];
      L++;
      maxSum = maxSum < curSum ? curSum : maxSum;
    }
  }
  return maxSum;
};

// Comments
const max_sub_array_of_size_k = function(k, arr) {
  // Gaurd Clauses
  if(!Array.isArray(arr) || arr.length < k) return null;
  
  // Variables
  let maxSum = -Infinity;
  let curSum = 0;

  // Pointer
  let L = 0;

  // Logic

  // Iterate over the array once 
  for(let R = 0; R < arr.length; R++){

    // Add the value at the R index to the current sum
    curSum += arr[R];

    // If the R pointer is greater than the size of the the contiguous sub-array, k
    // subtract the value at the L pointer from the current sum, then increment the L pointer.
    if(R >= k){
      curSum -= arr[L];
      L++;
      // Set the maxSum to be the greater value between maxSum and curSum
      maxSum = maxSum < curSum ? curSum : maxSum;
    }
  }

  // Return the maximun sum
  return maxSum;
};
```

- **Comments:**
  - *Pointers:* Two, one pointer to point to the start (L) of the sliding window, one to point to the end (R).
  - *Movement:* The (R) pointer will move to the left once with each iteration. Once the window size is reached, both the (L) and (R)pointers will increment by one each iteration, while the (R) pointer ris less than the length of the array.
  - *Variables:* Two, one to track the current sum (curSum) of the window and one to track the max sum (maxSum) of any window. 
  - This is a **Fixed Window** type of sliding window problem.
  - This same technique can be used to find things like the largest/smallest sum, difference, product, average, etc.. of a given fixed size sub-array.

<br>

- **Basic Pattern:**
  1. build up a window, adding the values within the window as it builds.
  2. slide window across the array, adding the entering value on the right side of the window, and subtracting the value exiting the window.
  3. if the total sum in the window is greater than the max known sum set the current value to the max value.

 <br>

- **Algorithm:**
  1. Create variables to track the max sum and the current sum.
  2. Create a pointer to track the end of the sliding window.
  3. Create a for loop tracking the start variable, incrementing it by one each time until it hits the end of the loop.
     1. add the current value at the start index to the current sum variable.
     2. If the start variable is smaller than the length of the sub-array we have been asked to find,
        1. subtract the value at the end pointer from the current sum variable.
        2. increment the end variable.
        3. if the value of the current sum is greater than the max sum, set the max sum to equal the current sum.
  4. return the max sum variable.


