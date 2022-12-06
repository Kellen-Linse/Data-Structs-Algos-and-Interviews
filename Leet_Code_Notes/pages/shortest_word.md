# Shortest Word Distance (easy)

> **Prompt:** Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.
> - `word1 != word2`

<br>

## **Example:**

```js
Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
```

<br>

## **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

## **Code:**

```js
// No comments
var shortestDistance = function(wordsDict, word1, word2) {

    let shortestDist = Infinity,
        lastWord1 = null,
        lastWord2 = null;

    for(let i = 0; i < wordsDict.length; i++){
        if(wordsDict[i] === word1) lastWord1 = i;
        if(wordsDict[i] === word2) lastWord2 = i;

        if(lastWord1 !== null && lastWord2 !== null){
            shortestDist = Math.min(shortestDist, Math.abs(lastWord1 - lastWord2));
        }   
    }

    return shortestDist === Infinity ? null : shortestDist;
};

// Comments
var shortestDistance = function(wordsDict, word1, word2) {

    let shortestDist = Infinity,
        lastWord1 = null,
        lastWord2 = null;

    // Iterate over the wordsDict
    for(let i = 0; i < wordsDict.length; i++){

        // Store the index of the last time word1 or word2 was seen
        if(wordsDict[i] === word1) lastWord1 = i;
        if(wordsDict[i] === word2) lastWord2 = i;

        // If we have seen at least one instance of each word,
        // we can check the distance between them.
        // If the distance is shorter than the shortest known, save it as the shortest.
        // We want to use Math.abs because either word can be in front of the other.
        if(lastWord1 !== null && lastWord2 !== null){
            shortestDist = Math.min(shortestDist, Math.abs(lastWord1 - lastWord2));
        }   
    }

    return shortestDist === Infinity ? null : shortestDist;
};
```
<br>

## **Similar Problems:**
- [244. Shortest Word Distance II](shortest_word_ii.md)
- [244. Shortest Word Distance III](shortest_word_iii.md)