# Happy Number (medium)

> **Prompt:** Write an algorithm to determine if a number n is a **'happy number'**.
>
> - Starting with any positive integer, _replace the number by the sum of the squares of its digits_.
> - Repeat the process until the **number equals 1 (where it will stay)**, or it **loops endlessly in a cycle** WHICH DOES NOT INCLUDE 1.
> - Those numbers for which this process ends in 1 are happy.

<br>

### **Example:**

```js

// Explanation 1:
Input: n = 23
Output: true
Explanation:
4 + 9 = 13
1 + 9 = 10
1 + 0 = 1

//Explanation 2:
Input: n = 2
Output: false
```

<br>

### **Big O:**

  - Time: **`O(logN)`**
  - Space: `O(1)`

<br>

### **Code:**

```js
/**
 * @param {number} n
 * @return {boolean}
 */

// No comments

var isHappy = function (num) {
  let slow = num,
      fast = num;

  while (true) {
    slow = squaredSum(slow);
    fast = squaredSum(squaredSum(fast));
    if (fast === 1)    return true;
    if (slow === fast) return false;
  }
};

function squaredSum(num) {
  let squaredSum = 0;

  while (num > 0) {
    const singleDigit = num % 10;
    num = (num - singleDigit) / 10;
    squaredSum += singleDigit ** 2;
  }

  return squaredSum;
}

// Comments

var isHappy = function (num) {
  // Here we are creating two "pointers" both will start at the given number.
  // Both are going to move through solutions at different rates, the slow, one solution at a time and the fast through two solutions at a time.
  let slow = num,
     fast = num;

  // We are going to loop until one of two conditions are two, we will ALWAYS meet one of those conditions.
  while (true) {
    slow = squaredSum(slow); // Here the slow is checking one squared sum at a time.
    fast = squaredSum(squaredSum(fast)); // Here fast is checking the squared sum of the squared sum.
    if (fast === 1) return true; // If a 1 is found we have found a happy number.
    if (slow === fast) return false; // If the fast and slow are the same that means we entered a cycle, and therefore the number is not a happy number.
  }
};

function squaredSum(num) {
  // Create a variable to hold our squared sum as we add together the square of each digit.
  let squaredSum = 0;

  // num will go to 0 as digits are taken away
  while (num > 0) {
    // Find the current last digit by taking the number mod 10. 
    // Ex: 23 % 10 === 3
    const singleDigit = num % 10;

    // Subtract the last digit from the number, then divide by 10. 
    // Ex: 23 - 3 = 20 --> 20/10 = 2;
    num = (num - singleDigit) / 10;

    // Add the square of the single digit to the total sum.
    squaredSum += singleDigit ** 2;
  }

  return squaredSum;
}
```

<br>

### **Comments:**
  - _Pointers:_ Not so much pointers, you will be using two variables that will act as a "fast and slow pointers," but will actually just hold the results of calling the helper function. The "slow" pointer will hold the results of running the function once, and the "fast" will hold the results of calling the helper function on the results of calling the helper function. (It helps to look at the code for this one).
  - _Movement:_ In attempting to find if a number is "happy", the results will create a cycle or just repeat 1 over and over again. If there is a loop calling the function twice over on itself will produce the same results as calling the function once, just twice as fast, and jumping passed one of the results. Eventually, if you are in a loop, the fast and slow pointers will move around until they are the same number, this is what we are looking for.
  - _Variables:_ No vars in main function, there is one extra var used in the helper function to track the squared sum.
  - This is an **implicit LinkedList** problem. Implicit meaning we don't have actual linked nodes and pointers, but the data does still form a LinkedList structure. The starting number is the head "node" of the list, and all the other numbers in the chain are nodes.

<br>

### **Basic Pattern:**

  1. Create two variables that will track the fast and slow values.
  2. Create a infinite loop
     1. Set slow equal to the sum of it's values squared.
     2. Set fast equal to the sum of it's values squared, then, those values squared and summed.
     3. If the value of fast is equal to one, the number is happy, return true.
     4. If the value of fast is equal to the value of slow, the number is not happy, return false.
 <br>

 1.  Find Squared Sum: 
     1. Create a variable to hold the squared sum. 
     2. Loop while the number is greater than 0.
     3. Find and store the current right most digit by taking the number mod 10. 
     4. Set the number to be equal to itself subtracted by that right most digit, then divide by 10.
     5. Add the square of that digit to the squaredSum variable.
     6. Return the squared sum.

<br>

### **Alternate Solutions**: Using Hashmap and While Loop

```js
// No Comments
const find_happy_number = function (num) {
  let seenSet = new Set();

  while (num !== 1 && !seenSet.has(num)) {
    seenSet.add(num); 
    num = digitsToSquaredSum(num);
  }
  return num === 1;
};

// Comments
const find_happy_number = function (num) {

  // Create a set to hold all seen numbers
  let seenSet = new Set();

  // While the current number is not equal to one and the number hasn't already been seen.
  while (num !== 1 && !seenSet.has(num)) {

    // Add the number to our set as a seen number
    seenSet.add(num);

    // Square the digits 
    num = digitsToSquaredSum(num);
  }

  // once we reach here, we have found a number that has already been seen or the number 1
  // If that number is 1, return true, if not we have found a cycle.
  return num === 1;
};

function digitsToSquaredSum(num) {
  let squaredSum = 0;

  while (num > 0) {
    const singleDigit = num % 10;
    num = (num - singleDigit) / 10;
    squaredSum += singleDigit ** 2;
  }
  return squaredSum;
}
```

<br>

#### **Alternate Solution:** Using Hashmap and Recursion

```js
const find_happy_number = function (num) {
  let numSet = new Set();

  function happyChecker(sum) {

    // Base cases
    if (sum === 1) return true;
    if (numSet.has(sum)) return false;

    // logic
    numSet.add(sum);
    const squaredSum = digitsToSquaredSum(sum);

    // return and recursive call, 
    // once we hit a base case the stack will collapse and return that value
    return happyChecker(squaredSum);
  }

  return happyChecker(num);
};

function digitsToSquaredSum(num) {
  let squaredSum = 0;

  while (num > 0) {
    const singleDigit = num % 10;
    num = (num - singleDigit) / 10;
    squaredSum += singleDigit ** 2;
  }
  return squaredSum;
}
```