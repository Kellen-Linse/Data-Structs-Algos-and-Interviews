# Longest Substring with maximum K Distinct Characters (medium)

- **Prompt:** Given a **string**, find the **length of the longest substring** in it with *no more than K distinct characters*.
<br>

- **Example:**

```js
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
```
<br>

- **Big O:**
  - Time: `O(n)`, technically O(2n)
  - Space: `O(K)`, we will be storing a maximum of `K+1` characters

- **Code:**

```js
// No comments
const longest_substring_with_k_distinct = function(str, k) {

  let charMap = {}, // O(k)s
      distChars = 0, 
      maxLen = 0,
      L = 0; 

  for(let R = 0; R < str.length; R++){ // O(n)t

    if(charMap[str[R]]){
      charMap[str[R]]++;
    } else {
      charMap[str[R]] = 1;
      distChars++;
    }

    while(distChars > k){
      charMap[str[L]]--;
      if(charMap[str[L]] === 0) distChars--;
      L++;
    }

    const curLen = R - L + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};


// Comments
const longest_substring_with_k_distinct = function(str, k) {

  let charMap = {}, // character count
      distChars = 0, // distinct characters
      maxLen = 0, // Maximum length of sub-string
      L = 0; // Left side of sliding window

  for(let R = 0; R < str.length; R++){

    // If the char at the R pointer exists in the char map increment it's count by one.
    // If not, add it to the charMap, set it's count to one, and increase the distinct chars variable by one.
    if(charMap[str[R]]){
      charMap[str[R]]++;
    } else {
      charMap[str[R]] = 1;
      distChars++;
    }

    // While the number of distinct chars is greater than k, 
    // decrease the count of that char in the char map by one.
    // now check to see if the count at that character is zero, if it is,
    // decrement the number of distinct characters and then increment the L pointer.
    while(distChars > k){
      charMap[str[L]]--;
      if(charMap[str[L]] === 0) distChars--;
      L++;
    }

    // If the current window is larger than the largest known window, make that length the max
    const curLen = R - L + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};
```

<br>

- **Comments:**
  - This is a **dynamic sliding window** problem used in conjunction with a **hashmap**.
  - *Pointers:* Two, one to point to the right side (R) of the sliding window and one to point to the left side (L) of the sliding window
  - *Movement:* The R pointer will move forward one index at a time through each iteration of the for loop and the L pointer will contract the window moving towards the R pointer while the number of distinct chars is more than k, subtracting the char at L from the char map and checking the count of distinct chars on each iteration.
  - *Variables:* Three, a hashmap to track the characters,a distChars var to count the number of distinct characters, and a maxLen var to track the largest window of distinct characters.
<br>

- **Basic Pattern:**
  1. Track the number of distinct chars.
  2. Expand the window by one each loop and contract the sliding window depending on the relation between the input 'k' and the number of distinct chars in the window.
  3. When a larger window is found that contains distinct chars, set the maxLen var to the length of that window.
  4. return the maximum length found.
 <br>

- **Algorithm:**
  1. Create an object to hold the character count, charMap.
  2. Create variables to count the number of distinct characters in the window, to track the largest window of distinct characters, and to point to the left side of the sliding window.
  3. Create an R variable within a for loop, starting at zero and running until it reaches the length of the string, incrementing by one.
     1. Check to see if the current char at the R pointer index exists in the charMap,
        1. If so, increment for that char within the map.
        2. If not, 
           1. create a key in the object with that chars name, then set it's value to one.
           2. Increase the distinct character count by one. 
     2. While the number of distinct chars is greater than k, 
        1. decrease the count of the char at the left pointer in the char map by one.
        2. Now check to see if the count at that character is zero,
           1.  if so, decrement the number of distinct characters by one.
        3. Increment the L pointer by one.
        4. If the length of the current sub-window is larger than the largest known window, make that length the max.
  4. If max length is never updated due to an empty string or some other edge case, return 0, else return the maximum length found.
   
<br>

