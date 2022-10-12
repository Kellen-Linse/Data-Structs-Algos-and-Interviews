# String Anagrams (Medium)

> **Prompt:** Given a **string and a pattern**, *find all anagrams of the pattern in the given string*. 
>  - Write a function to **return a list of starting indices** of the *anagrams of the pattern in the given string*.

<br>

- **Example:**

```js
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
```

- **Big O:**
  - Time: `O(n + m)`, once over the pattern string to add it to a frequency map, and once to find any permutation.
  - Space: `O(m)`, the space needs will grow as the size of the input pattern grows

<br>

- **Code:**

```js
// No comments
const find_string_anagrams = function(str, pat) {
  let returnArr = [],
      charMap = {},
      L = 0,
      numCorrectChars = 0; 

  for(char of pat){
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let R = 0; R < str.length; R++){
    
    if(str[R] in charMap){
      if(charMap[str[R]] > 0) numCorrectChars++;
      charMap[str[R]]--;
    }

    let curLen = R - L + 1; 

    if(curLen > pat.length){
      if(str[L] in charMap){
        if(charMap[str[L]] >= 0) numCorrectChars--; // Got hung up right here missed the =
        charMap[str[L]]++;
      }
      L++;
      curLen--;
    }

    if(curLen === pat.length && curLen === numCorrectChars) returnArr.push(L);
  }
  return returnArr;
};

// Comments
const find_string_anagrams = function(str, pat) {


  let returnArr = [], // Will hold the starting indices of each anagram to return at the end of the function.
      charMap = {}, // Will hold the character count of the pattern string.
      L = 0, // pointer for the left side of the sliding window.
      numCorrectChars = 0; // Count the number of correct characters currently within the window.

  // Build the charMap
  for(char of pat){
    charMap[char] = charMap[char] + 1 || 1;
  } 

  for(let R = 0; R < str.length; R++){
    
    // Here we are acting on the character at the right pointer.
    // If it a character in our map,
    // We will check to see if the count at that character is greater than 0, if so, 
    // the variable that holds number of correct characters currently in the sub-string will be increased by one.
    // Either way, we will decrement the count at that character in the map by one.
    if(str[R] in charMap){
      if(charMap[str[R]] > 0) numCorrectChars++;
      charMap[str[R]]--;
    }

    let curLen = R - L + 1; // Current length of sub-string, for readability

    // If we have reached the point where the current length of the sub-string is greater than the length of the pattern,
    // we need to shrink it to keep the length of the sub-string the same at the pattern.
    // If the character at the left pointer is in the map, 
    // if that characters count within the map is greater than or equal to zero, we will decrease the number of correct characters within the sub-string by one.
    // This is because when we add one back to the count after this line, there will be one character remaining that is NOT within our sub-string.
    // After that we will increase the count at this character within our map. 
    // we will then increment the left pointer and then decrement the length of the sub-string as we have just shrunk it by one by moving the left pointer.
    if(curLen > pat.length){
      if(str[L] in charMap){
        if(charMap[str[L]] >= 0) numCorrectChars--; // Got hung up right here missed the =
        charMap[str[L]]++;
      }
      L++;
      curLen--;
    }

    // Once we have moved the window forward and made out changes, if the count of correct characters is the same as the length of the sub-string,
    // and the sub-string is the same length as the pattern, we found a match, and can therefore push the starting index of the anagram (L) to our return array.
    if(curLen === pat.length && curLen === numCorrectChars) returnArr.push(L);
  }

  // Once the loop is finished we will return our array holding the indices of all anagrams.
  return returnArr;
};
```

<br>

- **Comments:**
  - This is a **Fixed Sliding Window** problem using a **Hash Map**.
  - *Pointers:* Two pointers, pointing to the left (L) and right (R) side of the sliding window.
  - *Movement:* The right pointer will move one character at a time through the string, the left will follow the right at the length of the input pattern.
  - *Variables:* One number var to keep track of the correct characters within the sub-string. One frequency counter to map the input pattern string.
  - We are counting the correct characters within the sub-string, adding from the R pointer and subtracting from the L pointer as we go.
    - If a new correct char is added in the sub-string window the count will grow, if one leaves it will shrink.
    - If the count of correct characters is equal to the length of the sub-string and the sub-string is the same length as the pattern, we have found a match.

<br>

- **Basic Pattern:**
  - We are counting the correct characters within the sub-string, adding from the R pointer and subtracting from the L pointer as we go.
  - If a new correct char is added in the sub-string window the COUNT will grow, if one leaves it will shrink.
  - If the count of correct characters is equal to the length of the sub-string AND the sub-string is the same length as the pattern, we have found a valid anagram withing our string.
    - So we add the L pointer (the start of the anagram) to the results array.

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
  4. Once we have moved the window forward and made out changes, if the count of correct characters is the same as the length of the sub-string, and the sub-string is the same length as the pattern, we found an anagram, and can therefore add the left pointer to the return array, as it is the starting index of a valid anagram.
  5. When we finish the for loop we return the return array.


