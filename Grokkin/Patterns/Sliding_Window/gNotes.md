# Sliding Window: General Notes

- Sliding windows allows us to avoid doing repeated calculations within a given window of an array or string.

- The sliding window technique is often used when we are asked to **find or calculate something among all the *sub-arrays, sub-lists, or sub-strings* of a given size**.
  - Example: `Given an array, find the average of each subarray of ‘K’ contiguous elements in it.`
    - The brute force approach to this problem would result in an `O(n * K)` run time.
    - The sliding window technique can be applied to this problem to reduce the run time to `O(n)`.
<hr>

- There are two main types of sliding window:
  - **Fixed Sized Sliding Window:** Fixed sliding windows involve a window of a specific, set size.
    - Problems where we need to "find the (some given condition) of each subarray of ‘K’ contiguous elements in it.
    - Example: `Given an array, find the average of each subarray of ‘K’ contiguous elements in it.`
  - **Dynamic Sized Sliding Window:** Dynamic sliding windows involve windows that will grow or shrink depending on some condition relevent to the problem.
    - Problems where we need to find the **largest or smallest** sub-array that matches some condition.
    - **Ask yourself under what condition the window should expand, and under what conditions it should contract.**
      - "Ok, I've expanded until I've met my condition, can I now contract and still meet that condition?"
<hr>

- **Hash maps are often used in conjuction with sliding window problems. They are often used as frequency problems, and on harder problems you may even need to make use of more than one.**

- Some common terms you may see:
  - "Overlapping sub-arrays" or "contiguous sub-arrays"
<hr>

- Don't forget when you are finding the length of a sub-array you need to account for arrays being **zero indexed**, that means **you need to add one** `(start - end + 1)` when subtracting the start from the end (assuming that the start is greater than the end).
<hr>

- *Longest* or *Shortest* sub-array/ sub-string problems will **always have a maxLen or minLen variable respectively**
<hr>

- Don't use too large of an example when trying to work through your code, it will cause you to slow down really fast.
  - but also make sure your example is dynamic enough to cover most cases.

<hr>

## Side Notes:

- **Remeber the `in` operator can be used to check for the existance of a key in an object.**
  - Ex:

```js
const someObject = {
  isAnObject: true, 
}

if(isAnObjectProperty in someObject){ console.log('yep') }; // Will console.log 'yep'
if(someOtherProperty in someObject){ console.log('yep') }; // Will NOT console.log 'yep'
```

<br>

- Function hoisting works within within function definitions
  - Not sure it's a good idea... just fyi
  - Ex:

```js
const test = function(){
    printName("Mya");

    function printName(str){
        console.log(str);
    }
}

test(); // logs "Mya" to the console.
```