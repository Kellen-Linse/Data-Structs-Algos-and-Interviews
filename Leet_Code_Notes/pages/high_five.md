

# High Five (easy)

> **Prompt:** Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.
> - Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.
> - NOTE: A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

<br>

## **Example:**

```js
Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.
```

<br>

## **Big O:**
  - Time: `O(n + m log m)`
  - Space: `O(n + m)`

<br>

## **Code:**

```js
// No comments
var highFive = function(items) {
    const studentMap = {},
          id = 0,
          score = 1;

    for(const item of items){
        if(studentMap[item[id]]) studentMap[item[id]].push(item[score]) 
        else studentMap[item[id]] = [item[score]];
    }

    let resultsArr = [];
    
    for(const student in studentMap){
        studentMap[student].sort((a, b) => b - a);

        let total = 0;
        for(let i = 0; i < 5; i++){
            total += studentMap[student][i];
        }
        resultsArr.push([student, Math.floor(total / 5)]);
    }
    
    return resultsArr;
};

// Comments
var highFive = function(items) {
    const studentMap = {}, // map that will hold an array or scores per ID
          id = 0, score = 1; // readability
          

    // Create a map from the input array, map all scores to an ID.
    for(const item of items){
        if(studentMap[item[id]]) studentMap[item[id]].push(item[score]) 
        else studentMap[item[id]] = [item[score]];
    }

    // For each student ID in the map, we are going to first sort their test scores,
    // so that we get the top five as the first five scores within their scores array.
    // Next we will sum the top five scores together.
    // Finally we will push an array holding the students id in the 0 index and the average 
    // of the five scores in the 1 index.
    let resultsArr = [];
    for(const student in studentMap){
        studentMap[student].sort((a, b) => b - a);

        let total = 0;
        for(let i = 0; i < 5; i++){
            total += studentMap[student][i];
        }
        resultsArr.push([student, Math.floor(total / 5)]);
    }
    
    return resultsArr;
};
```