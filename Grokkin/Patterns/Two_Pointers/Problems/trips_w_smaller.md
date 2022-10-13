# Triplets with Smaller Sum (medium)

> **Prompt:** Given an **array** of **unsorted numbers** and a **target sum**, *count all triplets in it such that arr[i] + arr[j] + arr[k] < target, where i, j, and k are three different indices.* Write a function to **return the count** of such triplets.

<br>

- **Example:**

```js
Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
```

- **Big O:**
  - Time: `O(n^2)`
  - Space: `O(n)` dependant on the sorting algo

<br>

- **Code:**

```js
// No comments
const triplet_with_smaller_sum = function(arr, target) {
	let count = 0;

	arr.sort((a, b) => a - b); // O(n log n)t - O(n)s

	// O(n) -> O(n^2)
	for(let i = 0; i < arr.length - 2; i++){
		let L = i + 1;
		let R = arr.length - 1;
        
		// O(n)
		while(L < R){
		    let sum = arr[i] + arr[L] + arr[R];

            if(sum >= target){
                R--;
            }else{
              count += R - L;
                L++;
            }
        } 
  }
  return count;
}

// Comments
const triplet_with_smaller_sum = function(arr, target) {
  // Create a variable to track the number of triplets with a smaller sum
  let count = 0;  

  // Sort array, this will allow us to run twoSum style algo later on
	arr.sort((a, b) => a - b); 
	
  // Evaluate each index in the array, until only two are left (not enough to make up a triplet)
  // Run twoSum style algorithm starting at one passed the i-th index
	for(let i = 0; i < arr.length - 2; i++){
		let L = i + 1;
		let R = arr.length - 1;
        
		
		while(L < R){

        // Add up the values currently at each pointer.
		    let sum = arr[i] + arr[L] + arr[R];

            // If the sum is currently greater than the target, we want to decrement the right pointer searching for smaller values, as any value to the left will be less than or equal to the current value at R (in a sorted array).
            if(sum >= target){
              R--;
            }else{
              // Once we find a triplet that is less than the target, every possible value for R between the current R value and the current L pointer will ALSO be less than the target
              // So we can just subtract the R pointer from the L pointer and that will give us the count of triplets that are less than the target for the current i and L.
              // We add that count to our total count, then increment L.
              count += R - L;
              L++;
            }
        } 
  }
  return count;
}
```

<br>

- **Comments:**
- This is a **Three Pointer** problem that makes use of **sort** and one extra variable to track the sums less than the target.
  - *Pointers:* One to evaluate each index of the array, two to search for all sums less than the target (twoSum style).
  - *Movement:* The first left to right, the next two towards each other.
  -  The trick with this problem is **once you find a triplet that works, every value lower than the current R will work for the current L**, so you can just subtract the R from the L to get the number of triplets to add to the count, then move on from that L. 


<br>

- **Basic Pattern:**
  1. Create a count variable.
  2. Sort the array.
  3. Iterate over the array, running a twoSum style algo
     1. Add the number of triplet sums less than the target for any give index to the count.
  4. Return the the count.


 <br>

- **Algorithm:**
  1. Create a count variable.
  2. Sort the array.
  3. Iterate over the array, running a twoSum style algo
     1. Creating pointer variables, one at one more than the index of the for loop, and one at the last index.
     2. While the left pointer is less than the right,
        1. Move the pointers such that they find the first value lower than the target
        2. Then, subtract the right pointer from the left pointer, and add that value to the count.
        3. Then increment the left pointer.
  4. Return the count.


