# Triplet Sum to Zero (medium)

> **Prompt:** Given an **array of unsorted numbers**, **find all unique triplets** in it that **add up to zero**.

<br>

- **Example:**

```js
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
```

<br>

- **Big O:**
  - Time: `O(n^2)`
  - Space: `O(n)` dependant on the sorting algo

<br>

- **Code:**

```js
// No comments
const search_triplets = function(arr) {  
    if(arr.length < 3) return [];
    let resultsArr = [];

    arr.sort((a, b) => a - b);  
    
    for(let i = 0; i < arr.length && arr[i] <= 0; i++){
        if(arr[i] !== arr[i-1]) twoSum(i, arr, resultsArr);
    }
    
    return resultsArr;
};


function twoSum(idx, inputArr, resArr){
    let L = idx + 1;
    let R = inputArr.length - 1;
    let target = inputArr[idx] * -1;
    
    while(L < R){
        const sum = inputArr[L] + inputArr[R];
        
        if(sum < target){           
            L++;  
        } else if (sum > target){
            R--;
        } else {
            resArr.push([ inputArr[idx], inputArr[L], inputArr[R]]);
            L++;
            R--;
            while(inputArr[L] === inputArr[L-1] && L < R){
                L++;
            }
        }      
    }
}

// Comments
const search_triplets = function(arr) {
    // If there is less than 3 values within the array we do not have enough values to make a triplet.
    if(arr.length < 3) return [];

    // Create an array that will store our triplet values to return 
    let resultsArr = []; //O(n)s
    
    // We first sort the array, this will allow us to then run a twoSum style algorithm later on
    arr.sort((a, b) => a - b); // O(n log n)

    // We will iterate over our input array, until there is only three values left, or
    // until the current value in the array is greater than or equal to zero ( arr[i] <= 0 ),
    // this is because two larger numbers cannot add to a smaller number and all numbers
    // in a sorted array after 0 are larger.
    for(let i = 0; i < arr.length - 2 && arr[i] <= 0; i++){ // O(n)t
        
        // Here we are calling a twoSum algorithm to search for the pair of values that will add to i to make zero.
        // We do not want duplicates within our array, so we will check before.
        if(arr[i] !== arr[i-1]) twoSum(i, arr, resultsArr); // O(n)t
    }
    
    // Once we have iterated over our array we return any triplets we have found.
    return resultsArr;
};

// This function is essentially the "Pair with Target Sum" problem from above
// Except we are:
  // 1. storing any solutions we find.
  // 2. skipping over duplicated values within our array.
function twoSum(idx, inputArr, resArr){

    // Create pointers starting at one more than the current index of for loop in the search_triplets function 
    // and one at the last index of the array.
    let L = idx + 1;
    let R = inputArr.length - 1;

    // Here we define the target we are searching for
    // We are searching for a pair that when added to the value at the index of the for loop will sum to 0,
    // so the target needs to be the negation of that value. 
    // we are searching for triplets that sum to 0, 0 = X + Y + Z is equal to -X = Y + Z, where X is the current value in the input array. 
    let target = inputArr[idx]  * -1;
    
    while(L < R){ // O(n)t
        // Here we create a sum variable for readability
        const sum = inputArr[L] + inputArr[R];
        
        // We check the current sum against the target
        // Moving the whichever pointer helps bring us closer to the sum.
        if(sum < target){           
            L++;  
        } else if (sum > target){
            R--;
        } else {
            // When we have found a sum that matches our target, we place all the values into an array and
            // push that array to our results array.
            resArr.push([ inputArr[idx], inputArr[L], inputArr[R]]);

            // Then, because we do not want duplicates, we must move both pointers from their current positions.
            L++;
            R--;

            // We will continue moving the L up as long as we find duplicate values at that pointer
            while(L < R && inputArr[L] === inputArr[L-1]){
                L++;
            }
        }      
    }
}
```

<br>

- **Comments:**
  - This is a **Three Pointer** problem that uses **Sorting** and an **Extra (return) Array.**
  - *Pointers:* The first left to right, increasing order, then two pointers one at each end of the array past that first index.
  - *Movement:* The first to iterate over the array, the two pointers moving towards each other.
  - Remembering that you need to sort and **avoiding duplicates** is what makes this question more difficult.


<br>

- **Basic Pattern:**
  1. Sort the input array
  2. create array to hold results values
  3. iterate up to end -or- zero in the input array
  4. call twoSum algo for each element in the array, skip any duplicates
  5. return the results array


 <br>

- **Algorithm:**
  1. Sort the input array
  2. create array to hold results values
  3. iterate up to end or zero in array
  4. Check for duplicated value, if not, call twoSum
     1. Create pointers at i+1 and last index
     2. Define target as negation of the value currently at i
     3. Create a loop that runs while the lower pointer is less than the higher pointer
     4. Move one of two pointers accordingly if the sum of the values each pointer is more or less than the target
     5. Or, if a match is found, create a new array with the values at i and each pointer, then push it to the results array
        1. then increment the lower pointer and decrement the higher pointer to avoid duplicates
        2. continue incrementing the lower pointer if it is a duplicate of the last value
  5. return the results array


