# Conflicting Appointments (easy)

> **Prompt:** Given an array of intervals representing ‘N’ appointments, **find out if a person can attend all the appointments**.

<br>

## **Example:**

```js
Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.

// ====

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
```

<br>

## **Big O:**
  - Time: `O(n log n)`
  - Space: `O(n)`

<br>

## **Code:**

```js
// No comments
const can_attend_all_appointments = function(appts) {

  appts.sort((a, b) => a.start - b.start);

  for(let i = 0; i < appts.length - 1; i++){
    if(appts[i].end >= appts[i+1].start) return false;
  }

  return true;
};

// Comments
const can_attend_all_appointments = function(appts) {

  // Sort the input array by start time in ascending order.
  appts.sort((a, b) => a.start - b.start);

  // Iterate over the appointments until the second to last.
  for(let i = 0; i < appts.length - 1; i++){

    // If an overlap is found, return false.
    if(appts[i].end >= appts[i+1].start) return false;
  }

  // Return true if no overlap is found.
  return true;
};
```
<br>

## **Comments:**
  - The trick to this problem is **sorting the array by the start values**.


<br>

## **Basic Pattern:**
  1. Sort the input array.
  2. Iterate over the appointments until the second to the last.
     1. If an overlap is found, return false.
  3. Return true if no overlap is found.

## **Leetcode Solution:**

- Leetcode uses 2D arrays instead of interval objects.

```js
var canAttendMeetings = function(intervals) {
    if(intervals.length === 0 || intervals.length === 1) return true;

    const start = 0, end = 1;
    intervals.sort((a, b) => a[start] - b[start]);

    for(let i = 0; i < intervals.length - 1; i++){
        if(intervals[i][end] > intervals[i+1][start]) return false;
    }

    return true;
};
```