# Permutation in a String (medium)

- **Prompt:** Given a **string and a pattern,** find out if the string contains any **permutation** of the pattern.

<br>

- **Example:**

```js
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
```
- **Big O:**
  - Time: `O(n + m)`, once over the pattern string to add it to a frequency map, and once to find any permutation.
  - Space: `O(m)`, the space needs will grow as the size of the input pattern grows

<br>

- **Code:**

```js
// No comments
const find_permutation = function(str, pat) {

  let pCount = 0, L = 0;
  let pMap = {};

  for(char of pat){
    pMap[char] = pMap[char] + 1 || 1;
  }

  for(let R = 0; R < str.length; R++){

    if(str[R] in pMap){
      if(pMap[str[R]] > 0) pCount++;
      pMap[str[R]]--;      
    }

    let curLen = R - L + 1;

    if(curLen > pat.length){
      if(str[L] in pMap){
        if(pMap[str[L]] >= 0) pCount--;
        pMap[str[L]]++;
      }
      L++;
      curLen--;
    }

    if(curLen === pat.length && curLen === pCount) return true;
  }

  return false;
};

// Comments
const find_permutation = function(str, pat) {

  // Create a counter variable to count the characters that match the characters that make up the pattern within the currentsub-string window.
  // Create a pointer for the left side of the sliding window.
  let pCount = 0, L = 0;

  // Create a map that represents the pattern character count.
  let pMap = {};

  for(char of pat){
    pMap[char] = pMap[char] + 1 || 1;
  }

  // Iterate over the string tracking the right side of the sliding window.
  for(let R = 0; R < str.length; R++){

    // If the character at the right pointer exists in the map of the pattern.
      // If the count at that character in the pattern map is greater than zero,
      // We have found a character that is in the pattern, so we increment count of correct chararacters currently in the pattern.
      // We then decrement the count of that given character within the pattern map. 
    if(str[R] in pMap){
      if(pMap[str[R]] > 0) pCount++;
      pMap[str[R]]--;      
    }

    // Find the current length, for readability
    let curLen = R - L + 1;

    // If the current length is greater than the length of the pattern we need to shrink the window
      // If the character at the end (left side) of the window is in the map of chars we also need to account for it leaving the window
        // If so, we need to decrement the curent count of the characters within the map if the count 
        // for that character is currently above zero. (Below zero represents too many of the same characters within the window.)
        // We then increment the count at that character. (The count at a character represents the ammount of characters we still need to find)
    if(curLen > pat.length){  
      if(str[L] in pMap){       
        if(pMap[str[L]] >= 0) pCount--;
        pMap[str[L]]++;
      }
      L++;      
      curLen--;
    }

    // If the current length is equal to the pattern length and
    // the current length is equal to the pCount then we have a match.
    if(curLen === pat.length && curLen === pCount) return true;
  }

  // If we haven't found the match, return false
  return false;
};
```

<br>

- **Comments:**
  - This is a **Fixed Sliding Window** problem using a **Hash Map**.
  - *Pointers:* Two, one pointing to the left side (L) of the sliding window and one pointing to the right side (R).
  - *Movement:*  The right side will move one character at a time, expanding the sliding window until it's length is equal with the length of the pattern string. The left pointer will follow the right at the length of the window.
  - *Variables:* One number to keep track of the correct characters within the sub-string. One object to hold the count of the numbers within the sub-string.
  - The values in the pattern map represent the amount of characters that still need to be found within the sub-string, a count below zero represents too many of that character within the sub-string.

<br>

- **Basic Pattern:**
  - We are counting the correct characters within the sub-string, adding from the R pointer and subtracting from the L pointer as we go.
  - If a new correct chararacter is added in the sub-string window the count will grow, if one leaves it will shrink.
  - If the count of correct characters is equal to the length of the sub-string and the sub-string is the same length as the pattern, we have found a match.


 <br> 

- **Algorithm:**
  1. Make a map of the pattern.
  2. IF the character at the the right pointer is in the map and it's count is higher than zero, increase the count of correct characters within the pattern, by one.
     1. Either way, decrement the count for that character in the map by one (this count can go negative).
  3. IF the current length of the window is greater than the pattern length, it's time to start shrinking the window.
     1. IF the character at the the left pointer is in the map and it's count is higher than zero, decrease the count of correct characters within the pattern, by one.
     2. Either way, increment the count for that character in the map by one.
     3. Increment the L pointer by one (shrinking the window).
     4. Decrement the current length by one (because the window shrunk).
  4. Once we have moved the window forward and made out changes, if the count of correct characters is the same as the length of the sub-string, and the sub-string is the same length as the pattern, we found a match, and can therefore return true.
  5. If we get to the end of the for loop and no match has been found, we return false.