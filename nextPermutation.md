# Next Permutation
## [leetcode link] (https://leetcode.com/problems/next-permutation/)

Using two pointers
    1: find the first position a[i] that was less than the it's consecutive position a[i+1], start from the end of the array.
    2: reverse all numbers come after the selected index( make it the next permutation)

```cpp
class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        int size = nums.size();
        int i = size-2;
        int index;
        while(i>= 0 && nums[i]>=nums[i+1]){
            i--;
        }
        if(i>=0){
            int j = nums.size()-1;
            while(j>=0 && nums[j] <= nums[i]){
                j--;
            }
            swap(nums[i],nums[j]);
        }
        reverse(nums,i+1); 
    }
    void reverse(vector<int>&nums,int start){
        int end = nums.size()-1;
        while(end>start){
            swap(nums[start],nums[end]);
            end--;
            start++;
        }
    }
};
```
