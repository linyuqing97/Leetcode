---
permalink: /MaximumSubarray/
title: "Maximum Subarray"
---


## [leetcode](https://leetcode.com/problems/maximum-subarray/)

### First approch: Greedy
```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int globalSum = nums[0];int curSum = nums[0];
        for(int i = 1;i<nums.size();i++){
            curSum = max(nums[i],curSum+nums[i]);
            if(curSum > globalSum)
                globalSum = max(globalSum,curSum);
        }
        return globalSum;
    }
};
```
I was confused by the problem at the first place thinking of trying to find out all elements form up the array.   
However, it can be done in O(n) with constant space by keeping a local Sum and a global sum.   
The global sum keeps the largest sum have seem so far which at the end would be the result.  
The local sum keeps comparing the sum seem so far and the index itself. By doing this, the local sum determin rather start a new array or add the current index into the exsiting array.   

### Second approch: DP
