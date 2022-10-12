# Longest Substring with Same Letters after Replacement (hard)

> **Prompt:** Given a **string with lowercase letters only**, if **you are allowed to replace no more than k letters with any letter**, *find the length of the longest substring having the same letters after replacement.*


<br>

- **Example:**

```js
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have the longest repeating substring "bbbbb".
```


<br>

- **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

- **Code:**

```js
// No comments
const length_of_longest_substring = function(str, k){
  
  let maxLen = 0,       
      maxCount = 0,      
      L = 0,           
      charCount = {};  

  for(let R = 0; R < str.length; R++){

    charCount[str[R]] = charCount[str[R]] + 1 || 1;
    maxCount = maxCount < charCount[str[R]] ? charCount[str[R]] : maxCount;

    let curLen = R - L + 1;

    if(curLen - maxCount > k){
      charCount[str[L]]--;
      L++;
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
      L = 0,            // Points to the left side of the sub-string window
      charCount = {};   // Map to count the characters within the sub-string 

  // Iterate over the string starting at the beginning, growing the right side of the sub-string window as we go.
  for(let R = 0; R < str.length; R++){

    // Set or increment the str[R] key of the charCount map
    charCount[str[R]] = charCount[str[R]] + 1 || 1;

    // Set maxCount to the greater between the current maxCount and the count at str[R] in the charCount map.
    maxCount = maxCount < charCount[str[R]] ? charCount[str[R]] : maxCount;

    // Find the current length, this line for readability.
    let curLen = R - L + 1;

    // If the current length of the substring, minus the highest count of a single character,
    // is greater than k ( the allowed amount of replacable characters).
    // we are going to decrement the count of the char at the L pointer within the char count map, and the current length,
    // and we will increment the left pointer.
    if(curLen - maxCount > k){
      charCount[str[L]]--;
      L++;

      // (Decrementing the sub-string here will always keep the maxLen smaller than if a non-skipped value is found.)
      curLen--;
    }

    // If the length of the sub-string is greater than the max, set that value to be the max
    maxLen = maxLen < curLen ? curLen : maxLen;
  }

  // Return the largest sub-string found
  return maxLen;
};
```

<br>

- **Comments:**
  - This is a **Dynamic Sliding Window** problem.
  - *Pointers:* One pointer for the left (L) and one pointer for the right (R) side of the sliding window.
  - *Movement:* The right pointer will constantly move to the right once per iteration, the left pointer will move to the right when the current length of the sub-string minus the largest count is higher than k.
  - *Variables:* One variable to track the longest sub-string (maxLen), one to track the count of the most repeated char (maxCount), and one to map the character counts.
  - **Condition for Contracting:** The window will shrink when the current length of the sub-string minus the largest count is higher than k.
  - What makes this problem harder is that you must track both the count, the max count and the longest sub-string, and the trick is that you don't count all the idividual chars and compare, you just subtract the 


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