---
title: "Increasing Triplet Subsequence"
last_modified_at: 2020-04-07
categories:
  - Leetcode
tags:
  - Array
  - Medium
classes: wide
---
Notice the question is asking 3 increasing number in subsequence, so the solution does not have to be 3 elements in a consecutive order. I was first thinking the below approch which wasn't correct since it worked only in a consecutive order.

``` java
nums[i]<nums[i+1];
result++ 
return (result>=3)true:false
```
### Correct Approch
```java
class Solution {
    public boolean increasingTriplet(int[] nums) {
        int first = Integer.MAX_VALUE,second = Integer.MAX_VALUE;
        
        for(int i=0;i<nums.length;i++){
            if(nums[i]<=first){
                first = nums[i];
            }
            else if(nums[i]<=second){
                second = nums[i];
            }
            else return true;
        }
        return false;
    }
}
```