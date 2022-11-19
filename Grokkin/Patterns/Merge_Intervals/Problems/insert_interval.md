# Insert Interval (medium)
<br>

> **Prompt:** Given a list of non-overlapping intervals sorted by their start time, **insert a given interval at the correct position and merge all necessary intervals** to produce a list that has only mutually exclusive intervals.

<br>

## **Example:**

```js
Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
```

<br>

## **Big O:**
  - Time: `O(n)`
  - Space: `O(n)`

<br>

## **Code:**

```js
// No comments
const insert = function(intervals, newInterval) {
  let lowerArray = [], 
      upperArray = [];

  for(const interval of intervals){
    if      (interval.end < newInterval.start) lowerArray.push(interval);
    else if (interval.start > newInterval.end) upperArray.push(interval);
    else {
      newInterval.start = Math.min(newInterval.start, interval.start);
      newInterval.end = Math.max(newInterval.end, interval.end);
    }
  }

  return [...lowerArray, newInterval, ...upperArray];
};

// Comments
const insert = function(intervals, newInterval) {

  // Create two arrays that will hold the intervals before and after 
  // the merged intervals
  let lowerArray = [], 
      upperArray = [];

  // Check each interval in intervals
  for(const interval of intervals){

    // if the end of the current interval is before 
    // the new intervals start, we do not have an overlap.
    // So push the current interval on to the lowerArray.
    if(interval.end < newInterval.start)       lowerArray.push(interval);

    // if the start of the current interval is passed 
    // the end of the new interval, we do not have an overlap. 
    // So push the current interval on to the upperArray.
    else if (interval.start > newInterval.end) upperArray.push(interval);

    // if we have reached here our new interval overlaps our current interval.
    // here we are merging out new interval and the current interval.
    else{

      // make the start of the new interval the lesser of the start
      // of the current interval and the new interval.
      newInterval.start = Math.min(newInterval.start, interval.start);

      // make the end of the new interval the greater of the end 
      // of the current interval and the new interval.
      newInterval.end = Math.max(newInterval.end, interval.end);
    }
  }

  // Here we are using the ES6 spread operator to spread the 
  // lower array, then add the new interval, then spread the upper array
  // into one array to return.
  return [...lowerArray, newInterval, ...upperArray];
};
```
<br>

## **Comments:**
  - The trick with this problem is knowing when and how to merge the new value, and understanding all the conditions necessary to reach that point.
  - ES6 syntax makes this problem far easier to read.
  - See "Alternate Solution" for non-ES6 syntax.

<br>

## **Basic Pattern:**

  1. Push intervals before the new interval to lower array.
  2. Merge the new interval with overlapping interval.
  3. Push the remaining intervals to the upper array.
  4. Spread the lower array, add the new interval, spread the upper array into a single array and return that array.

<br>

## **Algorithm:**
  1. Create two arrays that will hold the intervals before and after the merged interval.
  2. Iterate over each interval.
     1. Add intervals which end before the start of the new interval to the "before" array.
     2. Add intervals which start after the end of the new interval to the "after" array.
     3. Merge the new interval with the current interval if there is overlap by redefining the new interval.
        1. Make the start of the new interval the lesser of the two start values.
        2. Make the end of the new interval the greater of the two end values.
  3. Using the ES6 spread operator, spread the "before array", add the new interval, then spread the "after array" into one array and return that array.

<br>


## **Alternate Solution:**

```js
// Alternate Solution
const insert = function(intervals, newInterval) {
    let returnArray = [];
        i = 0;
    
    // while there is no intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i].end < newInterval.start) {
        returnArray.push(intervals[i]);
        i++;
    }
    
    // While there is an intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i].start <= newInterval.end) {
        newInterval.start = Math.min(newInterval.start, intervals[i].start);
        newInterval.end = Math.max(newInterval.end, intervals[i].end);
        i++;
    }
    
    // push the newly combined interval
    returnArray.push(newInterval);
    
    // push any remaining leftover intervals that do not intersect with the newInterval
    while (i < intervals.length) {
        returnArray.push(intervals[i]);
        i++;
    }

    return returnArray;
};
```

## **Alternate Solution Algorithm:**
  1. Create a results array.
  2. Create a counter variable and set it to 0.
  3. Run a while loop while the counter is less than the input array length and the current interval at the counter ends before the start of the new interval
     1. Push the current interval to the results array.
  4. Run a while loop while the counter is less..., and the current intervals start is less than the new intervals end (overlap).
     1. Make the start of the new interval the lesser of the two start values.
     2. Make the end of the new interval the greater of the two end values.
  5. Push the new interval to the results array.
  6. Run a while loop while the counter is less... (no need for a merge check condition).
     1. Push the current interval to the results array.
  7. Return the results array.

## **Leetcode Format:**

```js
var insert = function (intervals, newInterval) {
  let [newStart, newEnd] = newInterval;
  let left = [];
  let right = [];
  
  for (const interval of intervals) {
    const [currStart, currEnd] = interval; // Destructure
	
	// current interval is smaller than newInterval
    if (currEnd < newStart) left.push(interval);
	
	// current interval is larger than newInterval
    else if (currStart > newEnd) right.push(interval);
	
	// there is a overlap
    else {
      newStart = Math.min(newStart, currStart);
      newEnd = Math.max(newEnd, currEnd);
    }
  }
  
  return [...left, [newStart, newEnd], ...right]; 
};

// Alternate Solution
const insert = (intervals, newInterval) => {
  
    let res = [];

    let start = 0;
    let end = 1;

    let i = 0;
    
    // while there is no intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }
    
    // While there is an intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    
    // push the newly combined interval
    res.push(newInterval);
    
    // push any remaining leftover intervals that do not interset with the newInterval
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};
```