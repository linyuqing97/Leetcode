---
title: "Move Zeros"
last_modified_at: 2020-04-07
categories:
  - Leetcode
tags:
  - Array
  - Easy

classes: wide
---

## Given an array of nums, move all zeros to the end of the array while others state in order.
At first, I was think to use two pointers where left pointer points to the index 0 at the array while right pointer points to the end of the array. left pointer travals the array one at a time and locate the first None 0 element and swap with the right pointer,then right --.The function repeates this procedure untill both left and right pointers meet. However, this approch would change the order of the None zero elements. So I did some changes but still using two pointers.

```java
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;
        int right = 0;
        while(right < nums.length){
            if(nums[right] != 0){
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
            }
            right++;
        }
    }
}
```
This time, I just move the None Zero elements to the fornt and all matters solve.
