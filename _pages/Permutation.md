---
permalink: /Permutation/
title: "Permutation"
---
# [leetcode link](https://leetcode.com/problems/permutations/)

## Using backtrack with set

```cpp
class Solution {
public:
    void dfs(vector<bool> &visited,vector<int> &nums,vector<int>&path,vector<vector<int> > &result){
        if(path.size() == nums.size()){
            result.push_back(path);
            return;
        }
        for(int i = 0; i<nums.size();i++){
            if(visited[i])continue;
            path.push_back(nums[i]);
            visited[i]=true;
            dfs(visited,nums,path,result);
            visited[i]=false;
            path.pop_back();
        }
    }
    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>>result;
        vector<int>path;
        vector<bool>visited(nums.size(),false);
        dfs(visited,nums,path,result);
        return result;
    }
};
```
