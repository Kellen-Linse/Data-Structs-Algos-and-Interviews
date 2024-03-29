# Quick Reference

## Arrays

### Overview:

- In JavaScript, arrays aren't primitives but are instead Arrays are **objects**.
- JavaScript arrays are **dynamic**, or **resizable**.
- Can contain a mix of **different data types**.
- Array elements **cannot be accessed using strings** as indexes, but **must be accessed using integers** as indexes.
  - arrayName[integer goes here].
- JavaScript array-copy operations create **shallow copies**. - "A deep copying means that value of the new variable is disconnected from the original variable while a shallow copy means that some values are still connected to the original variable." - [See more here:](https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/)
  <br>

### Use Cases:

- Storing a collection of multiple items under a single variable name, in indexed memory slots with constant time access.

### Specifics:

- Some of the many built in methods:
  - **push(val)** - **Add** to the **end** of array.
  - **pop()** - **Remove** from the **end** of array, **return removed item.**
  - **unshift(val)** - **Add** to the **beginning** of array.
  - **shift()** - **Remove** from the **beginning** of array, **return removed item.**
  - **slice(start, [end])** - Slice **returns** a **shallow** copy of a portion of the array into a **new array**. The original array will **not** be modified.
    - **slice extracts up to but not including end.**
    - The start argument is inclusive while the end argument is exclusive.
  - **splice(start, [deleteCount, item1, item2, itemN])** - Slice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    - **returns an array containing the deleted elements.**
  - **map(callback(element[, index]))** - Map **creates a new array** populated with the results of calling a provided function on every element in the calling array.
  - **sort([compare_callback((a, b) => ... ))** - Sorts the elements of an array in place and returns the sorted array.
    - If compare function is omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
      - Compare function returns:
        - **greater than 0**, ascending
        - **less than 0**, descending
        - **== 0**, no change

### Big O:

| Action                       | Big 0                 |
| ---------------------------- | --------------------- |
| **get**                      | O(1) space and time   |
| **set**                      | O(1) space and time   |
| **traverse**                 | O(n) time             |
| **copy**                     | O(n) space and time   |
| **unshift** - beg            | O(n) time, O(1) space |
| **inserting** - mid          | O(n) time, O(1) space |
| **inserting** - end, dynamic | O(1) space, O(1) time |
| **shift** - beginning        | O(n) space and time   |
| **remove** - middle          | O(n) space and time   |
| **pop**                      | O(1) space and time   |

### Possible Problem Questions:

- Two Sum
- Sorted Squared Array
