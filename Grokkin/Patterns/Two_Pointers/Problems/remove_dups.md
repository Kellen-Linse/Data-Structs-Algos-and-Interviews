# Remove Duplicates (easy)

> **Prompt:** Given an **array of sorted numbers**, **remove all duplicate number instances** from it **in-place**, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).
>  - Move all the unique elements to the beginning of the array and after moving **return the length of the subarray** that has no duplicate in it.

<br>

- **Example:**

```js
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
```

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
  // will always be in it's correct place, so we will start writing at the 1 position.
  // Also, because our conditional is checking the value behind the read pointer in the array,
  // the read pointer will start at 1, so we don't get any out of bounds errors.
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

<br>

- **Comments:**
  - This is a **Two Pointer** only problem.
  - *Pointers:* both pointer start at the 1 position of the array.
  - *Movement:* the pointers will both more towards the end of the array at (most likely) different speeds.
  - This is a good example of a problem that is simplified / made more readable by using a for loop.

<br>

- **Basic Pattern:**
  1. Create a read and write variable starting at the 1 index in the given array.
  2. Iterate over array tracking the read var.
  3. When you find a value with your read variable that meets your condition
  4. Copy that value into your write variable and move the write var up one position. 
  5. Return the write variable, as it is equivalent to the length of the new sub-array you just made.

<br>

 ![removeDups](./../resources/removeDups.jpg)

- **Algorithm:**
  1. Create variable to track where the next non duplicate value will be written to the array, set to 1;
  2. Create for loop with variable to read the value at each position within the array.
     1. Check if the value at read is not equal the the value one prior.
        1. If the value is not equal, we have found our next non-duplicated number, and so we will...
           1. Set the value at our write variable to be the value at our read variable.
           2. increment our write variable by one.
  3. return our write variable, as it will be equal to the length of our non-duplicate sub-array.


