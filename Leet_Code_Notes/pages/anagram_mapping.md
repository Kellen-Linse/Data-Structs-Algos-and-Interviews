# Find Anagram Mappings (easy)

> **Prompt:** You are given two integer arrays nums1 and nums2 where nums2 is an anagram of nums1. Both arrays may contain duplicates.
> - Return an index mapping array mapping from nums1 to nums2 where mapping[i] = j means the ith element in nums1 appears in nums2 at index j. If there are multiple answers, return any of them.
> NOTE: An array a is an anagram of an array b means b is made by randomizing the order of the elements in a.

<br>

## **Example:**

```js
Input: nums1 = [12,28,46,32,50], nums2 = [50,12,32,46,28]
Output: [1,4,3,2,0]
Explanation: As mapping[0] = 1 because the 0th element of nums1 appears at nums2[1], and mapping[1] = 4 because the 1st element of nums1 appears at nums2[4], and so on.
```

<br>

## **Big O:**
  - Time: `O(n)`
  - Space: `O(n)`

<br>

## **Code:**

```js
// No comments
var anagramMappings = function(nums1, nums2) {
    let resultsArr = [];
    let map = {};

    for(let i = 0; i < nums2.length; i++){
        map[nums2[i]] = i; 
    }
    
    for(const num of nums1){
        resultsArr.push(map[num]);
    }

    return resultsArr;
};

// Comments
var anagramMappings = function(nums1, nums2) {
    let resultsArr = [];

    // map to hold the value and index of each 
    // number in the nums2 array.
    let map = {}; 

    // Fill map with numbers and their indices.
    for(let i = 0; i < nums2.length; i++){
        map[nums2[i]] = i; 
    }
    
    // Iterate over each number in the nums1 array
    // and add it's corresponding value in the map to the results array.
    for(const num of nums1){
        resultsArr.push(map[num]);
    }

    return resultsArr;
};
```
