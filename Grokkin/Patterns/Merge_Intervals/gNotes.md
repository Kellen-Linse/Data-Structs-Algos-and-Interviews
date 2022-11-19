# Merge Interval: General Notes

<br>

## Notes:

<hr>
<br> 

- **The merge intervals pattern deals with problems involving overlapping intervals.** 
- **The most common problems solved using this pattern are scheduling problems.**

<br>

- These problems are all about correctly defining overlap conditions and acting on them. 
- Drawing out the intervals **really** helps!
- "Mutually exclusive intervals" == "Non-overlapping intervals" == "disjointed intervals"

<br>

- You may run into more advanced problems that require utilizing a min or max heap.

<br>

- These problems **very** often benefit from sorting the intervals, most often by start time.
  - Ex:


```js
intervals.sort((a, b) => a.start - b.start);
```


> The key to understanding this pattern and exploiting its power lies in understanding how any two intervals may overlap. The illustration below shows the six different ways in which two intervals can relate to each other:

<br>

![MI](./Resources/MI.JPG)

<br>

- The following examples illustrate some problems that can be solved with this approach:

<br>

![mi1](./Resources/mi1.JPG)

<br>

- **You are looking at a merge interval problem if both of these conditions are fulfilled:**
  - The input data is an array of intervals.
  - The problem requires dealing with overlapping intervals, either to find their intersection, their union, or the gaps between them. 
    - This may be required as the final goal, or as an intermediate step in the computation of intervals.

<br>

- **Real World Problems:**

  - **Display busy schedule**: Display the busy hours of a user to other users without revealing the individual meeting slots in a calendar.

  - **Schedule a new meeting**: Add a new meeting to the tentative meeting schedule of a user in such a way that no two meetings overlap each other.

  - **Task scheduling in operating systems (OS)**: Schedule tasks for the OS based on task priority and the free slots in the machine’s processing schedule.

<br>

- Videos: 
  - [Nick White: merge intervals](https://www.youtube.com/watch?v=qKczfGUrFY4&list=RDLV44H3cEC2fFM&index=3)
    - See 10:35 for breakdown.
  - [Neetcode: merge intervals](https://www.youtube.com/watch?v=44H3cEC2fFM)
    - Easier to understand when visualized.
    - ![mi2](./Resources/mi2.JPG)
  - [Neetcode: Meeting Rooms II](https://www.youtube.com/watch?v=FdzJmTCVyJU)
    - A different way of looking at the intervals, splitting them up by starts and finishes.