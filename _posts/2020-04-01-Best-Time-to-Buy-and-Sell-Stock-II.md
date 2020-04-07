---
title: "Best Time to Buy and Sell Stock II"
last_modified_at: 2020-04-05
categories:
  - Leetcode 
tags:
  - Array
  - Easy
---

# Peak and Valley Approch
The key point that is we consider every peak and immediately following a valley to maximize profit. If we follow the graph trajectory, we can quickly found out trying to obtain more profit by considering points with more difference in heights, the net profit would not be greater than the prior approch.

```java 
class Solution {
    public int maxProfit(int[] prices) {
        if(prices == null||prices.length == 0)return 0;
        int low = prices[0];
        int high = prices[0];
        int maxProfit = 0;
        int i = 0;
        while(i<prices.length-1){
            while(i<prices.length-1 && prices[i]>=prices[i+1]){
                i++;
            }
            low= prices[i];
            while(i<prices.length-1 && prices[i]<=prices[i+1]){
                i++;
            }
            high = prices[i];
            maxProfit+=(high-low);
        }
        return maxProfit;
    }
}
```

find the peak and valley at one pass and summarize the sum.