# The Coding Interview Bootcamp: Algorithms + Data Structures

## General notes:

- **BIG NOTE: Be careful, sometimes his solutions are NOT optimal!!!**

- In order to run the debugger you have to remember to call your function with some data.

## Mistakes to Watch out for:

- Setting up for loop wrong is an easy place to make a mistake! Especially in a stressful environment.


## 1: Getting Started

  - Interview problems are often really difficult unless you know the specific trick to a given problem.
    - Once you know that specific trick, those hard problems can become quite easy. 
<br>
  - Often, the only way to know that solution is to have seen it before. 
    - The only way to have seen it? 
      - practice practice practice

## 3: String Reversal

##### Prompt: Reverse String

  - Questions to ask:
    - **Do I need to take spaces into consideration?**

  - Easy mistake to make:

```js
// This method will fail, as '  ab  ' will be returned as 'ba' 
// spaces will be removed.

function reverse(str) {
  let returnStr = '';

  for(const char of str){
    // Here we are adding the char BEFORE each current char in the returnStr
    returnStr+=char
  }

  return returnStr;
}
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

##### Using built in methods `split`, `reverse`, and `join`

```js

function reverse(str){
  // split the str into an array (to use reverse)
  // reverse the array (not a method of the string object)
  // join the array back into a string 
  return str.split('').reverse().join('');
}

```
##### reduce()

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

//============ Notated ============

function chunk(array, size) {
  // create results array
  let resultsArr = [];

  // create count variable
  let count = 0;
  // Iterate over array
  while(count < array.length){

    // create an array that will hold a chunk
    let arr = [];

    // add elements to arr in the given size amount
    for(let i = 0; i < size; i++){
      arr.push(array[count]);

      // increment count here, we are still counting every index,
      // we are just doing so as we push it into the chunked array.
      count++;
    }

    // add the correctly sized array to the results array.
    resultsArr.push(arr);
  }

  // return results array
  return resultsArr;
}

```

## 9. Anagrams

#### Notes:

  - **Be careful with your for...of loops vs for...in loops!!**

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

function stringToMap(str){
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
  let mapA = stringToMap(stringA);

  // map the chars of stringB
  let mapB = stringToMap(stringB);

  // compare the values in mapA against mapB
  for(prop in mapA){
    if(mapA[prop] !== mapB[prop]) return false;
  }

  // compare the values in mapB against mapA
  for(prop in mapB){
    if(mapA[prop] !== mapB[prop]) return false;
  }

  return true;
}
```

- EXAMPLE 3: Short, interesting, but inefficient.
  - Use JS methods
  - Clean and Sort, then Compare

```js

const cleanNsort = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort('').join('');

anagrams(stringA, stringB){
  cleanNsort(stringA) === cleanNsort(stringB);
}

```

## 10: Capitalize 

### Remember: STRINGS ARE IMMUTABLE in JS!

#### Prompt:
  - Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.

#### Solution:

  - Example 1: K
    - **O(n)** t&s
    - No built in methods!

```js
function capitalize(str){
  let returnString = '';

  for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(str[i - 1] == ' ' || i === 0){
      char = str[i].toUpperCase();
    } 
    returnString += char;
  }

  return returnString;
}
```
##### Inefficient Solution using Methods: 

  - Example 2: 
    - create words array
    - split input string into array at ' '
    - iterate over words in array
    - add return value of word[0].toUpperCase() and word.slice(1);
    - push that result to words array
    - return words.join(' ');

```js
function capitalize(str){
  const words = [];

  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
```

## Section 11: Steps

#### Prompt:

  - Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!

#### Iterative Solution -K

```js
function steps(n) {

  // loop once for each step
  for(let i = 1; i <= n; i++){
    //create string to print
    let str = '';
    // loop once for length of string
    for(let j = 1; j <= n; j++){
      if(j <= i){
        str+= '#';
      } else {
        str+= ' ';
      }
    }
    console.log(str);
  }
  
}

```

#### Iterative Solution Using Rows and Cols - Video

```js
function steps(n) {

  // loop once for each step
  for(let row = 0; row < n; row++){
    //create string to print
    let str = '';
    // loop once for length of string
    for(let col = 0; col < n; col++){
      if(row <= col){
        str+= '#';
      } else {
        str+= ' ';
      }
    }
    console.log(str);
  }
}

```

#### Recursive Solution - Video

  - Not the recommended route unless you are specifically asked;
  
##### Recursion Tips:

  - Figure out the bare pieces of information to represent your problem
  - Give reasonable defaults to your info
  - Check the base case, return if no work
  - **ALWAYS START WITH A BASE CASE**
  - Do some work
  - call function with new arguments

```js

function printNumber(num){
  // ALWAYS START WITH BASE CASE
  if(num <= 0) return;

  console.log(num);

  // WE MUST MAKE SURE THAT OUR INPUT HAS CHANGED 
  // AND IS TRENDING TOWARDS OUR BASE CASE!
  printNum(num - 1);
}
```

##### "Bare pieces of information"

  - if(row === n) then we have hit the end of our problem
  - if(str has length n) we are at the end of a row
  - if(length of the str is less or equal to the row we are on)
    - add '#' else, ' '

##### Recursive Solution 1: Containing function definitions within one outer function

  - Benefits: 
    - Enclosed functions know about variables within their scope (closure).
    - So, less variables to pass around, less chances for mistakes
  - Disadvantages:
    - Harder to read, modify

```js
// Create String to Print
function steps(n) {

  function printRow(row, n){
    if(row > n) return;
    let str = '';

    function addToStr(pos){
      if(pos > n) return;
      if(pos <= row){
        str+= '#';
      } else {
        str+= ' ';
      }
      addToStr(pos + 1);
    }

    addToStr(1);
    console.log(str);
    printRow(row + 1, n);
  }

  printRow(1, n);
}
```
##### Recursive Solution 2: Containing function definitions within one outer function

  - Benefits: 
    - Easier to read, modify
  - Disadvantages:
    - More variables to pass around, easier to make mistakes.

```js
// create row, represented as string to print
function createString(pos, row, n, str){
  if(pos > n) return str;
  pos <= row ? str+= '#' : str+= ' ';
  return createString(pos + 1, row, n, str);
}

// Print Row from 1 to n;
function printRows(row, n){
  if(row > n) return;
  let str = '';
  console.log(createString(1, row, n, str));
  printRows(row + 1, n);
}

// Print steps
function steps(n) {
  printRows(1, n);
}
```

## Section 12. Two Sided Steps - Pyramid

#### Prompt: 
  - Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the `#` character.  Make sure the pyramid has spaces on both the left *and* right hand sides.

#### Iterative Solution

```js
function pyramid(n) {
  
  // find the length of each row
  let length = n * 2 - 1;

  // find middle, Math.floor((n * 2 - 1) / 2)
  let middle = Math.floor(length / 2);

  
  // loop once for each row in pyramid
  for(let row = 0; row < n; row++){

    // create string to print
    let str = '';

    // loop once for each row in pyramid (to create string of length n) - col
    for(let col = 0; col < length; col++){
      // if(col < middle - row || col > middle + row)
      if(col < middle - row || col > middle + row){
        // add ' ' to string
        str+= ' ';
      } else {
        // else add '#'
        str+= '#';
      }
    }
    // print string
    console.log(str);
  }
}
```

#### Recursive Solution, Separated Functions

```js
function createString(pos, row, n, str){
  // find the length of each row
  let length = n * 2 - 1;

  // find middle of that row
  let middle = Math.floor(length / 2);

  if(pos > length - 1) return str;
  if(pos < middle - row || pos > middle + row){
    str += ' ';
  } else {
    str += '#';
  }
  return createString(pos + 1, row, n, str);
}

// Print Row from 1 to n;
function printRows(row, n){
  if(row > n - 1) return;
  let str = '';
  console.log(createString(0, row, n, str));
  printRows(row + 1, n);
}

// Print steps
function pyramid(n) {
  printRows(0, n);
}
```

## Section 13. Matrix Spiral

#### Prompt:
  - Write a function that accepts an integer N and returns a NxN spiral matrix.

##### My attempt:
  - Close but not functional.

```js
function matrix(n) {
  let res = [];

  for(let i = 0; i < n; i++){
    res.push([]);
  }

  let count = 1;
  let cUB = n;
  let rUB = n;
  let cLB = 0;
  let rLB = 0;
  let r = 0;
  let c = 0;

  while(count <= n*n){

    while( c < cUB){
      res[r][c] = count;
      count++;
      c++;
    }
    c--;
    rLB++;
    r = rLB;

    while(r < rUB){
      res[r][c] = count;
      count++;
      r++;
    }
    r--;
    cUB--;
    c = cUB;

    while(c >= cLB){
      res[r][c] = count;
      count++;
      c--;
    }
    c++;
    rUB--;
    r = rUB;

    while(r >= rLB){
      res[r][c] = count;
      count++;
      r--;
    }
    r++;
    cLB++;
    c = cLB;
  }
  return res;
}
```

#### Solution:

```js
function matrix(n) {
  // Create a results array
  let res = [];

  // Because we are going to be adding to a 2D array we 
  // need to set it up ahead of time.
  for(let i = 0; i < n; i++){
    res.push([]);
  }

  // We need to set up some variables ahead of time to 
  // Track where the beginning and ends of our rows and cols are.
  let count = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startCol <= endCol && startRow <= endRow){

    // Top Row - l to r
    for(let i = startCol; i <= endCol; i++){
      res[startRow][i] = count;
      count++;
    }
    startRow++;

    // Right Col - t to b
    for(let i = startRow; i <= endRow; i++){
      res[i][endCol] = count;
      count++;
    }
    endCol--;

    // Bottom Row - r to l
    for(let i = endCol; i >= startCol; i--){
      res[endRow][i] = count;
      count++;
    }
    endRow--;

    // Left Col - b to t
    for(let i = endRow; i >= startRow; i--){
      res[i][startCol] = count;
      count++;
    }
    startCol++;
  }

  return res;
}
```

```js
// Can picture it like:
function matrix(n) {
  let res = [];

  for(let i = 0; i < n; i++){
    res.push([]);
  }

  let count = 1;
  let sC = 0;
  let eC = n - 1;
  let sR = 0;
  let eR = n - 1;

  while(sC <= eC && sR <= eR){
//      sC->   <-eC
//  v sR [[1, 2, 3],
//        [8, 9, 4],
//  ^ eR  [7, 6, 5]];
  }

  return res;
}
```

## Section 16. Fibonacci

#### Prompt: Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceding two. For example, the sequence [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

##### Iterative Solution:

```js
function fib(n) {

  let last = 0; 
  let current = 1; 
  let total = 1; 

  for(let i = 1; i < n; i++){ 
    total = current + last;
    last = current;
    current = total;
  }

  return total;
}
```

##### Recursive Solution:

  - **Classic example of almost impossible to solve until you have seen it before.**
  - This is an O(2^n) solution! **very bad!**
```js
function fib(n) {
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```
- This is where **Memoization** comes in!

##### Memoized Recursive Solution

```js
function memoFib(n, cache){

  // create cache, or set cache
  let cache = cache || [];

  // if value exists in cache return it
  if(cache[n]) return cache[n];

  // if n < 3 return 1
  if(n < 3) return 1;

  // If we have gotten this far, store return value in cache
  cache[n] = memoFib(n - 1, cache) + (n - 2, cache);

  // return the value just found and stored
  return cache[n];
}
```

#### Memoized Recursive Solution Using Factory Memo Function

```js
// Generic memoizing function, closure
function memoize(fn) {

  let cache = {};
  //...args, defensive coding that allows us to catch all arguments
  return function(...args){
    if(cache[args]) return cache[args];

    // The Function.prototype.apply() method allows you to
    // call a function with a given this value and arguments provided as an array. 
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if(n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// reset fib to be to be the memoized version
fib = memoize(fib);
```

## Section 18: The Queue

##### Note on JS Data Structures

- There are portions of JS that take care of certain Data Structures for you automatically, however you may still have an interviewer ask you to build basic versions of certain data structures. 
- But we will ofter use built in data structures such as arrays, but treat them like queues in JS.
- **We do not have basic Arrays in Javascript**

##### Queues

- First In Last Out
  - **Enqueuing or Adding:** Add to beginning of queue.
  - **Dequeuing or Removing:** Remove from end of queue.

##### DS in JS

- **When we build a data structure in JS, we restrict the methods of the JS data structure we are are working with.**
  - For example:
    - When we build a queue in JS what we are doing is taking an array with lots of methods, and restricting what methods and properties are available.

| Queue  | Array  |
|---|---|
| queue.enqueue(x) -or- queue.add(x)  | array.unshift(x)  | 
| queue.dequeue( )  -or- queue.remove( )  | queue.dequeue()  |

#### Prompt

- **Create a queue data structure.**  The queue should be a class with methods 'add' and 'remove'. Adding to the queue should store an element until it is removed. 

#### Solution:

- The **Queue** Data Structure uses:
  - **array.unshift(val)** to **add** items to the queue
  - **array.pop()** to **remove** items to the queue

```js
class Queue {

  data = [];
  
  peek = () => this.data[this.data.length - 1];
  add = (record) => this.data.unshift(record);
  remove = () => this.data.pop();
}
```

#### Note:
  - **UNSHIFT IS ADD**
  - **UNSHIFT IS ADD**
  - **UNSHIFT IS ADD**
  - **UNSHIFT IS ADD**
  - **UNSHIFT IS ADD**
<br>

  - **SHIFT IS REMOVE**
  - **SHIFT IS REMOVE**
  - **SHIFT IS REMOVE**
  - **SHIFT IS REMOVE**
  - **SHIFT IS REMOVE**
  - **SHIFT IS REMOVE**

## Section 19: Stacks

#### Prompt:
  - **Create a stack data structure.**  The stack should be a class with methods 'push', 'pop', and 'peek'.  Adding an element to the stack should store it until it is removed.

#### Solution:

- The **Stack** Data Structure uses:
  - **array.push(val)** to **add** items to the queue
  - **array.pop()** to **remove** items to the queue

```js
class Stack {

  data = [];
  
  peek = () => this.data[this.data.length - 1];
  push = (record) => this.data.push(record);
  pop = () => this.data.pop();
}
```

Section 20: Stacks and Queues

##### Prompt:
- Make a Queue out of two stacks

##### Solution:

- two cups:
  - fill cup1 (stack1)
  - empty cup1 into cup2 (stack2)
  - take the top value out of cup2
  - empty cup2 into cup1

```js
class Queue {

  constructor(){
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  add = (x) => {
    this.inStack.push(x);
  };

  remove = () => {
    while(this.inStack.peek()) this.outStack.push(this.inStack.pop());
    let returnItem = this.outStack.pop();
    while(this.outStack.peek()) this.inStack.push(this.outStack.pop());
    return returnItem;
  };
  peek = () => {
    while(this.inStack.peek()) this.outStack.push(this.inStack.pop());
    let returnItem = this.outStack.peek();
    while(this.outStack.peek()) this.inStack.push(this.outStack.pop());
    return returnItem;
  };
}
```

## Section 22: Midpoint of a LL

##### Prompt: 
  - Return the 'middle' node of a linked list, without using size or a counter.

##### Solution:
- **Fast and Slow pointers**

```js
function midpoint(list) {
  let fast = list.head;
  let slow = list.head;

  while(fast?.next?.next){
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
```

## Section 23: Circular LL

##### Prompt: 
  - Determine whether a LL is circular.

##### Solution:

```js
function circular(list) {

  let fast = list.head;
  let slow = list.head;

  while(fast?.next?.next){
    fast = fast.next.next;
    slow = slow.next;

    if(fast === slow) return true;
  }

  return false;
}
```
## Section 24: One from Last - LL

##### Prompt: 
  - Given a linked list, return the element n spaces from the last node in the list.

##### Solution:

```js
function fromLast(list, n) {
  let fast = list.head;
  let slow = list.head;
  let count = 0;

  while(fast.next){
    fast = fast.next;
    if(count >= n) slow = slow.next;
    count++;
  }
  return slow;
}
```

## Section 25: Building a Tree

- In the case of the tree, we manipulate the tree by modifying the nodes of the tree, unlike a linked list.

#### Tree

  - Iterative BFS and DFS
  - **The difference between iterative BFS and DFS is that BFS uses and queue and DFS uses a stack!**

```js
class Node {
  constructor(data){
    this.data = data;
    this.children = [];
  }

  add = (data) => 
    this.children.push(new Node(data));

  remove = (data) =>
    this.children = this.children.filter(node => node.data !== data);;
}

class Tree {
  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    // Create and fill queue with node children
    const queue = [this.root];
    //  Visit each node
    while(queue.length){
      // pop node from front of queue
      let currentNode = queue.shift();
      // add the children of current node to queue
      queue.push(...currentNode.children);
      // read data in node
      fn(currentNode);
    }
  }


  traverseDF(fn){
    // Create and fill queue with node children
    const queue = [this.root];
    //  Visit each node
    while(queue.length){
      // pop node from front of queue
      let currentNode = queue.shift();
      // add the children of current node to queue
      queue.unshift(...currentNode.children);
      // read data in node
      fn(currentNode);
    }
  }
}
```

## Tree Width at Level

- Use BFS

#### Code:

```js
    let levelCount = 0;
    let levelArr = [];

    //loop over the queue
    while(queue.length){
      //take out one node at a time
      let node = queue.shift();

      //count the children of each node
      levelCount += node.children.length;

      //add the children of that node to the levelArr
      levelArr.push(...node.children);
    }

    // after counting and adding all nodes at a given level,
    // if there were any nodes at that level
    // add the level count to the count and the nodes to the queue
    if(levelArr.length){
    countArr.push(levelCount);
    queue.push(...levelArr)
    }
    
  }
  return countArr
}
```

## Section 27: BST

- Up to **two** children 
- The value of the **left** child has to have a value that is **less than** it's parent.
- The value of the **right** child has to have a value that is **greater than** it's parent.
- **Binary Tree:**
  - At most two children, but not in a less than, greater than order.

#### Code:

```js
class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data){

    if(data < this.data && this.left){
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if(data > this.data && this.right){
      this.right.insert(data);
    } else if (data > this.data){
      this.right = new Node(data);
    }; 
  }

  contains(data){
    if(data === this.data) return this;
    if(data < this.data && this.left) return this.left.contains(data);
    if(data > this.data && this.right) return this.right.contains(data);
    return null;
  }
}
```

## Section 28: Validating a Binary Search Tree

##### Code

```js
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if(! node) return null;

  if(max !== null && node.data > max) return false;
  if(min !== null && node.data < min) return false;

  if(node.left  && !validate(node.left,  min, node.data))  return false;
  if(node.right && !validate(node.right, node.data, max)) return false;

  return true;
}

//======== with comments ========

function validate(node, min = null, max = null) {
  if(! node) return null;

// these top two statements are checking if the value at a given node
// is larger or smaller than it should be.

    // skip if no max, or if there is a max 
    // but value at a given node is greater than max
    if(max !== null && node.data > max){
      return false;
    }

    // skip if no min, or there is a min
    // but the value at a given node is less than min
    if(min !== null && node.data < min){
      return false;
    } 

// IF THERE IS A FALSE VALUE IT CASCADES UP!

// These bottom two statements check to see if a node exists and checks to 
// validate them

  // if there is a left node, we wil validate it.
  // if the validation results come back false
  // we will return false
  // THE VALUE AT THE LEFT CHILD NODE CANNOT BE BIGGER THAN THE 
  // VALUE OF THE PARENT NODE OR SMALLER THAN THE MIN
  if(node.left && !validate(node.left, min, node.data)){
    return false;
  }

  // if there is a right node, we wil validate it.
  // if the validation results come back false
  // we will return false
  // THE VALUE AT THE RIGHT CHILD NODE CANNOT BE SMALLER THAN 
  // THE VALUE OF THE PARENT NODE OR LARGER THAN THE MAX
  if(node.right && !validate(node.right, node.data, max)){
    return false;
  }

  // if we get to the bottom of the tree and have not found any out of order nodes:
  return true;
}

```

## Section 31: Bubble Sort

- Bubble sort works by dragging the largest numbers to the right side.
- Time: O(n^2) **Bad**

##### Code:

```js
function bubbleSort(arr) {

  // Iterate over the array one time for each item in the array
  for(let i = 0; i < arr.length; i++){

    // Iterate over each item up until i from the last - 1;
    for(let j = 0; j < arr.length - i - 1; j++){

      // If the value at index j is less than the value at j + 1, swap
      if(arr[j] > arr[j+1]) swap(arr, j, j + 1);
    }
  }

   return arr;
}

// swap two values in an array
function swap(arr, idx1, idx2){
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

## Section 32: Selection Sort

- Set index to minimum index, check every other index, if a lesser value is found, set min index to be that value's index. Swap if a new min has been found.

##### Code:

```js
function swap(arr, idx1, idx2){
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {

  // Iterate over each value in the array
  // Here you are starting at what will be the position of the lowest value
  // You will be looking to swap this value if a smaller value is found
  for(let i = 0; i < arr.length; i++){

    // Set the current i to be the index of the lowest
    // known value regardless of the value
    let minIndex = i;

    // iterate from current i + 1
    for(let j = i + 1; j < arr.length; j++){

      // If the value at index j is less than the value at i
      // set minIndex to be j 
      if(arr[j] < arr[minIndex]) min = j;
    }

    // at the end of each check,
    // if a new smallest index was found, 
    // swap the value at i and minIndex
    if(i !== minIndex) swap(arr, i, minIndex);
  }

  // return arr
  return arr
}
```

## Section 33: MergeSort

- Split until each array only has one element, then merge back together in sorted order.

##### Code:

```js
function mergeSort(arr) {

  // base case
  if(arr.length === 1) return arr;

  // find the mid, then create arrays out of the left and right halves
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // call merge, but recursively call mergesort on each half as arguments
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  // Create a results array
  let results = [];

  // While there is both a left and a right array
  // shift the lower of the two first values into the results array.
  while(left.length && right.length){
    if(left[0] < right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // Afterwards, ONLY the left OR the right will have values inside of it!
  // These values have already been sorted, so are **guaranteed** to be larger
  // than the largest value in the results arr **and** in sorted order.
  // so they wil be added after the results array.
  return [...results, ...left, ...right];
}
```