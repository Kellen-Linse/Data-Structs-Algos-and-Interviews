# Two (Three) Pointers

## General Notes

- The **pointers may start in different points, and move in different directions** depending on the problem you are trying to solve.
- Sometimes a **for loop** can be used to make the code more readable.


## Problems

### Pair with Target Sum - TwoSum - (easy)

- **Prompt:** Given an *array of **sorted** numbers* and a *target sum*, find a pair in the array whose sum is equal to the given target. Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
<br>

- **Example:**
```js
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
```
<br>

- **Comments:**
  - *Pointers:* Two, one starts at the beginning and the other at the end of the array.
  - *Movement:* pointers work their way in towards target.
  - This is a good example of a problem that must use a while loop.
<br>

- **Basic Pattern:**
  - Create and assign pointers
  - Loop till pointers touch
    - check if condition is met, return values if so
    - move one pointer if not
  - return a negative response if the value is not found
  - <br>

![twoSum](resources/twoSum.jpg)

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

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**
```js
// No comments
const pair_with_targetsum = function(arr, target_sum) {
  let lPtr = 0;
  let rPtr = arr.length - 1;

  while(lPtr < rPtr){ // O(n)t
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

### Remove Duplicates (easy)

- **Prompt:** Given an *array of sorted numbers*, **remove all duplicate number instances** from it **in-place**, such that each element appears only once. 
  - Move all the unique elements at the beginning of the array and after moving **return the length of the subarray** that has no duplicate in it.
<br>

- **Example:**
```js
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
```
<br>

- **Comments:**
  - *Pointers:* both pointer start at the first (`arr[1]`) index of the array.
  - *Movement:* the pointers will both more towards the end of the array at (most likely) different speeds.
  - This is a good example of a problem that is simplified / made more readable by using a for loop.
<br>


- **Basic Pattern:**
  1. Create a read an write variable starting at the same position.
  2. Iterate over array.
  3. When you find a value with your read variable that meets your condition
  4. Copy that value into your write variable and move it up one position. 
  5. Return the write variable, as it is equivalent to the length of the new sub-array you just made.
 <br>

 ![removeDups](resources/removeDups.jpg)

- **Algorithm:**
  1. Create variable to track where the next non duplicate value will be written to the array, set to 1;
  2. Create for loop with variable to read the value at each position within the array.
     1. Check if the value at read is not equal the the value one prior.
        1. If the value is not equal, we have found our next non-duplicated number, and so we will
        2. Set the value at our write variable to be the value at our read variable.
        3. increment our write variable by one.
  3. return our write variable, as it will be equal to the length of our non-duplicate sub-array.
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**
```js
// No comments
const remove_duplicates = function(arr) {
  let write = 1;

  for(let read = 1; read < arr.length; read++){ // O(n)t
    if(arr[read] !== arr[read - 1]){
      arr[write] = arr[read];
      write++;
    }
  }

  return write;
};

// Comments
const remove_duplicates = function(arr) {

  // Here we are creating a pointer variable to keep track of where we will place 
  // non-duplicated values. Because the array is sorted, the value at the zeroth index
  // will always be in it's correct place, also because out condition is checking the value behind it in the array
  // this variable will start at 1, so we don't get any out of bounds errors.
  let write = 1;

  // Here we are create a for loop with a 'read' variable, this variable will track the current index to evaluate.
  for(let read = 1; read < arr.length; read++){

    // We will check if the value at the read index is NOT a duplicate of the previous value, if true we have
    // found a new value to place in our non-duplicate sub-array. 
    if(arr[read] !== arr[read - 1]){
      // When a value is found we will copy that value into the write index of our array, 
      arr[write] = arr[read];
      // then increment out write pointer.
      write++;
    }
  }

  // Once we have reached the end of our for loop, the value at write will be one more than the last
  // index of our sub-array. Which will be equal to the number of elements in our new sub-array since 
  // arrays are zero indexed.
  return write;
};
```

### Squaring a Sorted Array (easy)

- **Prompt:** Given a **sorted array**, **create a new array** *containing squares of all the numbers of the input array* in the **sorted order**.
<br>

- **Example:**
```js
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
```
<br>

- **Comments:**
  - *Pointers:* Two, one beginning at each end.
  - *Movement:* Both pointers towards each other, and the index of the loop moving in reverse order.
  - The trick with this one is that **the square of a negative number is a positive**, so -3<sup>2</sup> and 3<sup>2</sup> are both equal to 9. **But -3 and 3 will be on the other ends of a sorted array**.
    - Squaring `[-3, 0, 3]` in place will return `[9, 0, 9]` which is no longer sorted. We want the sorted array: `[0, 9, 9]` to be returned.
  - *We will fill our new array in reverse order, working from largest to smallest. Because the largest square values will be at both ends if our input array has negative values in it.*
<br>

- **Basic Pattern:**
  1. Create array
  2. Create pointers
  3. Loop, counting down
  4. find the squares
  5. add the larger of the two squares to the new array
  6. decrement or increment the pointer which held the value which lead to the larger square, towards the other pointer.
 <br>

- **Algorithm:**
  1. Create new array to hold the squared values.
  2. Create pointers and set them equal to both ends of the array.
  3. Loop over our input array once **from beginning to end**.
  4. Create two variables and set them equal to the square of the value at each pointer.
  5. Copy to the new array the **greater** of the two squared values.
  6. Increment or decrement the respective pointer, towards the other pointer.
  7. Return the new array after the loop finishes.
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(n)` // building the return array

- **Code:**
```js
// No comments
const make_squares = function(arr) {
  
  const squareArr = []; // O(n)s
  let lPtr = 0;
  let rPtr = arr.length - 1;

  for(let i = arr.length - 1; i >= 0; i--){ // O(n)t
    let lVal = arr[lPtr]**2;
    let rVal = arr[rPtr]**2;

    if(lVal > rVal){
      squareArr[i] = lVal;
      lPtr++;
    } else {
      squareArr[i] = rVal;
      rPtr--;
    }
  }

  return squareArr;
};

// Comments
const make_squares = function(arr) {

  // Here we create the arr that will hold our squared values
   const squareArr = []; 

  // Create two pointers 
  // set them such that they will begin on either side of the array.
  let lPtr = 0;
  let rPtr = arr.length - 1;

  // Create a for loop using the input array length and moving FROM END TO BEGINNING,
  // because our output array will be the same length.
  for(let i = arr.length - 1; i >= 0; i--){ 

    // Here we are creating two variables that hold the square or the values at each pointer.
    let lVal = arr[lPtr]**2;
    let rVal = arr[rPtr]**2;

    // Because we are creating a sorted array, and because we are working backwards, 
    // we push the GREATER of the two values in our array.
    // We then move our respective pointer towards the other.
    if(lVal > rVal){
      squareArr[i] = lVal;
      lPtr++;
    } else {
      squareArr[i] = rVal;
      rPtr--;
    }
  }

  // After the loop we return our new array that has been filled with the squared values.
  return squareArr;
};

```

### Triplet Sum to Zero (medium)

- **Prompt:** Given an **array of unsorted numbers**, **find all unique triplets** in it that **add up to zero**.
<br>

- **Example:**
```js
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
```
<br>

- **Comments:**
  - *Pointers:* 
  - *Movement:* 
  - 
<br>

- **Basic Pattern:**
  1.
 <br>

- **Algorithm:**
  1.
<br>

- **Big O:**
  - Time: `O(n^2)`
  - Space: `O(n)`

- **Code:**
```js
// No comments
const search_triplets = function(arr) {
  arr.sort(); // O(n log n)
  
  triplets = []; // O(n)s

  for(let i = 0; i < arr.length-2; i++){  //O(n)t
    let target = -arr[i];
    let lPtr = i+1;
    let rPtr = arr.length-1;

    while(lPtr < rPtr){ //O(n)t
      const sum = arr[lPtr] + arr[rPtr];

      if(sum === target){
        triplets.push([ arr[i], arr[lPtr], arr[rPtr] ]);
        lPtr++;
      }

      if(sum < target){
        lPtr++;
      } else {
        rPtr--;
      }
    }
  }

  return triplets;
};

// Comments
const search_triplets = function(arr) {

  // To begin we sort our array, this will allow us to use two pointer method, effectively dropping an order from our run time.
  arr.sort();

  // Here we are creating a new array to hold our triplet values that we will return at the end.
  triplets = [];

  // Here we iterate over our array evaluating each index until two less than the length, because we are looking
  // for triplets, we do not need to evaluate passed the third to last, as those three values will make up our last triplet.
  for(let i = 0; i < arr.length-2; i++){

    // To begin we create the target for our twoSum technique out of the value at the current index of the loop.
    // Because we are looking for a triplet that adds to zero, X + Y + Z == 0, or Y + Z == −X
    // our target will be the negation of the value at the current index.
    let target = -arr[i];

    // Once we have a target, we can run a twoSum style algorithm, for each element in our array 
    // taking O(n) time.

    // We begin th twoSum potion of the algo by creating one pointer at one greater than 
    // the current index of the loop and another at the last index in the array.
    let lPtr = i+1;
    let rPtr = arr.length-1;

    // We loop while the pointers are not touching
    while(lPtr < rPtr){
      const sum = arr[lPtr] + arr[rPtr];

      if(sum === target){

        // The only difference is that here, when a target is found, 
        // we do not return, we push the current indices to the triplets array.
        triplets.push([ arr[i], arr[lPtr], arr[rPtr] ]);

        // We step over the lPtr so as not to have duplicate values
        lPtr++;
      }

      // Here we are moving the pointers towards each other
      if(sum < target){
        lPtr++;
      } else {
        rPtr--;
      }
    }
  }

  return triplets;
};
```