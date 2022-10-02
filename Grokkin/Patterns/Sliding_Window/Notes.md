# Pattern: Sliding Window 

<hr>

## General Notes

- Sliding windows allows us to avoid doing repeated calculations within the window.
- The sliding window technique is often used we are asked to **find or calculate something among all the sub-arrays (or sub-lists) of a given size**.
  - Example: `Given an array, find the average of each subarray of ‘K’ contiguous elements in it.`
    - The brute force approach to this problem would result in an `O(n * K)` run time.
    - The sliding window technique can be applied to this problem to reduce the run time to `O(n)`.
- "Overlapping sub-arrays"
<br>

- **In looking for a more efficient solution, first define the brute force approach, then find the inefficiencies.**
    - This may give you a hint as to where improvements can be made.
<br>

- In some problems the size of the window is fixed, but in many problems, **the size of the sliding window is NOT fixed**. 
  - **Fixed Sized Sliding Window:**
    - Problems where we need to "find the >insert condition here< of each subarray of ‘K’ contiguous elements in it.
  - **Dynamic Sized Sliding Window:**
    - *We have to expand or shrink the window based on the problem constraints.*
    - Problems where we need to find the **largest or smallest** sub-array that matches some condition.
    - **Ask under what condition do I need to expand? and under what condition do I need to contract??**
      - "Ok, I've expanded until I've met my condition, can I now contract and still meet that condition?"
<br>

- If you are looking for a smallest sub-array, there will always be a base case of 1, if you find a sub-array then you can return early, as you cannot do better than a sub-array of length one.
<br>

- Don't forget when you are finding the length of a sub-array you need to account for arrays being **zero indexed**, that means **you need to add one** when subtracting the start from the end (assuming that the start is greater than the end).

## Problems


### Maximum Sum Subarray of Size K (easy)

- **Prompt:** Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
<br>

- **Example:**

```js
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
```
<br>

- **Comments:**
  - *Pointers:* Two, one pointer to point to the start of the sliding window, one two point to the end.
  - *Movement:* The first pointer will move to the left, once the window size is reached, both pointers will increment, by one each loop, until the start value reaches the end of the array.
  - *Variables:* Two, one to track the current sum of the window and one to track the max sum of any window. 
  - This is a **Fixed Window** type of sliding window problem.
  - This same technique can be used to find things like the largest/smallest sum, difference, product, average, etc.. of a given fixed size sub-array.
<br>

- **Basic Pattern:**
  1. build up a window
  2. slide window across the array
  3. if the value in the window is greater than the max value set the current value to the max value.
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
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const max_sub_array_of_size_k = function(k, arr) {

  let maxSum = -Infinity;
  let curSum = 0;
  let end = 0;

  for(let start = 0; start < arr.length; start++){ // O(n)
    curSum += arr[start];

    if(start >= k){
      curSum -= arr[end];
      end++;
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
  let end = 0;

  // Logic

  // Iterate over the array once 
  for(let start = 0; start < arr.length; start++){

    // Add the value at the start index to the current sum
    curSum += arr[start];

    // If the start pointer is greater than the size of the the contiguous sub-array, k
    // subtract the value at the end pointer from the current sum, then increment the end pointer.
    if(start >= k){
      curSum -= arr[end];
      end++;

      // Set the maxSum to be the greater value between maxSum and curSum
      maxSum = maxSum < curSum ? curSum : maxSum;
    }
  }

  // Return the maximum sum
  return maxSum;
};
```


<hr>

### Smallest Subarray With a Greater Sum (easy)

- **Prompt:** Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
<br>

- **Example:**

```js
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].
```
<br>

- **Comments:**
  - *Pointers:* Two, one pointer to point to the start of the sliding window, one two point to the end.
  - *Movement:* The start pointer will move to the left, then, once a window sum greater than the target value is reached, the window will be shrunk, moving the end pointer towards the start pointer.
  - *Variables:* Two, one to track the current sum in the window, one to track the smallest length of sub-array where the sum is gt or et the target.
  - This is a **Fixed Window** type of sliding window problem.
  - This same technique can be used in problems where you must find the largest or smallest sub-array given some condition.
<br>

- **Basic Pattern:**
  1. build up a window
  2. slide window across the array
  3. add the value at the start pointer to the current sum within the window
  4. if the sum of the values in the window is greater or equal to the target value set the current value to the max value.
  5. while the the sum of the values in the window is greater or equal to the target value
     1. Find the length of the the window
     2. if it is smaller than the smallest known window length, set it's length to be the smallest
     3. subtract the value at the end pointer from the current sum
     4. increment the end pointer
  6. return the smallest length
 <br>

- **Algorithm:**
  1. Create variables to track the smallest length of array that meets the condition, the current sum of the window, and to point to the end of the array.
  2. Create a start to track the start of the window and loop while start is less than the array length
  3. Add the value at the start pointer to the current sum.
  4. Create a while loop that will run so long as the current sum is greater than or equal to the target.
     1. Check to see if the sum in our window is greater than the target
        1. If the current length of the window is less than the smallest known length set that length to be the smallest.
     2. Subtract the value at the end index from the current sum.
     3. increment the end pointer.
  5. Finally, we return the smallest known length, if no length is found return 0.
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null

    let end = 0; 
    let smLen = Infinity; 
    let curSum = 0; 

    for(let start = 0; start < arr.length; start++){ // O(n), technically O(2n) with while loop
        curSum += arr[start];
        while(curSum >= s){
            const curLen = start - end + 1;
            if(curLen < smLen) smLen = curLen;
            curSum -= arr[end];
            end++;
        }
    }
    return smLen;
};

// Comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null

    // Pointer var
    let end = 0; // end of sliding window

    // Tracker vars
    let smLen = Infinity; // Smallest length
    let curSum = 0; // current sum

    // Logic
    for(let start = 0; start < arr.length; start++){

        // Add the value at the start pointer to the current sum
        curSum += arr[start];

        // So long as the current sum is greater than or equal to the target
        while(curSum >= s){

            // Here we are checking to see if the sum in our window is greater than the target 's'.

            // find the current length of the window by subtracting the current window's start from it's end 
            // then adding one to account for the array being zero indexed
            const curLen = start - end + 1;
            // If the current length is smaller than the smallest known length, set that to the smallest length
            if(curLen < smLen) smLen = curLen;

            // Here we are shrinking the window

            // Subtract the value at the end pointer from the current sum
            curSum -= arr[end];

            // Increment the end pointer
            end++;
        }
    }

    // Finally, we return the smallest known length, if no length is found return 0
    return smLen === Infinity ? 0 : smLen;
};
```