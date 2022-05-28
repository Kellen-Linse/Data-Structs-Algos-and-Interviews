# The Coding Interview Bootcamp: Algorithms + Data Structures

## General notes:

- **BIG NOTE: Be careful, sometimes his solutions are NOT optimal!!!**

- In order to run the debugger you have to remember to call your function with some data.

## Mistakes to Watch out for:

- Setting up for loop wrong is an easy place to make a mistake, especially in an stressful environment.


## 1: Getting Started

  - Problems often are really difficult unless you know the specific trick to a given problem.
    - Once you know that specific trick, those hard problems can become quite easy. 

  - Often, the only way to know that solution is to have seen it before. 
    - The only way to have seen it? 
      - **practice practice practice**

## 3: String Reversal

### Prompt: Reverse String

  - Questions to ask:
    - Do I need to take spaces into consideration?

  - Easy mistake to make:

```js
function reverse(str) {
  let returnStr = '';

  for(const char of str){
    returnStr+=char
  }

  return returnStr;
}

// This method will fail, as '  ab  ' will be returned as 'ba' 
// spaces will be removed.
```

### Solutions:

#### My Solution 

```js
function reverse(str) {

  // create variable to hold return string
  let returnStr = '';

  // iterate over the input string in reverse order
  //concatenate the char at each index to the return string
  for(let i = str.length - 1; i >= 0; i--){
    returnStr += str[i];
  }
  // return reversed string
  return returnStr;
}
```

#### Video Solutions:

1. Using built in methods `split` and `join`

```js

function reverse(str){
  return str.split('').reverse().join('');
}

```

2. Standard for loop
3. reduce

```js

function reverse(str) {
  return str.split('').reduce((a, char) => char + a, '')
}

```

## 4. Palindrome

- Setting up for loops is an easy place to make mistakes!!! 

```js
function palindrome(str) {

  let reversed = '';

	for(let i = 0; i < str.length; i++){
		reversed = str[i] + reversed;
	}

return str == reversed;
}
```

## 5. Reverse and Integer

- **This problem is difficult until you know the trick!!**

#### Prompt: 

  - Given an integer, return an integer that is the reverse ordering of numbers.

#### Tricks:

  - **Easy to do once we turn into a string.**
    - `.toString()` to turn into a string
    - `Math.sign(n)` will return 1, 0 -1, depending on n's sign.
    - `parseInt(string)` will return the number value of a string.

#### Code:

```js

function reverseInt(n){
  let sign = Math.sign(n);
	let intString = n.toString().split('').reverse().join('');
	return parseInt(intString) * sign;
}

```

## 6. MaxChars

#### Prompt: Given a string, return the character that is most commonly used in the string.

#### Variations:

  - "What is the most common char in this string?"
  - "Are string A and B anagrams?"
  - "Does the given string have any repeated chars?"

#### Strategy:

  - Turn our string into an object with the chars as properties and the values as the count
    - i.e. a hashmap 

#### Note:

  - When adding to the map, we can use `||` to simplify the code.
    - Ex:
    ```js

        map[char] = map[char] + 1 || 1; 

        //instead of:

        if(!map[char]){
          map[char] = 1;
        } else {
          map[char]++;
        }

    ```

#### Code: 

```js

function maxChar(str) {
  let maxChar = ['', 0]; // [ char, count]
	let map = {};
	
	for(const char of str){
		map[char] = map[char] + 1 || 1;
		if(map[char] > maxChar[1]) maxChar = [char, map[char]];
  }

return maxChar[0];
}

```

## 7. FizzBuzz

### Rule #1: Don't try to get cute or fancy with it! Just answer it with if/else statement!

  - The more you try to get fancy with this problem, the more you open the door for errors.

```js

function fizzBuzz(n){

  for(let i = 1; i <= n; i++){
      if(n % 3 === 0 && n % 5 === 0){
      console.log('fizzbuzz');
    } else if( n % 5 === 0){
      console.log('buzz')
    } else if( n % 3 === 0){
      console.log('fizz')
    } else {
      console.log(i);
    }
  }
}

```

## 8. Array Chunking

#### Prompt: 
  - Given an array and chunk size, divide the array into many sub arrays where each subarray is of length size

#### Solution 
 - Create a results arr
 - create a count variable
 - create a while loop that runs while count is less than the length of the array
   - create an array variable that is within the while loop
   - create a for loop that runs from 0 to size - 1
     - push the value in the input array at count to the array variable
     - increment count
   - push filled array to results array
 - return results array


```js

function chunk(array, size) {

  let resultsArr = [];
  let count = 0;
  // Iterate over array
  while(count < array.length){
    let arr = [];
    for(let i = 0; i < size; i++){
      arr.push(array[count]);
      count++;
    }
    resultsArr.push(arr);
  }

  return resultsArr;
}

```

## 9. Anagrams

#### Notes:

  - Be careful with your for...of loops vs for...in loops!!

#### Prompt: 

  - Check to see if two provided strings are anagrams of each other.

#### Code:

 - EXAMPLE 1:
   - This code will fail if we consider A === a or if we don't count symbols like '!'

```js
function anagrams(stringA, stringB) {
  //check to see if strings are equal length, return false if not
  if(stringA.length !== stringB.length) return false;

  // map the chars of stringA
  let mapA = {};
  for(char of stringA){
    mapA[char] = mapA[char] + 1 || 1;
  }

  // map the chars of stringB
  let mapB = {};
  for(char of stringB){
    mapB[char] = mapB[char] + 1 || 1;
  }

  // compare the values in mapA against mapB
  for(prop in mapA){
    if(mapA[prop] !== mapB[prop]) return false;
  }

  return true;
}
```

- EXAMPLE 2:

  -  Only consider characters, not spaces or punctuation.  Consider capital letters to be the same as lower case.

  - **Here he uses REGEX and .toLowercase()**

```js

function cleanStr(str){
  return str.replace(/[^\w]/g, '').toLowercase();
}

function mapString(str){
  let map = {};
  for(char of str){
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

function anagrams(stringA, stringB) {

  // Clean Strings
  stringA = cleanStr(stringA);
  stringB = cleanStr(stringB);
  //check to see if strings are equal length, return false if not
  if(stringA.length !== stringB.length) return false;

  // map the chars of stringA
  let mapA = mapString(stringA);

  // map the chars of stringB
  let mapB = mapString(stringB);

  // compare the values in mapA against mapB
  for(prop in mapA){
    if(mapA[prop] !== mapB[prop]) return false;
  }

  return true;
}

```

  - EXAMPLE 3: Short, interesting, but inefficient.

  - Use JS methods
  - Clean, Sort, Compare

```js

const cleanNsort = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort('').join('');

anagrams(stringA, stringB){
  cleanNsort(stringA) === cleanNsort(stringB);
}

```

10: Capitalize 

#### Prompt:
  - Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.

