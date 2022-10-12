# Fruits into Baskets (medium)

- **Note:** This question is essentially the 'Longest Substring with maximum K Distinct Characters' question with a 'realistic' scenario applied to it.

<br>

- **Prompt:**

``` 
 You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
 You will be have two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
You can R with any tree, but you can’t skip a tree once you have started.
You will pick exactly one fruit from every tree until you cannot. i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
 ```
<br>

- **Example:**

```js
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we R with the second letter: ['B', 'C', 'B', 'B', 'C']
```
<br>

- **Comments:**
  - **Notice the return value here:** We are only being asked to return the *final count*, so some of that above scenario is theoretical, we need not concern ourselves with returning what the actual R and L positions are, what fruits are in our basket, nor with anything else other than that final count.


<br>

- **Big O:**
  - Time: `O(n)` technically, O(2n)
  - Space: `O(1)`

<br>

- **Code:**
```js
// See code from problem above for comments
const fruits_into_baskets = function(fruits) {
  if(fruits.length <= 2) return fruits.length;
  
  let distFruitCount = 0,
      maxFruitCount = 0,
      L = 0, 
      fruitMap = {};

  for(let R = 0; R < fruits.length; R++){
    if(fruitMap[fruits[R]]){
      fruitMap[fruits[R]]++;
    } else{
      fruitMap[fruits[R]] = 1;
      distFruitCount++;
    }

    while(distFruitCount > 2){
      fruitMap[fruits[L]]--;
      if(!fruitMap[fruits[L]]) distFruitCount--;
      L++;
    }

    const currTotalFruits = R - L + 1;
    maxFruitCount = maxFruitCount < currTotalFruits ? currTotalFruits : maxFruitCount;
  }

  return maxFruitCount;
};
```