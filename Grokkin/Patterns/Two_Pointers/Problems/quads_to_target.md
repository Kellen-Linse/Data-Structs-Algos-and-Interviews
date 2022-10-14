# Quadruple Sum to Target (medium)

- **Prompt:** Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.
<br>

- **Example:**
```js
Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
```

- **Big O:**
  - Time: `O(n^3)`
  - Space: `O(n) - sorting`

<br>

- **Code:**

```js
// No Comments
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b); // O(n)s
    let result = [];

    for (let i=0; i<nums.length - 3; i++) { // O(n^2)t
        for (let j=i+1; j<nums.length - 2; j++) {

            let L = j+1, 
                R = nums.length - 1;

            while (L < R) { // O(n)t
                let sum = nums[i] + nums[j] + nums[L] + nums[R];

                if (sum > target){
                  R--;
                }
                else if(sum < target){
                  L++;
                }  
                else {
                    result.push([nums[i], nums[j], nums[L], nums[R]]);
                    while (nums[i] === nums[i+1]) i++;
                    while (nums[j] === nums[j+1]) j++;
                    while (nums[L] === nums[L+1]) L++;
                    while (nums[R] === nums[R-1]) R--;
                    L++; 
                    R--;
                }   
            }
        }
        
    }
    return result;
};

//Comments
var fourSum = function(nums, target) {

    // Sort input array
    nums.sort((a,b) => a-b); //O(n)s
    // Create an array to hold the quadruplets whose sum match the target
    let result = [];

    // Create a nested for loop - O(n^2)t
    for (let i=0; i<nums.length - 3; i++) {
        for (let j=i+1; j<nums.length - 2; j++) {

            // twoSum Style algo - O(n)t
            // Create pointers
            let L = j+1, 
                R = nums.length - 1;

            while (L < R) {

                // Find current sum
                let sum = nums[i] + nums[j] + nums[L] + nums[R];

                // Move sum towards target
                if (sum > target){
                  R--;
                }
                else if(sum < target){
                  L++;
                }
                // If a match is found
                else {
                    // Push current values to the results array as a quadruplet
                    result.push([nums[i], nums[j], nums[L], nums[R]]);
                    
                    //Increment i, j, L and decrement R while there are duplicate values
                    while (nums[i] === nums[i+1]) i++;
                    while (nums[j] === nums[j+1]) j++;
                    while (nums[L] === nums[L+1]) L++;
                    while (nums[R] === nums[R-1]) R--;

                    // Increment and decrement once more to avoid duplicates
                    L++; R--;
                }   
            }
        }
    }

    // Return results array
    return result;
};
```


- **Alternate Solution:**


```js
// No comments
var fourSum = function(arr, target) {
    
  let resultsArr = [];
	arr.sort((a, b) => a - b);

	for(let i=0; i < arr.length-3 ; i++){ // O(n)
		if (arr[i] === arr[i - 1]) continue; 

		for(let j = i+1; j < arr.length-2; j++){ // O(n)
            if (j > i + 1 && arr[j] === arr[j - 1]) continue;           
            findPair(i, j, arr, resultsArr, target); // O(n)
      }
    }
	return resultsArr;
}

function findPair(i, j, arr, resArr, target){
    let L = j+1;
    let R = arr.length-1;
    
    while(L < R){
        const sum = arr[i] + arr[j] + arr[L] + arr[R];
        
        if(sum < target){
            L++;
        } else if (sum > target){
            R--;
        } else {
            resArr.push([arr[i], arr[j], arr[L], arr[R]]);
            L++;
            R--;
            while(L < R && arr[L] === arr[L-1]){
                L++;
            }
        }
    }
}

// Comments
var fourSum = function(arr, target) {
    
    // Create an array to store the quadruplets that add to the target 
    let resultsArr = [];
	
    // Sort the array O(n log n)t
	arr.sort((a, b) => a - b);
    
    // Iterate over the array until you can make one final triplet
	for(let i=0; i < arr.length-3 ; i++){ // O(n)
        
        // If you find a duplicate skip to the next i value
		if (arr[i] === arr[i - 1]) continue; 
        
        // Starting at one more than i, iterate over the array
		for(let j = i+1; j < arr.length-2; j++){
            
            // If j is at least one more than i and is a duplicate, skip to next j value
            if (j > i + 1 && arr[j] === arr[j - 1]) continue;
            
            findPair(i, j, arr, resultsArr, target);
      }
    }
	return resultsArr;
}

// twoSum style algo, making sure there are no duplicate values
// and pushing any found values to the resultsArr
function findPair(i, j, arr, resArr, target){
    let L = j+1;
    let R = arr.length-1;
    
    while(L < R){
        const sum = arr[i] + arr[j] + arr[L] + arr[R];
        
        if(sum < target){
            L++;
        } else if (sum > target){
            R--;
        } else {
            // Push the quadruplet to the results array
            resArr.push([arr[i], arr[j], arr[L], arr[R]]);
            // move on from both indices to avoid duplicates
            L++;
            R--;
            // keep incrementing the L if it holds the same value as the last L
            while(L < R && arr[L] === arr[L-1]){
                L++;
            }
        }
    }
}
```

<br>

- **Comments:**
  - This is a **Four Pointer** problem, plus an array to hold the return values.
  - *Pointers:* 4 ptrs, two in a nested for loop and two acting as the left and right pointers for twoSum style algo
  - *Movement:* The two nested for loop pointers move left to right, skipping any duplicates.The two twoSum style pointers move in towards each other. 
  - Again, as with all nested non-duplicate xSum style problems, the **thing to watch out for is duplicate values**.
  - **In this problem we just push past all duplicates every time after we find a new solution.**
<br>

- **Basic Pattern:**
  1. threeSum with an extra for loop
 <br>

- **Algorithm:**
  1. Sort input array
  2. Create array to hold returned quadruplets
  3. Create nested for loop
  4. Run twoSum style algo
     1. If a sum is found that matches the target
        1. Push an array containing all pointers to the results array
        2. **run a while loop for each of the pointers to skip over any of the duplicate values**
        3. **Then increment the L and decrement the R once more**
  5. return results array
