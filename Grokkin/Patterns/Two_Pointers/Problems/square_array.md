# Squaring a Sorted Array (easy)

> **Prompt:** Given a **sorted array**, **create a new array** *containing squares of all the numbers of the input array* in the **sorted order**.

<br>

- **Example:**

```js
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9] // Notice that these values don't line up from array to array!
```

>   - The trick with this one is that **the square of a negative number is a positive**, so -3<sup>2</sup> and 3<sup>2</sup> are both equal to 9. **But -3 and 3 will be on the other ends of a sorted array**.

<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(n)` // building the return array

<br>

- **Code:**

```js
// No comments
const make_squares = function(arr) {
  
  const squareArr = []; // O(n)s
  let L = 0;
  let R = arr.length - 1;

  for(let i = arr.length - 1; i >= 0; i--){ // O(n)t
    let lVal = arr[L]**2;
    let rVal = arr[R]**2;

    if(lVal > rVal){
      squareArr[i] = lVal;
      L++;
    } else {
      squareArr[i] = rVal;
      R--;
    }
  }

  return squareArr;
};

// Comments
const make_squares = function(arr) {

  // Here we create the arr that will hold our squared values
   const squareArr = []; 

  // Create two pointers (L) (R)
  // set them such that they will begin on each side of the array.
  let L = 0;
  let R = arr.length - 1;

  // Create a for loop using the input array length and moving FROM END TO BEGINNING,
  // this is because our output array will be the same length, and we are working from largest numbers to smallest.
  for(let i = arr.length - 1; i >= 0; i--){ 

    // Here we are creating two variables that hold the square of the values at each pointer.
    let lVal = arr[L]**2;
    let rVal = arr[R]**2;

    // Because we are creating a sorted array, and because we are working backwards, 
    // we push the GREATER of the two values into our return array.
    // We then move the respective pointer towards the other.
    if(lVal > rVal){
      squareArr[i] = lVal;
      L++;
    } else {
      squareArr[i] = rVal;
      R--;
    }
  }

  // After the loop we return our new array that has been filled with the squared values.
  return squareArr;
};
```

- **Comments:**
  - This is a **Two Pointer** problem that also makes use of an **extra array**.
  - *Pointers:* Three, one at the beginning and one at the end, one more in the return array starting at the end.
  - *Movement:* Both pointers towards each other, and the index of the loop moving in reverse order.
  - The trick with this one is that **the square of a negative number is a positive**, so -3<sup>2</sup> and 3<sup>2</sup> are both equal to 9. **But -3 and 3 will be on the other ends of a sorted array**.
    - Squaring `[-3, 0, 3]` in place will return `[9, 0, 9]` which is no longer sorted. We want the sorted array: `[0, 9, 9]` to be returned.
  - *We will fill our new array in reverse order, working from largest to smallest. Because the largest square values will be at both ends if our input array has negative values in it.*

<br>

- **Basic Pattern:**
  1. Create return array and pointers
  2. Loop, counting down
  3. Find the squares and add the larger of the two squares to the new array
  4. decrement or increment the pointer which held the value which lead to the larger square, towards the other pointer.
  5. Add the larger of the two squares to the return array and decrement that arrays pointer.
  6. Return the return array.

 <br>

- **Algorithm:**
  1. Create new array to hold the squared values.
  2. Create pointers and set them equal to both ends of the array.
  3. Loop over our input array once **from beginning to end**.
  4. Create two variables and set them equal to the square of the value at each pointer.
  5. Copy to the new array the **greater** of the two squared values.
  6. Increment or decrement the respective pointer, towards the other pointer.
  7. Return the new array after the loop finishes.