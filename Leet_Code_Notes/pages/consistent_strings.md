# Count the Number of Consistent Strings (easy)

> **Prompt:** You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
> - Return the number of consistent strings in the array words.

<br>

## **Example:**

```js
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
```

<br>

## **Big O:**
  - Time: `O(n + m * l)`
  - Space: `O(n)`

<br>

## **Code:**

```js
// No comments
var countConsistentStrings = function(allowed, words) {
    let allowedCount = 0;
    let allowedSet = new Set();

    for(const char of allowed){ // O(n)
        allowedSet.add(char);
    }

    for(const word of words){ // O(m * l)
        let allowedWord = true;
        for(const char of word){
            if(! allowedSet.has(char)){
              allowedWord = false;
              break;
            }
        }
        if(allowedWord) allowedCount++;
    }

    return allowedCount;
};

// Comments
var countConsistentStrings = function(allowed, words) {
    let allowedCount = 0;
    let allowedSet = new Set();

    // Create new set of chars in the allowed string
    for(const char of allowed){
        allowedSet.add(char);
    }

    // For each word, we are going to iterate over it's characters and 
    // check if there is a character in the word that is NOT in our set.
    // If we get through all the characters without finding a mismatched char
    // we will add one to our allowed word count.
    for(const word of words){
        let allowedWord = true;
        for(const char of word){
            if(! allowedSet.has(char)){
              allowedWord = false;
              break;
            }
        }
        if(allowedWord) allowedCount++;
    }

    return allowedCount;
};
```
<br>

## **Basic Pattern:**
  - We first need to create a set consisting of our allowed chars.
  - We then need to iterate over each char in each word and check that it is found in our set.

