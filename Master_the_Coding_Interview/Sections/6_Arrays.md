# Arrays

- Sometimes called "lists"
- Arrays organize values sequentially in memory.
- One of the simplest and most widely used data structures
- Smallest footprint in memory

#### Static vs Dynamic Arrays

- **Static Arrays** are of a fixed sized defined when the array is created
- **Dynamic Arrays** allow us to copy and rebuild a new array at a new location in memory with more memory.
<br>

- JavaScript uses dynamic arrays.
- **pushing to a dynamic array can be O(n) in the case that the array needs to be copied so that more memory can be allocated.**

#### Side Note on Objects:

- Objects are "reference types" in JS.

#### Implementing Arrays

- **Arrays in JS are just objects with integer based keys that act like indices.**

```js

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(data){
    this.data[this.length] = data;
    this.length++;
    return this.length;
  }

  pop(){
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    delete this.data[this.length - 1]
    this.length--;
    return item;
  }

  shiftItems(index){
    for(let i = index; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
  }
}

```

#### Array Review

| Good  |  Bad  |
|---|---|
| fast lookup  |  slow insets |
|  fast push/pop  | slow deletes  |
| ordered  | fixed size (if static)  |