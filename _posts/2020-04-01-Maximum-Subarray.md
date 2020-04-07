---
title: "Best Time to Buy and Sell Stock"
last_modified_at: 2020-03-21
categories:
  - Leetcode 
tags:
  - Array
  - Easy

---

[leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```java
class Solution {
    public int maxSubArray(int[] nums) {
        int globalSum = nums[0];int curSum=nums[0];
        for(int i = 1;i<nums.length;i++){
            curSum = Math.max(nums[i],curSum+nums[i]);
            if(curSum > globalSum)
            globalSum = Math.max(globalSum,curSum);
        }
        return globalSum;
    }
}
```
The idea is to constanly update both buying price and max profits
Don't overthink the problem.