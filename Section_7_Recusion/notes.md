
# Recursion

## 40: Story Time: Martin and the Dragon

- The idea of recursion is taking one problem and doing it over and over again on a smaller and smaller piece until you hit some end point (base case).

## 41: Why Use Recursion?

> **Recursion:** A process (a function in our case) that **calls itself.**
- It's everywhere.
- Object Traversal
- It is sometimes a cleaner alternative to iteration.

## 42: The Call Stack

- It is a **stack** data structure.
- Any time a function is called it is pushed() onto the stack.
- When JS sees the return keyword, or when the function ends, the compiler will pop() that function off the stack.
- Recursion pushes versions of itself onto the call stack over and over until it hits the base case.

## 43: Our First Recursive Function:

- How recursive functions work: 
  - Invoke the same function with a different input until you reach the base case.
> **Base Case:** The condition when the recursion ends.
- Without the base case, the function will call itself forever (infinite recursion).

- Example:

```js

function countDown(num){
  if(num <=0){
    console.log("Done!');
  }

  console.log(num);
  num--;
  countDown(num); //recursive line
}

```

## 47: Common Recursive Pitfalls

- No base case - infinite recursion
- Forgetting to return or returning the wrong thing
- **Stack Overflow**

## 48: Helper Method Recursion

- Helper method recursion relies on an inner recursive function being called by an outer function

## 49: Pure Recursion

- The function is self contained, no inner helper function
- Shorter, but harder to comprehend.
- Helper Recursion is more straight forward.