# Arrays

## Intro

### Max Consecutive Ones

- **Given a binary array nums, return the maximum number of consecutive 1's in the array.**

```js 
var findMaxConsecutiveOnes = function(nums) {
    
    // Create variables to track to current count and the max count
    let count = 0;
    let maxCount = 0;
    
    // iterate over the array once
    for(let i = 0; i < nums.length; i++){
        
        // check if the number is equal to one, if so increment count, if not, reset count.
        nums[i] === 1 ? count++ : count = 0;
        
        // if it is true that the count is greater than maxCount, set maxCount to be count.
        if(count > maxCount) maxCount = count;
    }
    
    // return maxCount
    return maxCount;
};
```

#### Find Numbers in Array with an Even Number of Digits

- **Given an array nums of integers, return how many of them contain an even number of digits.**

```js
var findNumbers = function(nums) {
    
    // create a variable to track the number of values with an even number of digits
    let evenCount = 0;
    
    // iterate over the array once
    for(let i = 0; i < nums.length; i++){
        
        // create a variable to track the current number 
        // and the count for a given digit
        let currentNum = nums[i];
        let digitCount =  0;
        
        // find the count of the current digit
        while(currentNum >= 1){
            currentNum = currentNum / 10;
            digitCount++;
        }
        
        // if the current digit count is even, increase to evenCount by 1
        if(digitCount % 2 === 0) evenCount++;
    }
    
    return evenCount;
};
```

#### Squares of a Sorted Array

- **Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.**
<br>
- This one can be a bit tricky, as it requires two pointers, and a comparison.

```js
var sortedSquares = function(nums) {
    // create a results array
    let resultsArr = [];
    
    //create a left and right pointer
    let lPtr = 0;
    let rPtr = nums.length - 1;
    
    // starting at the end of the array and decrimenting , tracking i
    for(let i = nums.length - 1; i >= 0; i--){   
        // check if the value of lPtr^2 > value of rPtr^2
         // Place the larger value in the results array at position i
         // decrement rPtr or increment lPtr, respectively
        if(nums[lPtr]**2 > nums[rPtr]**2){
            resultsArr[i] = nums[lPtr]**2;
            lPtr++;
        }else {
            resultsArr[i] = nums[rPtr]**2;
            rPtr--;
        } 
    }
    // return results array
    return resultsArr;
};
```

## Basic Array Operations

- Insert an item at a specific location.
- Delete an item from the existing collection.
- Search for an existing item in the collection. 

### Inserting 

- At the **end**, array.length - 1, **O(1)**
- At the **beginning**, array[0], **O(n)** due to re-indexing all existing elements.
- In the **middle**, array[i], **O(n)**, due to re-indexing all existing elements from i to the end of the array.

### Duplicate Zeros

- **Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.**
  - Do this in O(1) space.