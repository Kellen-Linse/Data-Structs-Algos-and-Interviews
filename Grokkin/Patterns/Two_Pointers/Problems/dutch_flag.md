# Dutch National Flag Problem (medium)

> **Prompt:** **Given an array containing 0s, 1s and 2s, sort the array in-place.** You should *treat numbers of the array as objects*, hence, we can’t count 0s, 1s, and 2s to recreate the array.
<br>

- **Example:**

```js
Input: [1, 0, 2, 1, 0]
Output: [0, 0, 1, 1, 2]
```

<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const dutch_flag_sort = function(arr) {


  let low = 0;
  let high = arr.length - 1;
  let ptr = 0;

	while(ptr <= high){ //O(n)
		if(arr[ptr] === 0){
			swap(arr, ptr, low);
			low++;
      ptr++;
    } else if (arr[ptr] === 2){
	    swap(arr, ptr, high);
      high--;
    } else {
	    ptr++;
    }
  }
  return arr;
}


function swap(arr, ptr1, ptr2){
	[arr[ptr1], arr[ptr2]] = [arr[ptr2], arr[ptr1]]
}


// Comments
const dutch_flag_sort = function(arr) {
	
  // We are going to need three pointers for this problem
  // One at the each end and one that will start at the beginning but then work in between
  let low = 0;
  let high = arr.length - 1;
	let ptr = 0;

  // We are going to step the middle ptr through the middle of the array until it reaches the high pointer
	while(ptr <= high){

    // If the value at the ptr var is 0, swap it with the value at the low pointer
    // Then move both the low and ptr vars up one step
		if(arr[ptr] === 0){
			swap(arr, ptr, low);
			low++;
      ptr++;
    // If the value at the ptr var is 2, swap it with the value at the high pointer
    // Then move the high pointer down one step, 
    // Important: leave the ptr var where it is
    } else if (arr[ptr] === 2){
	    swap(arr, ptr, high);
      high--;
    // If we have reached this part of the conditional we have found a 1, and will just move the ptr var up by one step
    } else {
	    ptr++;
    }
  }

  // Finally we will return the input array
  return arr;
}

// Swap two values within an array
function swap(arr, ptr1, ptr2){
	[arr[ptr1], arr[ptr2]] = [arr[ptr2], arr[ptr1]]
}

```

- **Comments:**
  - *Pointers:* Three pointers, two on each side of the array and one in the middle.
  - *Movement:* The two on the end move in towards each other, while the pointer in the middle moves left to right starting in the same position as the lower pointer.
  - The trick to this problem is knowing when to swap the variables and when to move the pointers.
  - When we swap the **low** and the **ptr** var, we **increment the ptr** var.
  - When we swap the **high** and the **ptr** var, **do not** increment the ptr.
<br>

- **Basic Pattern:**
  1. Create pointers
  2. Iterate once over array
  3. Swap the values at the middle pointer with the value at the approprite high or low pointer, then move the pointers accordingly.
 <br>

- **Algorithm:**
  1. Create three pointers, one at each end of the array and one to traverse the middle of the array.
  2. Loop while the traversing pointer is less than **or equal to** the right (high) pointer
     1. If the value at the traversing pointer is 0, 
        1. swap the value with the value at left (low) pointer
        2. increment the left pointer
        3. **increment the traversing ptr**
     2. Else if the value at the traversing pointer is 2
        1. swap the value at the traversing pointer with the value at the right pointer
        2. decrement the right pointer (**do NOTHING to the traversing pointer**)
     3. Else
        1. increment the traversing pointer (**this means we have found a 1, which belongs in the middle**).
  3. Return the input array


