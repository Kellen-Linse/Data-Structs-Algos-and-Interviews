# Two (plus) Pointer Problems: General Notes

<br>

## Notes:

<hr>
<br> 

> In problems where we deal with **sorted arrays** (or **Linked Lists**) and need to **find a set of elements** that fulfill certain constraints, the Two Pointers approach becomes quite useful. The set of elements could be a pair, a triplet or even a subarray.
> - Example: 
>   - "Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target."

<br>

- With 2 Pointer problems we care about the individual values that the pointers are pointing at, vs in sliding window problems we care about the entire window, all the numbers including and inbetween the pointers.
  
<br>

- **The pointers may start at different points, move in different directions, start or restart at different points, they may stop when they meet, or they may cross through and continue on**, it all depends on the problem you are trying to solve.

<br>

- Two pointer problems often have a pointer the starts at each end of the array or string and work in towards each other.

<br>

- Sometimes the trick is to move to pointers or check for conditions in the opposite way you think of doing it.
  - E.g. instead of searching for the first time you find an instance of some condition, try looking for the last time you encounter it.

<br>

- Using a two pointer technique can usually take a brute force approach that would take `O(n^2)` time and bring it down to `O(n)` time.

<br>

- Many two pointer techniques need the array to be **sorted**.
  - If the array is not sorted you may need to sort it first.
    - Assuming an effiecient sorting algo, you can expect `O(n log n)` run time.
    - If you must sort the array prior to implementing a two pointer algo, your overall runtime will be `O(n log n)` not `O(n)`

<br>
<hr>
<br>

## Side Notes:

<br>
<hr>
<br>

- `Infinity` and `-Infinity` are good for starting comparisons where you are looking for mins (Infinity) and maxes (-Infinity).
  - This is because no matter how large or small the number it is compared against, it will be always be less than Infinity or more than -Infinity.
  - When you are trying to find a max value, you want to start with the smallest number possible (-Infinity).
  - When you are trying to find a min value, you want to start with the largest number possible (Infinity).

<br>

- **ALWAYS ALWAYS use a comparison function with Array.sort() it will return some screwy answers if you don't!**
  - Example: 
    - `[-1, 3, -4, 0, 2].sort()` will return `[-1, -4, 0, 2, 3]`
    - `[[-1, 3, -4, 0, 2].sort((a, b) => a - b)` will return `[-4, -1, 0, 2, 3]`

- **ALWAYS ALWAYS use a comparison function with Array.sort() it will return some screwy answers if you don't!**
