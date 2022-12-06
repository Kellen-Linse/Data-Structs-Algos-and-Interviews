

# Shortest Word Distance II (medium)

> **Prompt:** **Design a data structure** that will be initialized with a string array, and then it should answer queries of the shortest distance between two different strings from the array.
> 
> Implement the WordDistance class:
>   - WordDistance(String[] wordsDict) initializes the object with the strings array wordsDict.
>   - int shortest(String word1, String word2) returns the shortest distance between word1 and word2 in the array wordsDict.

<br>

## **Example:**

```js
Input
["WordDistance", "shortest", "shortest"]
[[["practice", "makes", "perfect", "coding", "makes"]], ["coding", "practice"], ["makes", "coding"]]
Output
[null, 3, 1]

Explanation
WordDistance wordDistance = new WordDistance(["practice", "makes", "perfect", "coding", "makes"]);
wordDistance.shortest("coding", "practice"); // return 3
wordDistance.shortest("makes", "coding");    // return 1
```

<br>

## **Big O:**
  - Time: `O(n)`
  - Space: `O(1)`

<br>

## **Code:**

```js
// No comments
/**
 * @param {string[]} wordsDict
 */
var WordDistance = function(wordsDict) {
    this.wordsDict = wordsDict; 
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
       let shortestDist = Infinity,
        lastWord1 = null,
        lastWord2 = null;

    for(let i = 0; i < this.wordsDict.length; i++){
        if(this.wordsDict[i] === word1) lastWord1 = i;
        if(this.wordsDict[i] === word2) lastWord2 = i;

        if(lastWord1 !== null && lastWord2 !== null){
            shortestDist = Math.min(shortestDist, Math.abs(lastWord1 - lastWord2));
        }   
    }

    return shortestDist === Infinity ? null : shortestDist;
};


// Comments
var WordDistance = function(wordsDict) {
    this.wordsDict = wordsDict; 
};

WordDistance.prototype.shortest = function(word1, word2) {
       let shortestDist = Infinity,
        lastWord1 = null,
        lastWord2 = null;

    for(let i = 0; i < this.wordsDict.length; i++){
        if(this.wordsDict[i] === word1) lastWord1 = i;
        if(this.wordsDict[i] === word2) lastWord2 = i;

        if(lastWord1 !== null && lastWord2 !== null){
            shortestDist = Math.min(shortestDist, Math.abs(lastWord1 - lastWord2));
        }   
    }

    return shortestDist === Infinity ? null : shortestDist;
};

```
<br>

## **Comments:**
  - This is the same problem as the Shortest Word I, except the structure is different.


<br>

## **Similar Problems:**
- [244. Shortest Word Distance I](shortest_word.md)
- [244. Shortest Word Distance III](shortest_word_iii.md)