# Fast and Slow Pointers

<hr>

## General Notes

- The Fast & Slow pointer technique is a pointer algorithm that uses two pointers which move through an array (or linked list) at different speeds. This approach is quite useful when dealing with cyclic linked list or arrays.

- Keywords to look for: **cycle**

<br>

- Be cautious of how the node is defined, mostly watch out for `node.val` vs `node.value`

## Problems

### LinkedList Cycle (easy)

> **Prompt:** Given the **head of a Singly LinkedList**, write a function to determine _if the LinkedList has a cycle in it or not_.

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments
const has_cycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
};

// Comments
const has_cycle = function (head) {
  // Create two pointers
  let slow = head,
    fast = head;

  // We are going to iterate over the LL while we haven't reached the end.
  while (fast && fast.next) {
    // Each loop we will move the pointers, but at different rates.
    // The slow pointer will move one node at a time.
    // The fast pointer will move two nodes at a time.
    slow = slow.next;
    fast = fast.next.next;

    // The fast and slow pointers should never be the same node,
    // if they are, it means that the fast pointer has circled around back on the slow pointer.
    // In that case we will return trues as we have found a loop.
    if (slow === fast) return true;
  }

  // If we reach the end of the list, we return false,
  // as we will never reach the end of the list if there is a loop.
  return false;
};
```

<br>

- **Comments:**
  - _Pointers:_ Two a fast and slow pointer.
  - _Movement:_ The slow pointer will move through the list one node at a time and the fast pointer will move through the list two nodes at a time.
  - _Variables:_ No extra variables (other than pointers).
  - When you have two pointers, both starting at the beginning of a linked list, and moving through the list at two different speeds, one fast, one slow, if your linked list is non-cyclic, those pointers should never meet. However, if there is a cycle in your linked list, once both pointers enter the cycle, eventually your two pointers will point to the same node, we can look for that condition to check to see if there is a cycle.

<br>

- **Basic Pattern:**
  1. Create two pointers, set both pointers to the head of the LL.
  2. Create a loop that will run while we haven't reached the end of the LL.
     1. Set the slow pointer to be the next node after itself.
     2. Set the fast pointer to be two nodes after itself.
     3. If the slow pointer is equal to the fast pointer, return true, as we have found a loop.
  3. If get to the end of the LL, we can return false as there is no cycle within our loop.

#### **Bonus Problem Notes**:

> Length of Cycle:
>
> - Given the head of a LinkedList with a cycle, find the length of the cycle.

<br>

- **Solution Notes:**

  - _We can use the above solution to find the cycle in the LinkedList. Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow pointer again to find the length of the cycle._

- **Code:**

```js
// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

function find_cycle_length(head) {
  // Create pointers to run fast and slow algo
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // found the cycle
      // Return the cycle length
      return calculate_cycle_length(slow);
    }
  }
  // If we reach here there is no cycle
  return 0;
}

function calculate_cycle_length(slow) {
  let current = slow, // Create a new pointer starting at slow
    cycle_length = 0; // Cycle length count

  // Loop until the current pointer circles around back to the slow pointer, counting each step as it goes
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }

  // return the length of the cycle once counted
  return cycle_length;
}
```

### Start of LinkedList Cycle (medium)

> **Prompt:** Given the **head of a Singly LinkedList that contains a cycle**, _write a function to find the starting node of the cycle._

<br>

- **Example:**

![cycle](./resources/cycle.JPG)

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// class Node {
//   constructor(value, next=null){
//     this.value = value;
//     this.next = next;
//   }
// }

// No comments

const find_cycle_start = function (head) {
  let fast = head,
    slow = head,
    cycleLen = null;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      cycleLen = findCycleLen(slow);
      break;
    }
  }
  if (cycleLen === null) return null;

  return findCycleStart(head, cycleLen);
};

function findCycleLen(node) {
  let current = node,
    count = 0;

  while (true) {
    count++;
    current = current.next;
    if (current === node) return count;
  }
}

function findCycleStart(node, length) {
  let slow = node,
    fast = node;

  for (let i = 0; i < length; i++) {
    fast = fast.next;
  }

  while (true) {
    if (slow === fast) return slow;
    fast = fast.next;
    slow = slow.next;
  }
}

// Comments

const find_cycle_start = function (head) {
  // find the length of the cycle
  let fast = head,
    slow = head,
    cycleLen = null;

  // Once you find that a LL contains a cycle, find the length of that cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      cycleLen = findCycleLen(slow);
      break;
    }
  }

  // If no cycle is found, return null
  if (cycleLen === null) return null;

  // Once you know the length of the cycle you can find where the cycle starts
  return findCycleStart(head, cycleLen);
};

//Find and return the length of the cycle
function findCycleLen(node) {
  // Starting at the node where the fast and slow pointers meet, so we know that we are in the cycle,
  // Iterate over the nodes  counting each node as you go
  // Return the count once you are back where you started
  let current = node,
    count = 0;

  while (true) {
    count++;
    current = current.next;
    if (current === node) return count;
  }
}

//Find where the cycle starts
function findCycleStart(node, length) {
  // Create a fast and slow pointer back at the head of the list
  let slow = node,
    fast = node;

  // Move the head pointer up the same number of times as the length of the cycle.
  for (let i = 0; i < length; i++) {
    fast = fast.next;
  }

  // Now we will move both the fast and the slow pointers up at the same rate,
  // because the fast pointer is exactly one cycle length in front of the slow pointer,
  // when the slow pointer reaches the first node in the cycle, the fast pointer will have just
  // completed one loop of the cycle. At this point slow and fast will be the same node, the first
  // node in the cycle, we can return this node as the solution to the problem.
  while (true) {
    if (slow === fast) return slow;
    fast = fast.next;
    slow = slow.next;
  }
}
```

<br>

- **Comments:**
  - _Pointers:_ A fast and slow pointer to find the cycle. A current pointer to find the length of the cycle. Two pointers one pointer a cycles length in front of the other pointer to find the start of the cycle.
  - _Movement:_ To find the cycle, the slow pointer moves at one node per iteration while the fast pointer moves at two nodes per cycle towards the end of the list. To find the length, the current pointer moves around the cycle one node per iteration. To find the start both pointers move at one node per iteration.
  - _Variables:_ One extra variable to count the length of the cycle.

<br>

- **Basic Pattern:**
  1. Find if there is a cycle
  2. Once a cycle is found, find the length of the cycle.
  3. Start two pointers at the head of the LL, then move one pointer up by the length of the cycle, now move both pointers by one each iteration until they meet.
  4. Return the node where they meet, that is the start of the cycle.

<br>

- **Algorithm:**

  1. Create two pointers (fast and slow) and a variable to hold the length of the cycle.
  2. Loop over the LL while the node at the fast pointer and the node in front of it is still defined.
     1. If the fast and slow pointers are pointing to the same node we have found a cycle.
     2. From that node we can send out a current pointer around the loop
        1. Here we will move the current node one node at a time and count each node until it gets back to the node it started at, that count will be the length of the cycle.
     3. Once we have that length we can break out of the loop.
  3. Now we can create two pointers that will both start at the head of our LL.
     1. We will begin by moving one of the two pointer up by the length of the cycle we just found.
     2. Then we can loop over our LL moving both pointers by one each time through the loop.
     3. Once the both pointers are pointing to the same node, we have found the start of our LL.
  4. We can return that node, it is the start of our cycle.

- **Alternative Code:**

```js
// This solution is much simpler, it still runs in O(n) time, but uses O(n) space.

const find_cycle_start = function (head) {
  // Create a new set using the built in JS Set object.
  let nodeSet = new Set();

  // Creat a pointer that will track the current node we are examining.
  let current = head;

  // Iterate over the linked list
  while (current) {
    // If the current node is already in our set, we return that node, as the first node we see for a second time will be the first node in our cycle.
    if (nodeSet.has(current)) return current;

    // Add the current node to our set as it has not been seen yet.
    nodeSet.add(current);

    // Move our current pointer to the next node in the list.
    current = current.next;
  }

  // Here we are returning the head, as that is what the problem requires us to do if no cycle is found, this could also be false, or -1, or null... it is whatever the problem requires us to return to signal that theere is no cycle.
  return head;
};
```

<br>

### Happy Number (medium)

> **Prompt:** Write an algorithm to determine if a number n is a **'happy number'**.
>
> - Starting with any positive integer, _replace the number by the sum of the squares of its digits_.
> - Repeat the process until the **number equals 1 (where it will stay)**, or it **loops endlessly in a cycle** WHICH DOES NOT INCLUDE 1.
> - Those numbers for which this process ends in 1 are happy.

<br>

- **Example:**

```js

// Explanation 1:
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

//Explanation 2:
Input: n = 2
Output: false
```

<br>

- **Big O:**

  - Time: **`O(logN)`**
  - Space: `O(1)`

- **Code:**

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
    if (fast === 1) return true;
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
  // Here we are creating two "pointers" that are going to move through possibly solutions at different rates, the slow, one solution at a time and the fast through two at a time.
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

  while (num > 0) {
    // Find the current last digit by taking the number modus 10. E.g. 23 % 10 === 3
    const singleDigit = num % 10;

    // Subtract the last digit from the number, then devide by 10. E.g. 23 - 3 = 20, 20/10 = 2;
    num = (num - singleDigit) / 10;

    // Add the square of the single digit to the total sum.
    squaredSum += singleDigit ** 2;
  }

  return squaredSum;
}
```

<br>

- **Comments:**
  - _Pointers:_ Not so much pointers, you will be using two variables that will act as a "fast and slow pointers," but will actually just hold the results of calling the helper function. The "slow" pointer will hold the results of running the function once, and the "fast" will hold the results of calling the helper function on the results of calling the helper function. (It helps to look at the code for this one).
  - _Movement:_ In attempting to find if a number is "happy", the results of looking will create a cycle or just repeat 1 over and over again. If there is a loop calling the function twice over on itself will produce the same results as calling the function once, just twice as fast, and jumping passed one of the results. Eventually, if you are in a loop, the fast and slow pointers will move around until they are the same number, this is what we are looking for.
  - _Variables:_ No vars in main function, there is one extra var used in the helper function to track the squared sum.
  - This is an **implicit LinkedList** problem. Implicit meaning we don't have actual linked nodes and pointers, but the data does still form a LinkedList structure. The starting number is the head "node" of the list, and all the other numbers in the chain are nodes.

<br>

- **Basic Pattern:**

  1. Create two variables that will track the fast and slow values.
  2. Create a infinite loop
     1. Set slow equal to the sum of it's values squared.
     2. Set fast equal to the sum of it's values squared, then those values squared and summed.
     3. If the value of fast is equal to one, the number is happy, return true.
     4. If the value of fast is equal to the value of slow, the number is not happy, return false.

  - Find Squared Sum: 1. Create a variable to hold the squared sum. 2. Loop while the number (variable holding the input number originally) is greater than 0. 1. Find and store the current right most digit by taking the number modus 10. 2. Set the number to be equal to itself stubtracted by that right most digit, and then divide by 10. 3. Add the square of the right most digit to the squaredSum variable. 3. Return the squared sum.
    <br>

#### **Alternate Solutions**: Using Hashmap and While Loop

```js
const find_happy_number = function (num) {
  let numSet = new Set();

  while (num !== 1 && !numSet.has(num)) {
    numSet.add(num);
    num = digitsToSquaredSum(num);
  }

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
    if (sum === 1) return true;
    if (numSet.has(sum)) return false;
    numSet.add(sum);
    const squaredSum = digitsToSquaredSum(sum);
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

### Middle of the LinkedList (easy)

> **Prompt:** Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.

<br>

- **Example:**

```js
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4
```

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Comments
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_middle_of_linked_list = function (head) {
  // Create two pointers at the start of the LL.
  let slow = head,
    fast = head;

  // Iterate over the LL while the fast pointer hasn't reached the end of the list.
  while (fast && fast.next) {
    // Move the pointers down the list, the slow one node at a time and the fast two nodes at a time.
    slow = slow.next;
    fast = fast.next.next;
  }

  // Return the slow pointer, it will be half way down the list when the fast pointer reaches the end.
  return slow;
};
```

<br>

- **Comments:**
  - See code comments

### Palindrome LinkedList (medium)

> **Prompt:** Given the head of a Singly LinkedList, _write a method to check if the LinkedList is a palindrome or not_.
>
> - Your algorithm should **use O(1), constant space**
> - **The input LinkedList should be in the original form once the algorithm is finished.**
> - The algorithm should run in **O(N) time complexity** where ‘N’ is the number of nodes in the LinkedList.

<br>

- **Example:**

```js
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true
```

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// No comments
const is_palindromic_linked_list = function (head) {
  let fast = head,
    mid = head;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }

  let reversedHead = reverse(mid);
  let copyReversedHead = reversedHead;

  while (head && reversedHead) {
    if (head.value !== reversedHead.value) break;
    head = head.next;
    reversedHead = reversedHead.next;
  }
  reverse(copyReversedHead);

  if (head !== null || reversedHead !== null) return true;
  return false;
};

function reverse(head) {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// Comments
const is_palindromic_linked_list = function (head) {
  // Find the middle of the linked list
  let fast = head,
    mid = head;

  while (fast && fast.next) {
    mid = mid.next;
    fast = fast.next.next;
  }

  // Reverse from the middle of the linked list to the end
  let reversedHead = reverse(mid);

  // Save a reference to the head of the reversed portion, we will need to switch it back at the end
  let copyReversedHead = reversedHead;

  // Iterate over the first half of the linked list and compare the values at each node.
  // If the nodes don't match, it means either that we have found two nodes that are not the same.
  // We cannot return false yet, because the prompt states the list "should be in the original form once the algorithm is finished."
  // We will break out of the loop if the nodes don't match or if the one of the heads is null.
  while (head && reversedHead) {
    if (head.value !== reversedHead.value) break;
    head = head.next;
    reversedHead = reversedHead.next;
  }

  // Here we are reversing the second half of the linked list back to it's original state.
  reverse(copyReversedHead);

  // Now we check to see if the reverseHead reached the end of it's list when we were comparing.
  // Either it reached the end of it's list or it stopped when it encountered a mismatched value.
  if (!reversedHead) return true;

  // If we have reached here the list is not a palindrome.
  return false;
};

// Can't use recursive, we need O(1) space
function reverse(head) {
  // Create a previous node.
  let prev = null,
    curr = head;

  // Iterate until we get to the end of the list.
  while (curr) {
    // Create a next pointer and set it to the current pointers next node.
    let next = curr.next;

    // Now set the current nodes next to the prev node (which will start with null, since the head is now the end it will point to null).
    curr.next = prev;

    // Now we will set the prev to be the current node as it will be the next one to be pointed to.
    prev = curr;

    // Finally we will set current to be the node currently in next, as it is the next node to be evaluated.
    curr = next;
  }

  // The last time we set prev it will be what was the last node in the original list and is now the head of the reversed list.
  return prev;
}
```

<br>

- **Comments:**
  - _Pointers:_ This problem uses several different pointers and of different types. We first use a fast and slow pointer to find the center of the LL. We then use two head pointers to point to the heads of the start of the list and the reversed portion. Finally, we will use a pointer to the original head of reversed portion of the list.
  - _Movement:_ The first two pointers move in a fast and slow pattern to find the center of the linked list. The two heads of the list portions move in tandem down their respective lists. The second copy of the head of the reversed portion of the list is used to tell the reverse function where to start.
  - _Variables:_ Only pointers are used in the main function, two temp variables are used in the reverse function.

<br>

- **Basic Pattern:**
  1. Find the middle of the linked list.
  2. Reverse the second half of the LL.
  3. Compare the nodes in each list.
  4. Reverse the second half of the LL back to it's original order.
  5. Return the results of the comparison.

<br>

- **Algorithm:**
  1. Find the middle of the linked list.
  2. Reverse from the middle of the linked list to the end.
  3. Save a reference to the head of the reversed portion, we will need to switch it back at the end.
  4. Iterate over the first half of the linked list and compare the values at each node.
     1. If the nodes don't match, it means that we have found two nodes that are not the same,
        1. here we will **break** the loop, NOT RETURN, WE NEED TO REVERSE THE LIST BACK TO PROPER ORDER FIRST (as per the prompt).
  5. Reverse the second half of the LL to it's orginal state.
  6. Check if the original pointer to the head of the reversed second half the LL, is equal to null.
     1. If so, it means we reached the end of our comparison without finding a mismatch, so we can **return true**.
  7. If we did not return true from the last line, it means a mismatch was found, so we **return false**.

<br>

### Rearrange a LinkedList (medium)

> **Prompt:** Given the head of a Singly LinkedList, write a method to **modify the LinkedList** such that **the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.** So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.
>
> - Your algorithm should **not use any extra space** and the input LinkedList should be modified in-place.

<br>

- **Example:**

```js
Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
```

<br>

- **Big O:**

  - Time: `O(n)`
  - Space: `O(1)`

- **Code:**

```js

class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

// No Comments

var reorderList = function(head) {

  // Find the middle of the LL.
  let mid = findMid(head);

  // Reverse the second half of the LL.
  let revHead = reverse(mid);

  // Create pointers at the head of each half of the list.
  let curr = head,
      revCurr = revHead;

  // Combine the two halfs.
  while(revCurr){
    let next = curr.next;
    let revNext = revCurr.next;
    curr.next = revCurr;
    revCurr.next = next;
    curr = next;
    revCurr = revNext;
  }

  // If at the end of the rearanging, there is still a node at the current pointer,
  // then we need to point that node towards null, as it is the last node in our list.
  if (curr) curr.next = null;
}

function findMid(head){
    let fast = head, slow = head;

    while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    }

    return slow;
}

function reverse(node){
  let prev = null;
  let curr = node;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Comments
var reorderList = function(head) {

  let mid = findMid(head);
  let revHead = reverse(mid);

  let curr = head,
      revCurr = revHead;

  while(revCurr){
    let next = curr.next;
    let revNext = revCurr.next;
    curr.next = revCurr;
    revCurr.next = next;
    curr = next;
    revCurr = revNext;
  }

  if (curr) curr.next = null;
}

function findMid(head){
    let fast = head, slow = head;

    while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    }

    return slow;
}

function reverse(node){
  let prev = null;
  let curr = node;

  while(curr){
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```

<br>

- **Comments:**
  - Before you can solve this problem, you first must know how to **find the middle of a linked list**, **reverse a linked list**, and **merge two linked lists**.
  - Once those the middle is found and the second half is reversed, it is just a matter of zipping the two lists together.
  - The trick is gitting the sequence correct for zipping them together and knowing that you must account for pointing the last node to null depending on whether the list is an odd or even length.

<br>

- **Basic Pattern:**
  1. Find the middle of the LL.
  2. Reverse the second half of the LL.
  3. Combine the two halfs of the linked list in order.
  4. If the curr pointer still has a node it is pointing to, point that nodes next value to null.

<br>

- **Algorithm:**
  1. Find the middle of the LL.
  2. Reverse the second half of the LL.
  3. Create two pointers, one to point to the head of each half of the list (curr = head, revCurr = revHead).
  4. while there exists a node in the reverse current pointer (revCurr), we are going to run our while loop.
     1. Create two pointers to point the the next node in each list (next and revNext).
     2. Set the curr nodes next pointer to the revCurr node.
     3. Set the revCurr nodes next pointer to the next pointer we just created.
     4. Set curr and revCurr to be next and revNext respectively.
  5. Once out of the while loop, we need to check if there still exists a node at our curr pointer,
     1. If so, we will point it's next pointer to null as it is the last node it our list.
  6. We are modifying the list in place, so we do not return anything.

<br>

### Cycle in a Circular Array (Medium)

> **Prompt:**
> We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:
>
> - 1. If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
> - 2. If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
>
> Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

<br>

- **Example:**

```js
Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
```

<br>

- **Big O:**

  - Time: `O(N^2)`
  - Space: `O(1)`

- **Code:**

```js
// No comments
const circular_array_loop_exists = function (arr) {
  for (i = 0; i < arr.length; i++) {
    let pos = arr[i] >= 0;
    let slow = i,
      fast = i;

    while (true) {
      slow = findNext(arr, pos, slow);
      fast = findNext(arr, pos, fast);
      if (fast !== -1) fast = findNext(arr, pos, fast);

      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    if (slow === fast && slow !== -1) return true;
  }
  return false;
};

function findNext(arr, pos, currIdx) {
  let curSign = arr[currIdx] >= 0;

  if (pos !== curSign) return -1;

  let nextIdx = (currIdx + arr[currIdx]) % arr.length;
  if (nextIdx < 0) nextIdx += arr.length;
  if (nextIdx === currIdx) nextIdx = -1;

  return nextIdx;
}

// Comments
const circular_array_loop_exists = function (arr) {
  // Iterate over the array
  for (i = 0; i < arr.length; i++) {
    // Check whether the current value is positive or negative
    let pos = arr[i] >= 0;

    // Create fast and slow pointers that will move through the array starting at the current index.
    let slow = i,
      fast = i;

    // As we move through the array,
    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = findNext(arr, pos, slow);

      // move one step for fast pointer
      fast = findNext(arr, pos, fast);

      // move another step for the fast pointer
      if (fast !== -1) fast = findNext(arr, pos, fast);

      // If we have found a reason to break early or we have completed a cycle, exit the loop
      // This line encompases all conditions possible, so one option will be hit to leave the loop eventually.
      if (slow === -1 || fast === -1 || slow === fast) break;
    }

    // If when we exit the loop, slow is equal to fast,
    // (and it is not because they are both equal to -1)*
    // *slow and fast could be used interchangeably here
    // return true as we have found a cycle.
    if (slow === fast && slow !== -1) {
      return true;
    }
  }

  // If we reach the end of the array and we have not found a cycle, return false.
  return false;
};

// Here we are finding the next valid, or return -1.
// -1 will never be a valid index, so we return it if we find a non-cycle
function findNext(arr, pos, currIdx) {
  // Check the sign of the value at the current index.
  let curSign = arr[currIdx] >= 0;

  // If the sign of the current value is not the same as the sign of the first value we started with,
  // we have found a switch in direction, so we return -1;
  if (pos !== curSign) return -1;

  // Find the next index: add current index and the value at that index,
  // then take the modulo of that value and the length of the array.
  // If the sum if the first value is negative, the value at nextIndex will be negative
  let nextIdx = (currIdx + arr[currIdx]) % arr.length;

  // If the nextIdx is negative we need to wrap around
  if (nextIdx < 0) nextIdx += arr.length;

  // one element cycle, return -1
  if (nextIdx === currIdx) nextIdx = -1;

  // return the next valid index if we get to this point.
  return nextIdx;
}
```

<br>

- **Comments:**
  - This problem is tricky, it requires a lot of thought towards the different conditions that the problem can run into.
  - Making use of a secondary function to find the next index makes this problem more manageable.
  - The trick with the secondary function is to also check whether the next index is valid and return -1 if an invalid index is found. 
    - -1 will never be a valid index, so it is a safe return value to indicate an invalid index has been found.
  - This problem makes use of an infinite loop, containing conditions that will eventually always be reached, at that point we will make use of the `break` keyword to exit the loop.
  - If when we exit the loop, slow is equal to fast, we need to check that it is not the case that they are equal because they are both invalid.
  - We need to account for any of the values being greater than the amount remaining in the array, and for the case that it is even greater than the length of the array, we can use the modulo operator.
    - `let nextIdx = (currIdx + arr[currIdx]) % arr.length;`
  - We also need to account for if the potential cycle is moving in the negative direction: 
    - `if (nextIdx < 0) nextIdx += arr.length;`

<br>

- **Basic Pattern:**
  1. Iterate over the array one index at a time.
  2. For each index create a fast and slow pointer starting at the current index.
  3. Loop over the array, find the next index for each the slow and the fast pointers.
  4. Check if the next indices are valid, invalid, or a cycle has been found.
  5. If a cycle has been found return true. If we reach the end of the array, return false. 

<br>

- **Algorithm:**

_Main function:_

1. Create a for loop to iterate over the array on index at a time, starting at the 0th index.
   1. Check the sign of the current index, storing the result in a variable, true for positive.
   2. Create a fast and slow variable and set them to be the current index.
   3. Create a while loop with a true condition, such that it will run until something inside the loop breaks it.
      1. Run the findNext function on the current slow pointer variable, set slow to be the returned value.
      2. Run the findNext function on the current fast pointer variable, set fast to be the returned value.
      3. If the findNext function did not returned -1, run the findNext function on the current fast pointer variable, again and set fast to be the returned value.
      4. If either the fast or slow variable is set to -1, or the fast and slow variable are equal to each other, break out of the loop.
   4. If when we exit the loop, slow is equal to fast, and it is not because they are both equal to -1, return true as we have found a cycle.
2. If we reach the end of the for loop and we have not found a cycle, return false.

_findNext function:_

1. Start by checking the sign of the value at the passed in index.
2. If that sign is not the same as the sign of the value at the current index of the outer for loop, return -1, as we have reversed directions.
3. Next we will find the next index by taking the value at the current index and adding to the current index, we will then take that value mod the length of the array, we will set this value to be the next index.
4. If the value is negative we must subtract it from the length of the array as the current direction is moving back to front.
5. If the current index is equal to the next index
