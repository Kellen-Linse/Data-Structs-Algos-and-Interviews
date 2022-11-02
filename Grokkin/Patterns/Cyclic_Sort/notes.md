# Cyclic Sort

<hr>

## General Notes

- Cyclic Sort describes an approach to dealing with problems involving arrays containing numbers in a given range.
- For Example:
  - You are given an unsorted array containing `n` numbers taken from the range `1` to `n`. The array can have duplicates, which means that some numbers will be missing. Find all the missing numbers.
- To efficiently solve this problem, we can use the fact that the input array contains numbers in the range of `1 to n`. 
  - For example, to efficiently sort the array, we can try placing each number at its correct place, i.e., placing `1` at `index '0'`, placing `2` at `index ‘1’`, and so on. 
  - Once we are done with the sorting, we can iterate the array to find all indices missing the correct numbers. These will be our required numbers.


## Problems

<hr>