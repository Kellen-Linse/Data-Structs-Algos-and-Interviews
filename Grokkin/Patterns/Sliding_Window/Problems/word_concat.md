# Words Concatenation (hard)

> **Prompt:** Given a **string and a list of words**, find all the **starting indices** of **substrings** in the given string that are a **concatenation of all the given words** exactly **once** without any overlapping of words. (non-overlapping sub-strings hint hint..)
> - **It is given that all words are of the same length.** <- Important!


<br>

- **Example:**

```js
Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".
```
<br>

- **Big O:**
  - Time: `O(n * m * ccLen)`
  - Space: `O(m)`

- **Code:**

```js
// No comments
var findSubstring = function(str, words) {
  let fMap = {}, 
      wordLen = words[0].length,
      concatLen = wordLen * words.length,
      resArr = [];

  for(let word of words){               // O(m)
    fMap[word] = fMap[word] + 1 || 1;
  }

  for(let i = 0; i < str.length - concatLen + 1; i++){             // O(n)
    if( check(i, str, fMap, wordLen, concatLen) ) resArr.push(i);
  }

  return resArr;
};


function check(idx, str, fMap, wLen, ccLen){
  let wordMap = {},
      tempWord = "";

  for(let i = idx; i < idx + ccLen; i++){   // O(ccLen)
    tempWord += str[i];

    if(tempWord.length === wLen){
      if(!(tempWord in fMap)) return false;
      wordMap[tempWord] = wordMap[tempWord] + 1 || 1;
      tempWord = "";
    }
  }

  for(let word in fMap){                            //O(m)
    if(fMap[word] !== wordMap[word]) return false;
  }
  
  return true;
}


// Comments
var findSubstring = function(str, words) {
  let fMap = {}, // Map to hold the frequency of the words in our array
      wordLen = words[0].length,
      concatLen = wordLen * words.length,
      resArr = []; // Array to hold the indices of the correct sub-strings.

  // Built frequency map of words in the words array
  for(let word of words){
    fMap[word] = fMap[word] + 1 || 1;
  }

  // Run check on each index to see if that index is the beginning of a word concatenation.
  // Push the starting indices that return true to the results array.
  for(let i = 0; i < str.length - concatLen + 1; i++){
    if( check(i, str, fMap, wordLen, concatLen) ) resArr.push(i);
  }

  // Return the results array.
  return resArr;
};


function check(idx, str, fMap, wLen, ccLen){
  let wordMap = {},
      tempWord = "";

  // Build up our wordMap
  for(let i = idx; i < idx + ccLen; i++){

    // First build up a word
    tempWord += str[i];

    // Once we have a temp word that is the same length as the words in the given array.
    if(tempWord.length === wLen){
      
      // First check to see if exists in our frequency map, if not return false. This will save us some work if it's not.
      if(!(tempWord in fMap)) return false;

      // If so add its count to our new wordMap;
      wordMap[tempWord] = wordMap[tempWord] + 1 || 1;

      // reset the tempWord so we can use it again.
      tempWord = "";
    }
  }

  // Check to see that the value of every word in our frequency map is equal to that value of the word in our word map.
  for(let word in fMap){
    if(fMap[word] !== wordMap[word]) return false;
  }
  
  // If we get this far we have found a sub-string that is a concatenation of our words array.
  return true;
}

```

<br>

- **Comments:**
  - *Pointers:* Two, one to track the starting index and one to track the values in the sub-string that will build the word map.
  - *Movement:* Both pointers will move left to right, the sub-string pointer will restart at the starting index pointer each iteration, the starting index pointer will move by one each iteration.
  - *Variables:* This problem requires **TWO** maps, one map that tracks the frequency of the words in the given array, and one that holds the words of the current sub-string and how often they appear.
  - Once the two maps are create they are compared against each other to determine if they hold the same words and at the same frequencies.

<br>

- **Basic Pattern:**
  1. Build frequency map of words in the words array.
  2. Run check on each index to see if that index is the beginning of a word concatenation.
  3. Push the starting indices that return true to the results array.


 <br>

- **Algorithm:**
  1. Build frequency map of words in the words array.
  2. Run check on each index to see if that index is the beginning of a word concatenation.
     1. Start by building a word map out of the characters between the current index and the concatenated string length
     2. Make words out of each set of characters that are of length wordLen and add them to the map
        1. If that word isn't in the frequency map, return false
     3. Iterate over the words in the frequency map to verify that the current word is in the newly mad map, and that it exists the same number of times.
        1. If not return false.
     4. If you react the end of that loop, your current sub-string is a valid concatenation of all of the words.
  3. If check returns true, push the starting index to the results array.


