# Algorithms and Problem Solving Patterns - Problem Solving Patterns

## 26: Intro to Problem Solving Patterns

- The section covers **Some** common patterns and approaches, but it is not exhaustive.

## 27: Frequency Counter Pattern

- This pattern uses objects or sets to collect values/frequencies of values

> This can often help avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings.

- **Frequency Counter Example:** [HERE](https://replit.com/@kellenlinse/Frequency-Counter#index.js)
- **Anagram Example:** [Here](https://replit.com/@kellenlinse/Anagram#index.js)

- `'/^[a-zA-Z]/+$'.test(word)`

## 30: Multiple Pointers

- Create **pointers** or values that correspond to an index or position and move towards the beginning, end, or middle, based on a certain condition.

- **very** efficient for solving problems with minimal space complexity.
- Can make problems that would otherwise be O(n<sup>2</sup>) and solve them with O(n) time.

- **Unique Values Example:** [Here](https://replit.com/@kellenlinse/countUniqueValues-Multiple-Pointers#index.js)

## 33: Sliding Window Pattern

- Used when you have an array or a string and you are looking for a **continuous subset** of that data.
- <br>
- This pattern involves creating a window which can either be an array or a number, from one position to another.
- Depending on a certain condition the window either increases or closes (and a new window is created)

- **maxSubArraySum Example:** [Here](https://replit.com/@kellenlinse/maxSubArraySum-Sliding-Window#index.js)

## 34: Divide Conquer Pattern

- Used in search and sort algorithms - More complex than one video can cover, so just hitting the high level here.
  <br>

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
- It is a common pattern, though.

> **Divide and conquer patterns can drastically decrease time complexity**
