# In-place Reversing a LL: General Notes

- Reversing at least a portion of the LL is present at least as a sub-problem in a lot of LL problems, understanding the basic pattern is extremely important.

```js
function reverseLL(head){
  let current = head,
      previous = null;

  while(current){
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
  }
  return previous;
}
```

- We can reverse a portion of the list by using a counter variable.
  - Just remember we will need to reset the pointers pointing to the reversed section and the pointer at the end of the reversed section pointing to the rest of the list!

```js
... 
  let current = head,
      previous = null;
  let i = 0; // <---- I will count the number of nodes reversed

  while(current || counter < numNodesToReverse){ // <- Stopping condition
    let next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        i++ // <-------------- DON'T FORGET TO UPDATE THE COUNTER!!!
  }
...

```