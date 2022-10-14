# Comparing Strings containing Backspaces (medium)

> **Prompt:** Given **two strings containing backspaces** (identified by the character ‘#’), *check if the two strings are equal*.

<br>

- **Example:**
```js
Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.
In "xp#", the '#' removes the character 'p'.
Both strings are left as 'x'.
```

- **Big O:**
  - Time: `O(n + m)`, where n and m represent the two input strings
  - Space: `O(1)`

- **Code:**

```js
// No comments
const backspace_compare = function(str1, str2) {

  let idx1 = str1.length - 1;
  let idx2 = str2.length - 1;

  while(idx1 >= 0 && idx2 >= 0){
    let vIdx1 = validIndex(str1, idx1);
    let vIdx2 = validIndex(str2, idx2);

    if( !vIdx1 || !vIdx2 ) return false;
    if(str1[vIdx1] !== str2[vIdx2]) return false;
    if(vIdx1 === 0 && vIdx2 === 0) return true;

    idx1 = --vIdx1;
    idx2 = --vIdx2;
  }
}

function validIndex(str, i){
  let valid = i;

  while(str[i] === '#'){
    valid-=2;
    i--;
  }

  return i < 0 ?  false : valid;
}

// Comments
const backspace_compare = function(str1, str2) {

  // Current index for evaluation
  let idx1 = str1.length - 1;
  let idx2 = str2.length - 1;

  // While neither index has reached the end of it's string
  while(idx1 >= 0 && idx2 >= 0){

    // valid index after backspaces
    let vIdx1 = validIndex(str1, idx1);
    let vIdx2 = validIndex(str2, idx2);

    // If false, we have backspaced out of the string
    if( !vIdx1 || !vIdx2 ) return false;

    // If the values at each valid index don't match, our strings don't match
    if(str1[vIdx1] !== str2[vIdx2]) return false;

    // If we have reached the last indices at the same time and our values match, return true
    if(vIdx1 === 0 && vIdx2 === 0) return true;

    // If we reach here we have a valid string so far, continue to verify at next unknown index
    idx1 = --vIdx1;
    idx2 = --vIdx2;
  }
}

function validIndex(str, i){
  let valid = i; // track the next valid index;

  // For each backspace the next potentially valid index grows by two ( one for the #, one for the deleted valid char)
  while(str[i] === '#'){
    valid-=2;
    i--;
  }

  // If we have reached the beginning of our string we have nothing left to skip over
  return i < 0 ?  false : valid;
}

```

<br>

- **Comments:**
  - This is a **Two Pointer PLUS Two Pointer** problem, each string requires two pointers.
  - *Pointers:* Two main pointers (one for each string), two secondary pointers (one for each string) used to find the next valid index.
  - *Movement:*  All moving right to left in decreasing order, so as to encounter the backspace first.
<br>

- **Basic Pattern:**
  1. Create two pointers at the last index of each string
  2. Starting at that index find the next valid index
  3. Check if there is a next valid index, if not return false
  4. Check if the valid indices match, if not return false
  5. check if we have reached the last indices, it they match, return true
  6. If we get here and we haven't returned, set the indices to the next elements to be evaluated
 <br>

- **Algorithm:**
  1. Create two pointers at the last index of each string
  2. Starting at that index create a while loop that will run while neither index has reached the end of it's respective string
  3. find the next valid index for each string and set to new pointers
     1. create a variable to track the next valid index, set it to the current index
     2. while the value of the current string at that index is a '#'
        1. set the valid index to the current valid index minus two
        2. decrement the current index by one
     3. If the current index is less than zero, return null, else return the valid index
  4. Check if there is a next valid index, if not return false
  5. Check if the valid indices match, if not return false
  6. check if we have reached the last indices, it they match, return true
  7. If we get here and we haven't returned, set the indices to the next elements to be evaluated