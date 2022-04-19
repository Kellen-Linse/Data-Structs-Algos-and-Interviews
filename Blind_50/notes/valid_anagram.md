# Valid Anagram


### Prompt: 

> Given two strings s and t, return true if t is an anagram of s, and false otherwise.
> An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
<br>

### Example:

> Input: s = "anagram", t = "nagaram"
> Output: true
> <br>

### Solution:

#### What I came up with:

  - Construct a map of **both** inputs, compare both maps.

```js

// @param {string} s
// @param {string} t
// @return {boolean}

var isAnagram = function(s, t) {
    
    // create a map for each input
    let sMap = {};
    let tMap = {};
    
    // map each input to their individual map
    for(let char of s){
        sMap[char] ? sMap[char]++ : sMap[char] = 1;
    }
    for(let char of t){
        tMap[char] ? tMap[char]++ : tMap[char] = 1;
    } 
    
    // check to see if the keys/values in each map are the same, return false if not
    for(let key in sMap){
        if(sMap[key] !== tMap[key]) return false
    }
    for(let key in tMap){
        if(sMap[key] !== tMap[key]) return false
    }

    // return true if no mismatch is found
    return true;
};

```

#### Better Solution:

- Construct a map of **one** input, deconstruct that map using the other input.

```js

var isAnagram = function(s, t) {
    // start by checking to see if the inputs are different lengths
    if (t.length !== s.length) return false;

    // create an object to map the first input
    let sMap = {};
   
    // map the chars in the first input, tracking their totals
    for(let char of s){
        sMap[char] ? sMap[char]++ : sMap[char] = 1;
    }

    // if char doesn't exist in sMap return false, else decrement one from the char value in sMap
    for(let char of t){
        if(!sMap[char]) return false;
        sMap[char]--;
    }   

    // return true if no mismatch is found
    return true;
};

```