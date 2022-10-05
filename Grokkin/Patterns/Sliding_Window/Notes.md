# Pattern: Sliding Window 

<hr>

## General Notes

- Sliding windows allows us to avoid doing repeated calculations within a given window of an array or string.
- The sliding window technique is often used when we are asked to **find or calculate something among all the *sub-arrays, sub-lists, or sub-strings* of a given size**.
  - Example: `Given an array, find the average of each subarray of ‘K’ contiguous elements in it.`
    - The brute force approach to this problem would result in an `O(n * K)` run time.
    - The sliding window technique can be applied to this problem to reduce the run time to `O(n)`.
- "Overlapping sub-arrays" or "contiguous sub-arrays"
<br>

- In looking for a more efficient solution, **first define the brute force approach, then find the inefficiencies.**
    - This may give you a hint as to where improvements can be made.
<br>

- In some problems the size of the window is fixed, but in many problems, it is NOT fixed. 
  - **Fixed Sized Sliding Window:**
    - Problems where we need to "find the (some given condition) of each subarray of ‘K’ contiguous elements in it.
    - Example: `Given an array, find the average of each subarray of ‘K’ contiguous elements in it.`
  - **Dynamic Sized Sliding Window:**
    - *We have to expand or shrink the window based on the problem constraints.*
    - Problems where we need to find the **largest or smallest** sub-array that matches some condition.
    - **Ask under what condition do I need to expand? and under what condition do I need to contract??**
      - "Ok, I've expanded until I've met my condition, can I now contract and still meet that condition?"
    - **Ask yourself under what condition the window should expand, and under what conditions it should contract.**
<br>

- If you are looking for a smallest sub-array, there will always be a base case of 1, if you find a sub-array then you can return early, as you cannot do better than a sub-array of length one.
<br>

- Don't forget when you are finding the length of a sub-array you need to account for arrays being **zero indexed**, that means **you need to add one** `(start - end + 1)` when subtracting the start from the end (assuming that the start is greater than the end).
<hr>

- *Longest* or *Shortest* sub-array/ sub-string problems will **always have a maxLen or minLen variable respectively**
- Don't use too large of an example when trying to work through your code. 

## Problems


### Maximum Sum Subarray of Size K (easy)

- **Prompt:** Given an *array of positive numbers* and a *positive number: **k***, find the maximum sum of any contiguous subarray of size ‘k’.
<br>

- **Example:**

```js
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
```
<br>

- **Comments:**
  - *Pointers:* Two, one pointer to point to the start of the sliding window, one to point to the end.
  - *Movement:* The first pointer will move to the left, once the window size is reached, both pointers will increment, by one each loop, until the start value reaches the end of the array.
  - *Variables:* Two, one to track the current sum of the window and one to track the max sum of any window. 
  - This is a **Fixed Window** type of sliding window problem.
  - This same technique can be used to find things like the largest/smallest sum, difference, product, average, etc.. of a given fixed size sub-array.
<br>

- **Basic Pattern:**
  1. build up a window
  2. slide window across the array
  3. if the value in the window is greater than the max value set the current value to the max value.
 <br>

- **Algorithm:**
  1. Create variables to track the max sum and the current sum.
  2. Create a pointer to track the end of the sliding window.
  3. Create a for loop tracking the start variable, incrementing it by one each time until it hits the end of the loop.
     1. add the current value at the start index to the current sum variable.
     2. If the start variable is smaller than the length of the sub-array we have been asked to find,
        1. subtract the value at the end pointer from the current sum variable.
        2. increment the end variable.
        3. if the value of the current sum is greater than the max sum, set the max sum to equal the current sum.
  4. return the max sum variable.
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const max_sub_array_of_size_k = function(k, arr) {

  let maxSum = -Infinity;
  let curSum = 0;
  let end = 0;

  for(let start = 0; start < arr.length; start++){ // O(n)
    curSum += arr[start];

    if(start >= k){
      curSum -= arr[end];
      end++;
      maxSum = maxSum < curSum ? curSum : maxSum;
    } 
  }
  return maxSum;
};

// Comments
const max_sub_array_of_size_k = function(k, arr) {
  // Gaurd Clauses
  if(!Array.isArray(arr) || arr.length < k) return null;
  
  // Variables
  let maxSum = -Infinity;
  let curSum = 0;

  // Pointer
  let end = 0;

  // Logic

  // Iterate over the array once 
  for(let start = 0; start < arr.length; start++){

    // Add the value at the start index to the current sum
    curSum += arr[start];

    // If the start pointer is greater than the size of the the contiguous sub-array, k
    // Our window has been built, and we now need to remove the last value within the window.
    // We subtract the value at the end pointer from the current sum, then increment the end pointer.
    if(start >= k){
      curSum -= arr[end];
      end++;

      // Set the maxSum to be the greater value between maxSum and current sum within the window
      maxSum = maxSum < curSum ? curSum : maxSum;
    }
  }

  // Return the maximum sum
  return maxSum;
};
```


<hr>

### Smallest Subarray With a Greater Sum (easy)

- **Prompt:** Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
<br>

- **Example:**

```js
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].
```
<br>

- **Comments:**
- - **This is a Dynamic Window type of sliding window problem.**
  - *Pointers:* Two, one pointer to point to the start of the sliding window, one two point to the end.
  - *Movement:* The start pointer will move to the left, then, once a window sum greater than the target value is reached, the window will be shrunk, moving the end pointer towards the start pointer.
  - *Variables:* Two, one to track the current sum in the window, one to track the smallest length of sub-array where the sum is gt or et the target.
  - This same technique can be used in problems where you must find the largest or smallest sub-array given some condition.
<br>

- **Basic Pattern:**
  1. build up a window
  2. slide window across the array
  3. add the value at the start pointer to the current sum within the window
  4. if the sum of the values in the window is greater or equal to the target value set the current value to the max value.
  5. while the the sum of the values in the window is greater or equal to the target value
     1. Find the length of the the window
     2. if it is smaller than the smallest known window length, set it's length to be the smallest
     3. subtract the value at the end pointer from the current sum
     4. increment the end pointer
  6. return the smallest length
 <br>

- **Algorithm:**
  1. Create variables to track the smallest length of array that meets the condition, the current sum of the window, and to point to the end of the array.
  2. Create a start to track the start of the window and loop while start is less than the array length
  3. Add the value at the start pointer to the current sum.
  4. Create a while loop that will run so long as the current sum is greater than or equal to the target.
     1. Check to see if the sum in our window is greater than the target
        1. If the current length of the window is less than the smallest known length set that length to be the smallest.
     2. Subtract the value at the end index from the current sum.
     3. increment the end pointer.
  5. Finally, we return the smallest known length, if no length is found return 0.
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null;

    let end = 0; 
    let smLen = Infinity;
    let curSum = 0; 

    for(let start = 0; start < arr.length; start++){ // O(n), technically O(2n) with while loop
        curSum += arr[start];
        while(curSum >= s){
            const curLen = start - end + 1;
            if(curLen < smLen) smLen = curLen;
            curSum -= arr[end];
            end++;
        }
    }
    return smLen;
};

// Comments
const smallest_subarray_sum = function(s, arr) {
    if(!Array.isArray(arr)) return null

    // Pointer var
    let end = 0; // end of sliding window

    // Tracker vars
    let smLen = Infinity; // Smallest length
    let curSum = 0; // current sum

    // Logic
    for(let start = 0; start < arr.length; start++){

        // Add the value at the start pointer to the current sum
        curSum += arr[start];

        // So long as the current sum is greater than or equal to the target
        while(curSum >= s){

            // Here we are checking to see if the sum in our window is greater than the target 's'.

            // find the current length of the window by subtracting the current window's start from it's end 
            // then adding one to account for the array being zero indexed
            const curLen = start - end + 1;
            // If the current length is smaller than the smallest known length, set that to the smallest length
            if(curLen < smLen) smLen = curLen;

            // Here we are shrinking the window

            // Subtract the value at the end pointer from the current sum
            curSum -= arr[end];

            // Increment the end pointer
            end++;
        }
    }

    // Finally, we return the smallest known length, if no length is found return 0
    return smLen === Infinity ? 0 : smLen;
};
```

<hr>

### Longest Substring with maximum K Distinct Characters (medium)

- **Prompt:** Given a string, find the length of the longest substring in it with no more than K distinct characters.
<br>

- **Example:**

```js
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
```
<br>

- **Comments:**
  - **This is a dynamic sliding window problem used in conjunction with a hashmap**.
  - *Pointers:* Two, one to point to the start and one to point to the end of the sliding window
  - *Movement:* The starting pointer will move forward one index at a time through each iteration of the for loop and the end pointer will contract the window moving towards the start pointer while the number of distinct chars is more than k.
  - *Variables:* Three, a hashmap to track the characters,a distChars var to count the number of distinct characters, and a maxLen var to track the largest window of distinct characters.
<br>

- **Basic Pattern:**
  1. Track the number of distinct chars.
  2. Expand or contract the sliding window depending on the relation between the input 'k' and that number.
  3. When a larger window is found that contains distinct chars, set the maxLen var to the length of that window.
  4. return the maximum length found.
 <br>

- **Algorithm:**
  1. Create an object to hold the character count, charMap.
  2. Create variables to count the number of distinct characters in the window, to track the largest window of distinct characters, and to point to the end of the sliding window.
  3. Create a start variable within a for loop, starting at zero and running until it reaches the last index of the string, incrementing by one.
     1. Check to see if the current char at the start index exists in the charMap,
        1. If so, increment the value held at the key by that chars name, by one.
        2. If not, 
           1. create a key in the object with that chars name, then set it's value to one.
           2. Increase the distinct character count by one. 
     2. While the number of distinct chars is greater than k, 
        1. decrease the count of that char in the char map by one.
        2. Now check to see if the count at that character is zero, if it is,
           1.  decrement the number of distinct characters by one.
        3. Increment the end pointer by one.
        4. If the current window between end and start minus one is larger than the largest known window, make that length the max.
  4. If max length is never updated due to an empty string or some other edge case, return 0, else return the maximum length found.
   
<br>

- **Big O:**
  - Time: `O(n)`, technically O(2n)
  - Space: `O(K + 1)`, we will be storing a maximum of `K+1` characters

- **Code:**

```js
// No comments
const longest_substring_with_k_distinct = function(str, k) {

  let charMap = {}, // O(k + 1)
      distChars = 0, 
      maxLen = 0,
      end = 0; 

  for(let start = 0; start < str.length; start++){ // O(n)t

    if(charMap[str[start]]){
      charMap[str[start]]++;
    } else {
      charMap[str[start]] = 1;
      distChars++;
    }

    while(distChars > k){
      charMap[str[end]]--;
      if(charMap[str[end]] === 0) distChars--;
      end++;
    }

    const curLen = start - end + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};


// Comments
const longest_substring_with_k_distinct = function(str, k) {

  let charMap = {}, // character count
      distChars = 0, // distinct characters
      maxLen = 0, // Maximum length of sub-string
      end = 0; // End of sliding window

  for(let start = 0; start < str.length; start++){

    // If the char at start exists in the char map increment it's count by one.
    // If not, add it to the charMap, set it's count to one, and increase the distinct chars variable by one.
    if(charMap[str[start]]){
      charMap[str[start]]++;
    } else {
      charMap[str[start]] = 1;
      distChars++;
    }

    // While the number of distinct chars is greater than k, 
    // decrease the count of that char in the char map by one.
    // now check to see if the count at that character is zero, if it is,
    // decrement the number of distinct characters and then increment the end pointer.
    while(distChars > k){
      charMap[str[end]]--;
      if(charMap[str[end]] === 0) distChars--;
      end++;
    }

    // If the current window is larger than the largest known window, make that length the max
    const curLen = start - end + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};
```

<hr>

### Fruits into Baskets (medium)

- **Note:** This question is essentially the last question with a 'realistic' scenario applied to it.

- **Prompt:**


 ```
 You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
 You will be have two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can start with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot, 
  - i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both baskets.
 ```
<br>

- **Example:**

```js
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
```
<br>

- **Comments:**
  - Notice the return value here: We are only being asked to return the final count, so some of that scenario is theoretical, we need not concern ourselves with returning what the actual start and end positions are and nor with anything else other than that final count.
<br>

- **Big O:**
  - Time: `O(n)` technically, O(2n)
  - Space: `O(1)`

- **Code:**

```js
// See code from problem above for comments
const fruits_into_baskets = function(fruits) {
  if(fruits.length <= 2) return fruits.length;
  
  let distFruitCount = 0,
      maxFruitCount = 0,
      end = 0, 
      fruitMap = {};

  for(let start = 0; start < fruits.length; start++){
    if(fruitMap[fruits[start]]){
      fruitMap[fruits[start]]++;
    } else{
      fruitMap[fruits[start]] = 1;
      distFruitCount++;
    }

    while(distFruitCount > 2){
      fruitMap[fruits[end]]--;
      if(!fruitMap[fruits[end]]) distFruitCount--;
      end++;
    }

    const currTotalFruits = start - end + 1;
    maxFruitCount = maxFruitCount < currTotalFruits ? currTotalFruits : maxFruitCount;
  }

  return maxFruitCount;
};
```

<hr>

### Longest Substring with Distinct Characters (medium)

- **Prompt:** Given a string, find the length of the longest substring, which has all distinct characters.
<br>

- **Example:**

```js
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
```
<br>

- **Comments:**
  - *Pointers:* Two, one to track the start of the sub-string and one to track the end.
  - *Movement:* The start pointer will iterate one index at a time, from left to right, the end pointer will jump to the the index of the repeated value plus one.
  - *Variables:* Two, one to hold the length of the distinct char sub-string, one Map object to hold the distinct characters.
<br>

- **Basic Pattern:**
  1. If the charMap has the char at the start index as a key, if the value at the key + 1 is greater than end, set end to that value + 1.
  2. Set the charMap key of char at start pointer in the string to the start index.
  3. Set max length to whatever is greater, the current window or the current max.
  4. return the max length.
 <br>

- **Algorithm:**
  1. Create a variable to track the max length of a distinct sub-string.
  2. Create a pointer to point to the end of the sub-string.
  3. Create a new Map object to hold the characters.
  4. Iterate over the string, tracking a start variable beginning at zero.
     1. If the char at the start pointer in the string is a key in the map, 
        1. Set the end variable to be the greater of either itself -or- the value at that key plus one.
     2. Set a key in the map with the key being the character in the string at the start pointer, and the value being the current start index.
     3. Set the maxLen var to be the greater of itself -or- start - end + 1.
  5. Return the maxLen variable.
<br>

- **Big O:**
  - Time: `O(n)` 
  - Space: `O(n)`

- **Code:**

```js
// No comments
var lengthOfLongestSubstring = function(s) {

    const charMap = new Map();
    let end = 0;
    let maxLen = 0;
    
    for(let start = 0; start < s.length; start++) {
        if(charMap.has(s[start])) end = Math.max(charMap.get(s[start]) + 1, end)
        charMap.set(s[start], start);
        maxLen = Math.max(start - end + 1, maxLen);
    } 
    
    return maxLen;  
};


// Comments
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const charMap = new Map();
    // keeps track of the starting index of the current substring.
    let end = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let start = 0; start < s.length; start++) {
        // if the current char was seen, move the end to the greater of (1 + the last index of this char) or itself.
        // max prevents moving backward, 'end' can only move forward
        if(charMap.has(s[start])) end = Math.max(charMap.get(s[start]) + 1, end)
        // Set the key or s[start] in the map to be the current index of the start var
        charMap.set(s[start], start);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(start - end + 1, maxLen);
    } 
    
    return maxLen;  
};

```

- **O(2n)t, O(n)s Solution**

```js
// No comments
const non_repeat_substring = function(str) {
  let maxLen = 0,
      end = 0, 
      charMap = {};

  for(let start = 0; start < str.length; start++){

    if(!charMap[str[start]]){
      charMap[str[start]] = 1;
    } else {
      charMap[str[start]]++;

      while(charMap[str[start]] > 1){
        charMap[str[end]]--;
        end++;
      }
    }

    let curLen = start - end + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};


// Comments
const non_repeat_substring = function(str) {

  let maxLen = 0, // track maxLength of distinct chars sub-string
      end = 0, // pointer to track the end of the sliding window
      charMap = {}; // map to hold distinct chars

  // Iterate over string, beginning at the first index
  for(let start = 0; start < str.length; start++){

    // Check to see if the char at the start index exists, and has a value of > 0, 
    // if not, set it's value in the map to 1.
    // If so, increment it's count by one, then, while it's value is greater than one,
    // withing the charMap, decrement the value held by the key of the same char as the char in the string at the end pointer.
    // then, increment the end pointer.
    if(!charMap[str[start]]){
      charMap[str[start]] = 1;
    } else {
      charMap[str[start]]++;
      while(charMap[str[start]] > 1){
        charMap[str[end]]--;
        end++;
      }
    }

    // Check to see if the current length of the sub-string of distinct values is 
    // greater than the largest sub-string found up to this point,
    // If so, set the maxLen var to be the current length.
    let curLen = start - end + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  // Return the length of largest sub-string found
  return maxLen;
};

```

<hr>

### Longest Substring with Same Letters after Replacement (hard)

- **Prompt:** Given a **string with lowercase letters only**, if **you are allowed to replace no more than k letters with any letter**, *find the length of the longest substring having the same letters after replacement.*
<br>

- **Example:**

```js
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
```
<br>

- **Comments:**
  - *Pointers:* One pointer for the left (l) and one pointer for the right (r) side of the sliding window.
  - *Movement:* The right pointer will constantly move to the right once per iteration, the left pointer will move to the right when the current length of the sub-string minus the largest count is higher than k.
  - *Variables:* One variable to track the longest sub-string (maxLen), and one to track the count of the most repeated char (maxCount).
  - This is a **Dynamic Sliding Window** problem.
  - **Condition for Contracting:** The window will shrink when the current length of the sub-string minus the largest count is higher than k.
<br>

- **Basic Pattern:**
  1. Create variables to track **max length of substring**, and the **count of the largest repeated char**.
  2. Create an object to track the count of each char within the sub-string.
  3. Create pointers for the left and right side of the sliding window.
  4. Using a for loop and the right pointer, incrementing by one each time through,
     1. Set the char within the char count.
     2. Set the max count if a new count has been found.
     3. If the current length of the sub-string *minus* the highest repeated char is greater than k,
        1. decrement the count at the left char, and the current length.
        2. Increment the left pointer.
     4. Set the maxLength if a new one has been found.
  5. return the max length of the sub-string.
 <br>

- **Algorithm:**
  1. See Commented Code ->>
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const length_of_longest_substring = function(str, k){
  
  let maxLen = 0,       
      maxCount = 0,      
      l = 0,           
      charCount = {};  

  for(let r = 0; r < str.length; r++){

    charCount[str[r]] = charCount[str[r]] + 1 || 1;
    maxCount = maxCount < charCount[str[r]] ? charCount[str[r]] : maxCount;

    let curLen = r - l + 1;

    if(curLen - maxCount > k){
      charCount[str[l]]--;
      l++;
      curLen--;
    }

    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};

// Comments
const length_of_longest_substring = function(str, k){
  
  let maxLen = 0,       // The max length of a sub-string
      maxCount = 0,      // The highest count of a single character
      l = 0,            // Points too the left side of the sub-string window
      charCount = {};   // Map to count the characters within the sub-string 

  // Iterate over the string starting at the beginning, growing the right side of the sub-string window as we go.
  for(let r = 0; r < str.length; r++){

    // Set the str[r] key of the charCount map
    charCount[str[r]] = charCount[str[r]] + 1 || 1;

    // Set maxFreq to the greater between the current maxFreq and the count at str[r] in the charCount map.
    maxCount = maxCount < charCount[str[r]] ? charCount[str[r]] : maxCount;

    // Find the current length, this line for readability.
    let curLen = r - l + 1;

    // If the current length of the substring minus the highest count of a single character is greater than k
    // we are going to decrement the count of the char at the l pointer within the char count map,
    // the l pointer itself, and the current length, all by one.
    if(curLen - maxCount > k){
      charCount[str[l]]--;
      l++;

      // Decrementing the sub-string here will always keep the maxLen smaller than if a non-skipped value is found.
      curLen--;
    }

    // If the length of the sub-string is greater than the max, set that value to be the max
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  // Return the largest sub-string found
  return maxLen;
};
```



<hr>

### Longest Subarray with Ones after Replacement (medium)

- **Prompt:** Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
<br>

- **Example:**

```js
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
```
<br>

- **Comments:**
  - *Pointers:* Two, one to track the left and right side of the sliding window.
  - *Movement:* The sliding window will move one place to the right with each iteration of the for loop. The window will contract when the number of replaced zeros is greater than k.
  - *Variables:* Two, one to track the number of ones within the window, and one to track the max length of the sub-array.
  - This is the key part of solving problems in this way:

```js

    let curLen = r - l + 1;
    let numReplacedZeros = curLen - onesCount; // <---- Instead of tracking the replacements, your tracking the correct values
    // Then finding the incorrect values by subtracting the correct values from the sub-arrays length

    if(numReplacedZeros > k){  // <--------------- Then shrinking the sub-arrays length if the conditions are exceeded
      if(arr[l] === 1) onesCount--;
      l++;
      curLen--; // It is important that the length is properly decremented after the left pointer is moved forward.
    }
```
<br>

- **Basic Pattern:**
  1. Create vars to track the largest sub-array, and the number of ones within the window.
  2. Create a pointer to represent the left side of the sliding window.
  3. Iterate over the array once, using a var to represent the right side of the sliding window.
     1. If the value at r is 1, add it to the ones count, as it will be entering the window.
     2. The current length minus the onesCount represents the number of 0's replaced with ones.
     3. If that number is greater than k,
        1. If the value at the l pointer is a 1, decrement the onesCount as that one will be leaving the window.
        2. Increment the l pointer by one.
        3. Decrement the current length by one.
     4. Set that max
 <br>

- **Algorithm:**
  1. See Commented Code ->>
<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const length_of_longest_substring = function(arr, k) {
  let maxLen = 0, onesCount = 0;
  let l = 0;

  for(let r = 0; r < arr.length; r++){

    if(arr[r] === 1) onesCount++;

    // added for readability
    let curLen = r - l + 1;
    let numReplacedZeros = curLen - onesCount;

    if(numReplacedZeros > k){
      if(arr[l] === 1) onesCount--;
      l++;
      curLen--;
    }

    maxLen = maxLen < curLen ? curLen : maxLen;
  }
  return maxLen;
};

// Comments
const length_of_longest_substring = function(arr, k) {

  // Track the largest sub-array, and the number of ones within the window
  let maxLen = 0, onesCount = 0;

  // Pointer for the left side of the sliding window
  let l = 0;

  // Iterate over the array once, using r to represent the right side of the sliding window.
  for(let r = 0; r < arr.length; r++){

    // If the value at r is 1, add it to the ones count, as it will be entering the window.
    if(arr[r] === 1) onesCount++;

    // Find the current length, more for readability.
    let curLen = r - l + 1;

    // IMPORTANT: The current length minus the onesCount represents the number of 0's replaced with ones.
    // Variable made for readability:
    let numReplacedZeros = curLen - onesCount;

    // If the number of replaced zeros is greater than k (representing the number of zeros we are allowed to skip).
    if(numReplacedZeros > k){

      // If the value at the l pointer is a 1, decrement the onesCount as that one will be leaving the window.
      if(arr[l] === 1) onesCount--;

      // Increment the l pointer by one
      // This DOESN'T shrink the window, but it doesn't allow it to grow!
      l++;

      // Here we are decrementing the current length by one, 
      // setting it to the size it was at the beginning of the loop.
      curLen--;
    }

    // The last thing we will do within our for loop is check to see if the length of the sub-array is 
    // larger than any we have seen. If it is we will set the surrent length to be the largest.
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  // return the length of the longest sub-array.
  return maxLen;
};
```

