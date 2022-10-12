# Smallest Window containing Substring (hard)

> **Prompt:** Given a **string and a pattern**, find the **smallest substring** in the given string *which has all the character occurrences of the given pattern*.
<br>

- **Example:**

```js
Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
```

<br>

- **Big O:**
  - Time: `O(n + m)`
  - Space: `O(m)`

- **Code:**

```js
// No comments
const find_substring = function(str, pattern) {
  let returnStr = "",
      smL = 0, smR = Infinity,
      charCount = 0,
      L = 0,
      patMap = {};

  for(char of pattern){ // O(m)
    patMap[char] = patMap[char] + 1 || 1;
  }

  for(let R = 0; R < str.length; R++){ // O(n)
    let rChar = str[R];

    if(rChar in patMap){
      if(patMap[rChar] > 0) charCount++;
      patMap[rChar]--;
    }

    while(charCount === pattern.length){
      if(R - L < smR - smL) [smR, smL] = [R, L];
      
      let lChar = str[L];
      if(lChar in patMap){
        if(patMap[lChar] >= 0) charCount--;
        patMap[lChar]++;
      }

      L++;
    }
  }

  for(let i = smL; i <= smR && smR !== Infinity; i++){
    returnStr += str[i];
  }

  return returnStr;
}

// Comments
const find_substring = function(str, pattern) {
  let returnStr = "",
      smL = 0, smR = Infinity, // Left and Right side of smallest sub-string
      charCount = 0, // Number of chars from the pattern within in the current window
      L = 0, // Pointer to the left side of the window (sub-string).
      patMap = {}; // Frequency map for the pattern input.

  // Fill the pattern map
  for(char of pattern){ // O(m)
    patMap[char] = patMap[char] + 1 || 1;
  }

  // Iterate over the string, R represents the right side of the sliding window 
  for(let R = 0; R < str.length; R++){ // O(n)
    let rChar = str[R];
    
    // Check if the character at the R pointer is in the patMap
    if(rChar in patMap){

      // If the character's value is above 0 it means we have found a char we are looking for
      if(patMap[rChar] > 0) charCount++; 

      // Decrement the count at that char, so we can keep track of how many of that char we still need to find.
      patMap[rChar]--;
    }

    // Once we our charCount reaches our pattern length, we need to shrink the sliding window
    // to find the smallest sub-array that meets our condition.
    while(charCount === pattern.length){

      // Here we are checking if we have found a new smallest sub-array, and setting the current sub-array to be the smallest known if so.
      if(R - L < smR - smL) [smR, smL] = [R, L];
      
      // If the char at the L pointer is in the patMap we need to adjust out charCount and patMap accordingly as 
      // that character will be leaving the window when we shrink the window (incrementing the L pointer).
      let lChar = str[L];
      if(lChar in patMap){
        if(patMap[lChar] >= 0) charCount--;
        patMap[lChar]++;
      }
      L++;
    }
  }

  // Once we reach the end of the loop, we need to build our return string
  // We build our return string out from the smallest know sub-array
  // if the smR (the right pointer for the smallest known sub-array) is equal to Infinity, 
  // we have not updated our array, and therefor no smallest sub-array has been found.
  for(let i = smL; i <= smR && smR !== Infinity; i++){
    returnStr += str[i];
  }

  return returnStr;
}
```
<br>

- **Comments:**
  - This is a **Dynamic Sliding Window** problem which also uses a **Hash Map**.
  - *Pointers:* Two, a left pointer (L) to track the left side of the sliding window and a right pointer to track the end of the sliding window.
  - *Movement:*  The right pointer will iterate over the input string one index at a time and the left pointer will move towards the right pointer shrinking the window while the amount of characters that match the characters in the pattern is equal to the length of the pattern.
  - *Variables:* A variable that will hold the string to return ( returnStr), a variable to point to the left and right side of the smallest sub-string (smL and smR), a varaible that will track the number of matching characters within the current sub-string, a map object to count the chraracters within the pattern, and a pointer var that will point to the left side of the sliding window.
<br>

- **Basic Pattern:**
  1. Create a frequency map for the characters within the pattern string.
  2. Track the characters coming in and out of the sliding window.
  3. If the the number of characters that match the characters in the pattern is equal to the length of the pattern, and the length of the sub-string is less than the smallest known sub-string save the current L and R indices of the sub-string.
  4. Build out a string with the indices of the smallest sub-string, and return it.
 <br>


