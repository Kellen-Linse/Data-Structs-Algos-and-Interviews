# Longest Substring with Distinct Characters (medium)

- **Prompt:** Given a **string**, find the **length of the longest substring**, which has **all distinct characters**.
<br>

- **Example:**

```js
Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".
```

<br>

- **Big O:**
  - Time: `O(n)` 
  - Space: `O(n)`

- **Code:**

```js
// No comments using object literal
var lengthOfLongestSubstring = function(s){
  const charMap = {};
  let L = 0;
  let maxLen = 0;

  for(let R = 0; R < s.length; R++){
    if(s[R] in charMap) L = Math.max(charMap[s[R]] + 1, L);
    charMap[s[R]] = R;
    maxLen = Math.max(R - L + 1, maxLen);
  }

  return maxLen;
}

// No comments using Map object
var lengthOfLongestSubstring = function(s) {

    const charMap = new Map();
    let L = 0;
    let maxLen = 0;
    
    for(let R = 0; R < s.length; R++) {
        if(charMap.has(s[R])) L = Math.max(charMap.get(s[R]) + 1, L)
        charMap.set(s[R], R);
        maxLen = Math.max(R - L + 1, maxLen);
    } 
    
    return maxLen;  
};


// Comments
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const charMap = new Map();
    // keeps track of the starting index of the current substring.
    let L = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let R = 0; R < s.length; R++) {
        // if the current char has already been seen, move the L pointer
        // to the greater of either (the last index this char was seen at, plus one) or L.
        // here, max prevents L from moving backward, 'L' can only move forward
        if(charMap.has(s[R])) L = Math.max(charMap.get(s[R]) + 1, L)
        // Set s[R] in the map to be the current index of the R pointer
        charMap.set(s[R], R);
        // set maxLen if the current length is larger
        maxLen = Math.max(R - L + 1, maxLen);
    } 
    
    return maxLen;  
};

```

- **O(2n)t, O(n)s Solution**

```js
// No comments
const non_repeat_substring = function(str) {
  let maxLen = 0,
      L = 0, 
      charMap = {};

  for(let R = 0; R < str.length; R++){

    if(!charMap[str[R]]){
      charMap[str[R]] = 1;
    } else {
      charMap[str[R]]++;

      while(charMap[str[R]] > 1){
        charMap[str[L]]--;
        L++;
      }
    }

    let curLen = R - L + 1;
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  return maxLen;
};
``` 

<br>

- **Comments:**
  - *Pointers:* Two, one to track the left side of the sub-string (L) and one to track the right side (R).
  - *Movement:* The R pointer will iterate one index at a time, from left to right, when R encounters a repeated value, the L pointer will jump to the the index of the repeated value plus one.
  - *Variables:* Two, one to hold the length of the longest distinct char sub-string seen so far, and one Map object to track in a char has been seen and if it has the last index at which it was seen.
  - The trick with getting the algo down to O(n) time as opposed to O(2n) is to store the char in the char map and set it's value to be the last index it was seen at, and to jump the L pointer forward to one plus the last time the repeated value was seen.
<br>

- **Basic Pattern:**
  1. The R pointer will iterate one index at a time, from left to right, adding the value at the R pointer to the charMap as a key and the index as the value.
  2. When the R pointer encounters a value that exists in the map, the L pointer will jump to the the index of the repeated value plus one.
  3. The value at that char in the charMap will be set to the current R index.
  4. Set max length to whatever is greater, the current window or the current max.
  5. return the max length.
 <br>

- **Algorithm:**
  1. Create a variable to track the max length of a distinct sub-string.
  2. Create a pointer to point to the L of the sub-string.
  3. Create a new Map object to hold the characters.
  4. Iterate over the string, tracking a R variable beginning at zero.
     1. If the char at the R pointer in the string is a key in the map, 
        1. Set the L variable to be the greater of either itself -or- the value at that key plus one.
     2. Set a key in the map with the key being the character in the string at the R pointer, and the value being the current R index.
     3. Set the maxLen var to be the greater of itself -or- R - L + 1.
  5. Return the maxLen variable.
<br>