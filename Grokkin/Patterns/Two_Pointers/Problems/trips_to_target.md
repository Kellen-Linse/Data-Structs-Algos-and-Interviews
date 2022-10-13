# Triplet Sum Close to Target (medium) 

> **Prompt:** Given an **array** of **unsorted numbers** and a **target number**, *find a triplet in the array whose sum is as **close to the target number** as possible*, **return the sum** of the triplet. 
> - If there are *more than one such triplet, return the sum of the triplet with the smallest sum.*
<br>

- **Example:**

```js
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
```

- **Big O:**
  - Time: `O(n^2)`
  - Space: `O(n)` dependant on the sorting algo

- **Code:**

```js
// No comments
const triplet_sum_close_to_target = function(arr, target) {

  arr.sort((a, b) => a - b); // O(n log n)

  let smallest;
  let closest = Infinity;
    
  for(let i = 0; i < arr.length - 2; i++){ // O(n) -> O(n^2)
    let L = i + 1;
    let R = arr.length - 1;

    while(L < R){ // O(n) 
      const sum = arr[L] + arr[R] + arr[i];
      let dist = Math.abs( target - sum );

      if(dist < closest){
        closest = dist;
        smallest = sum;
      } else if ( dist === closest ){
          if(sum < smallest) smallest = sum;
      }

      if(sum < target){
        L++;
      } else {
        R--;
      }
    }
  }

  return smallest;
}

// Comments
const triplet_sum_close_to_target = function(arr, target) {

  // Sorting helps use two pointer technique, lowering Big 0
  arr.sort((a, b) => a - b);

  // We need to track how close a sum is, and what the smallest sum of close values are.
  let smallest; // Will be set before it is ever read.
  let closest = Infinity;
  
  // We will iterate over our input array until we reach the last three indices.
  for(let i = 0; i < arr.length - 2; i++){
    
    // create two pointers for twoSum
    let L = i + 1;
    let R = arr.length - 1;

    while(L < R){
      const sum = arr[L] + arr[R] + arr[i];

      // Finding the absolute value of the target - sum tells us the distance from the target
      // Because the values may be negative we need to use Math.absolute
      let dist = Math.abs( target - sum );

      // Check if the current distance is closer than any distance found so far,
      // If we have found a new closest...
      if(dist < closest){
        // Set our new closest
        // We also must RESET the smallest, 
        // since we have found a new closest, the only sum so far is the smallest sum.
        closest = dist;
        smallest = sum;
      } 
      else if ( dist === closest ){
          // If it is equally close, we need to save the smaller of the two sums
          if(sum < smallest) smallest = sum;
      }

      // Keep trying to find a closer value,
      // move one of our pointers to try to get closer to the sum
      if(sum < target){
        L++;
      } else {
        R--;
      }
    }
  }

  // We return the sum of the triplet closest to to sum
  return smallest;
}
```

<br>

- **Comments:**
  - This is a **Three Pointer** problem that uses **Sorting**. 
  - *Pointers:* One iterating over the array, two at each end of the remaining array after the first index
  - *Movement:* The first moving left to right, increasing, the two moving towards each other looking for a target value
  - You need to keep track of the closest, and the smallest sum, but when a new closest is found the smallest sum must be redefined!
  - You must use Math.abs(val) to find the how far off the current sum is from the target.

<br>

- **Basic Pattern:**
  1. Sort the input array
  2. create variables to track the smallest sum and the closest sum to the target
  3. Iterate over the array running a twoSum style algorithm to find the closest sum to the target
  4. return the smallest sum

 <br>

- **Algorithm:**
  1. Sort the input array
  2. create variables to track the smallest sum and the closest sum to the target
  3. Iterate over the array running a twoSum style algorithm to find the closest sum to the target
     1. Create pointers at one more than the current index and the last index
     2. Loop while the left pointer is less than the right pointer
        1. add the values at each pointer to find the current sum
        2. find the absolute value (distance) of the target minus the current sum
        3. Check to see if the current distance is closer to the closest,
        4. if we have found a new closest
           1. set the closest to the current distance 
           2. set the smallest sum to be the the current sum
        5. else if the distance is equal
           1. check if the current sum is less than the saved sum, if so, set it to be the smallest sum.
        6. move one of the pointers in the direction so as to bring the current sum closer to the target
  4. return the smallest sum variable.


