# Minimum Window Sort (medium)

> **Prompt:** Given an **array**, find the **length** of the **smallest subarray** in it *which when sorted will sort the whole array*.
<br>

- **Example:**

```js
Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
```

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No Comments
var findUnsortedSubarray = function(arr) {

    let L = 0, R = arr.length-1;
    let start = 0,  end = -1;
    let minR = Infinity, maxL = -Infinity;

    while(L < arr.length){

        arr[L] >= maxL ? maxL = arr[L] : end = L;
        arr[R] <= minR ? minR = arr[R] : start = R;

        L++;
        R--;
    }

    return end - start + 1;
};

//Comments

var findUnsortedSubarray = function(arr) {
    // Create pointers at each end of the arrays
    let L = 0, 
        R = arr.length-1;

    // Create pointers that will point to the beginning and end of the unsorted portion of the array
    // End is set to -1, this will only come into play when the array is sorted and therefore the 
    // length of the unsorted portion of the array is zero. Because of the way the return is set up with a +1, it will balance out to 0.
    let start = 0,  
        end = -1;

    // Create a minR and maxL variable, 
    // minR will track the lowest value the R has seen on it's way down the array.
    // maxL will track the highest value the L has seen on it's way up the array.
    // We start the variables as +/- Infinity to maintain the pattern in the loop
    // No matter what the first value for each, it will be larger or smaller respectively.
    let minR = Infinity, 
        maxL = -Infinity;

    // Create a while loop that will run until the left or right pointer (pick one, they will move at the same rate) 
    // reaches the opposite side. This could be done as a for loop as well, but it helps to 
    // illustrate what is going on when it is a while loop imo.
    while(L < arr.length){

        // What we need to do is find the last time in the array that a value is out of order,
        // Working up from the beginning for the end of the unsorted portion, and 
        // Working down from the end for the start of the unsorted portion.

        // In a sorted array, as you iterate from left to right (like the L pointer does), 
        // you should expect to continually find the next number to be equal to or greater than the last.
        // If this is the case set the maxL variable to that number.
        // If you find a number that is less than the largest number you have seen, it means you have found 
        // a number that is out of order.
        // Each time you find an out of order number, set the end pointer to that index, as you continue
        // If the numbers keeps increasing until the end, that portion of the array is sorted, therefore the
        // last time you set the end pointer it will point to the end of the unsorted portion of the array.
        arr[L] >= maxL ? maxL = arr[L] : end = L;

        // The R does the exact opposite of the L. It moves from the end of the array in descending order
        // looking for values in the array that are out of order given that when you move right to left, 
        // each value in a sorted array should be less than the one previous. 
        // Each time we find one of these out of order values, we will set the start pointer to be the current R value. 
        // The last time we set this value will be the start of the unsorted portion of the array. 
        arr[R] <= minR ? minR = arr[R] : start = R;


        // For each time through the loop we will increment and decrement
        // the L and the R, working them from one end of the array to the other.
        L++;
        R--;
    }

    // When we reach the end we will have the end and the start of the unsorted portion of the array
    // but the problem wants to know the LENGTH of that portion. Because arrays are zero indexed, we need to add one 
    // after we subtract the end value from the start to get the length. 
    // As mentioned above, if the array is fully sorted or empty, we want to return 0, as that is the length of the 
    // unsorted portion of the array, in both of those cases end and start will not have been updated 
    // You would expect for both end and start to be zero in this case, however, because we have to adjust 
    // to find the length of the sub-array, we start the end at -1 to counter this and return zero
    return end - start + 1;
};
 ```

- **Alternative:**

```js
var findUnsortedSubarray = function (arr) {

  let start = null; 
  let end = null;

  let L = 0;
  let R = arr.length - 1;

  while(L < R){

    for(let i = L; i <= R; i++){
      if(start === null && arr[i] < arr[L]){
        start = L;
      }
      if(end === null && arr[i] > arr[R]){
        end = R;
      } 
    }

    if(start !== null && end !== null) return end - start + 1; 
    if(start === null) L++;
    if(end === null) R--;
  }

  return arr[0] > arr[arr.length-1] ? arr.length : 0;
};
```

<br>

- **Comments:**
  - This is a **Two plus Two Pointer** problem.
  - *Pointers:* Four, two starting at the beginning and end of the input array, two to mark the start and end of the unsorted sub-array.
  - *Variables* Two, one to hold the largest value seen by the L, and one to hold the smallest value seen by the R
  - *Movement:* The L will work right and the R will work left, they will **NOT** stop until they reach the other side, they will cross each other.
  - Instead of searching for the first instance of an unsorted value in the array, you need to search for the last, so, you start from the beginning looking for the end and start at the end looking for the beginning.
  - This is one of those problems where you really must understand and think deeply about the properties of the data structure you are working with and the conditions put upon it (sorted in this case).
    - E.g. A value in a sorted array will always be greater or equal to the value that came before it.
  - Another important trick is the use of + and - Infinity, allowing for the variables to effectively not be set yet still perform properly in a comparison the first time around.


<br>

- **Basic Pattern:**
  1. Move L right and R left, L looking for values not in ascending order, and the R looking for values not in descending order.
  2. Assign the end and start pointer respectively every time an unsorted value is found.
  3. return end minus start plus one after each index is evaluated once.


 <br>

- **Algorithm:**
  1. Create a L and R pointer to evaluate the indices in ascending and descending order.
  2. Create a start and end pointer to point to the beginning and end of the unsorted section, set start to 0, end to -1.
  3. Create a minR variable set to Infinity and a maxL variable set to -Infinity.
  4. Loop over each index in the array once.
     1. If the value at the L is greater than the maxL, set maxL to that value, if not set the end pointer to be equal to the L (found unsorted value).
     2. If the value at the R is less than the minR, set minR to that value, if not set the start pointer to be equal to the R (found unsorted value).
     3. Increment L, decrement R.
  5. Return the end pointer minus the start pointer, add one to the difference to find the length.