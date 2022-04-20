# Best Time to Buy and Sell Stock


### Prompt: 

> **You are given an array prices where prices[i] is the price of a given stock on the ith day.**
>
> **You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.**
>
> **Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.**
<br>

### Example:

> **Input**: prices = [7,1,5,3,6,4]
> **Output**: 5
> Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
> Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

<br>

### Solution:

#### What I came up with:

  - Construct a map of **both** inputs, compare both maps.

```js

// @param {number[]} prices
// @return {number}

var maxProfit = function(prices) {
    
    // Create tracker and ptr variables
    let maxSell = prices[1];
    let minBuy = prices[0];
    let minPtr = 0;
    let maxDif = 0;

    //iterate over the array once
    while(minPtr < prices.length - 1){     
        
        // if the price at minPtr is less than the minimum known buy price, 
        // set minBuy to that price and reset the max known sell price (maxSell) to be the next price in the array.
        if(prices[minPtr] < minBuy){
            minBuy = prices[minPtr];
            maxSell = prices[minPtr+1]
        } 
        
        // if the price at one index past the current minPtr is greater than the largest known sale price set maxSale to be that price.
        if(prices[minPtr+1] > maxSell) maxSell = prices[minPtr+1]; 
        
        // if the max know difference is less than maxSale minus minBuy, set that value to be the new maxDif
        if(maxDif < maxSell - minBuy) maxDif = maxSell - minBuy;
        
        // increment the minPtr
        minPtr++;
    }
    
    // return the max known difference in buy and sell prices 
    return maxDif;
};

```

#### Better Solution:

- 

```js



```