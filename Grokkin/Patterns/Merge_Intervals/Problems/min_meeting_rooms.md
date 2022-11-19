# Minimum Meeting Rooms (medium)

> **Prompt:** Given a list of intervals representing the start and end time of ‘N’ meetings, **find the minimum number of rooms required to hold all the meetings.**

<br>

## **Example:**

```js
Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
```

<br>

## **Big O:**
  - Time: `O(n log n)`
  - Space: `O(n)`

<br>

## **Code:**

```js
// No comments
function min_meeting_rooms(meetings) {
  const starts = meetings.map(meeting => meeting.start);
  const ends = meetings.map(meeting => meeting.end);

  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  let roomCount = 0;
  let end = 0;

  for(let start = 0; start < starts.length; start++){
    starts[start] < ends[end] ? roomCount++ : end++;
  }
  return roomCount;
}

// Comments
function min_meeting_rooms(meetings) {
  if(meetings.length === 0) return 0
  if(meetings.length === 1) return 1

  // Separate starts from ends into arrays
  const starts = meetings.map(meeting => meeting.start);
  const ends = meetings.map(meeting => meeting.end);

  // Sort each array
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  // Track roomCount
  let roomCount = 0;

  // End pointer
  let end = 0;

  // Iterate over start values 
  for(let start = 0; start < starts.length; start++){
    starts[start] < ends[end] ? roomCount++ : end++;
  }

  // return room count
  return roomCount;
}
```
<br>

## **Comments:**
  - The trick with this problem is that you have to **separate start and ends into their own arrays** AND **sort each array**, then compare the starts against the ends.
  - This problem is deceptively tricky and difficult to solve on your own if your haven't seen it before.
  - If the current start is LESS than the current end, we know we need one more room,
  - If the current start is Greater than or equal to the current end, we need to evaluate the next end.


<br>

## **Basic Pattern:**
  1. Separate starting values and end values into their own arrays.
  2. Sort each array in ascending order.
  3. Create a counter and pointer variable.
  4. Iterate over the start array.
     1. If the current value of starts is less than the current value of ends, increment the roomCount,
     2. Else increment the end pointer.
  5. Return roomCount.

<br>

## **Alternate Leetcode:**

```js 
var minMeetingRooms = function(intervals) {

    // Separate starting values and end values into their own arrays.
    const starts = intervals.map(interval => interval[0]);
    const ends = intervals.map(interval => interval[1]);
    
    // Sort each array in ascending order.
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    // Create a counter variable for the number of rooms needed.
    let roomCount = 0;

    // Create a pointer variable for the ends array.
    let end = 0;

    // Iterate over the start array.
    for (let start = 0; start < intervals.length; start++) {

        // If the current value of starts is less than the current value of ends,
        // increment the roomCount, else increment the end pointer.
		starts[start] < ends[end] ? roomCount++ : end++;
    }

    return roomCount;
};
```
