# Richest Customer Wealth


### Prompt: 

  > You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
  > A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
<br>

### Example:

> Input: accounts = [[1,2,3],[3,2,1]]
> Output: 6
> Explanation:
> 1st customer has wealth = 1 + 2 + 3 = 6
> 2nd customer has wealth = 3 + 2 + 1 = 6
> Both customers are considered the richest with a wealth of 6 each, so return 6.
> <br>

### Solution:

#### What I came up with:

```js

 //@param {number[][]} accounts
 //@return {number}

var maximumWealth = function(accounts) {
    let richest = 0;
    
    for(cust of accounts){
        let total = 0;
        for(account of cust){
            total += account;
        }
        if(total > richest) richest = total;
    }
    return richest;
};

```

### Better solution found in discussion:

- Using **reduce**, **map**, and **MAth.max**

```js

var maximumWealth = function(accounts) {
  return Math.max(...accounts.map(customer=>customer.reduce((a,b)=>a+b)));
}

```