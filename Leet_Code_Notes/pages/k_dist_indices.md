# Find All K-Distant Indices in an Array (easy)

> **Prompt:** You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| <= k and nums[j] == key.
> - Return a list of all k-distant indices sorted in increasing order.

<br>

## **Example:**

```js
Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
Output: [1,2,3,4,5,6]
Explanation: Here, nums[2] == key and nums[5] == key.
- For index 0, |0 - 2| > k and |0 - 5| > k, so there is no j where |0 - j| <= k and nums[j] == key. Thus, 0 is not a k-distant index.
- For index 1, |1 - 2| <= k and nums[2] == key, so 1 is a k-distant index.
- For index 2, |2 - 2| <= k and nums[2] == key, so 2 is a k-distant index.
- For index 3, |3 - 2| <= k and nums[2] == key, so 3 is a k-distant index.
- For index 4, |4 - 5| <= k and nums[5] == key, so 4 is a k-distant index.
- For index 5, |5 - 5| <= k and nums[5] == key, so 5 is a k-distant index.
- For index 6, |6 - 5| <= k and nums[5] == key, so 6 is a k-distant index.
Thus, we return [1,2,3,4,5,6] which is sorted in increasing order. 

```

<br>

## **Big O:**
  - Time: ``
  - Space: ``

<br>

## **Code:**

```js
// No comments
var findKDistantIndices = function(nums, key, k) {
    let resultsArr = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== key) continue;

        let start = Math.max(0, i - k);
        let end = Math.min(nums.length - 1, i+k)

        for(let j = start; j <= end; j++){
            if(!resultsArr.length || j > resultsArr[resultsArr.length-1]) resultsArr.push(j);
        }
    }

    return resultsArr;
};

// Comments
var findKDistantIndices = function(nums, key, k) {
    let resultsArr = [];

    // Iterate over each number in the array
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== key) continue; // If the current number is not equal to the key do nothing

        // If we find a value that matches our key, we then need to 
        // find all indices that are k or less places away from the current index.
        // The indices that are k or less distance away from the array may be out of the bounds of our array,
        // so we need to account for that.
        let start = Math.max(0, i - k);
        let end = Math.min(nums.length - 1, i+k)

        // To add all indices that are k dist away from the current index
        // we can start at k dist before the current index and iterate until k after.
        for(let j = start; j <= end; j++){

            // We need to make sure that we don't repeat any indices within our results array.
            if(!resultsArr.length || j > resultsArr[resultsArr.length-1]) resultsArr.push(j);
        }
    }

    return resultsArr;
};
```
<br>

## **Comments:**
  - This problem was really tricky to wrap my head around at first. It really helped to break this problem down and draw out what it was asking.
  - The trick with this problem is remembering to account for the edge cases, such as indices being k away being out of bounds.


