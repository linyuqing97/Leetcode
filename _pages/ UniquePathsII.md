---
permalink: /UniquePathsII/
title: "Unique Path II"
classes: wide
---
# 63  Unique Paths II [leetcode](https://leetcode.com/problems/unique-paths-ii/)

Using clear dp solution to this, however when everytime that grid has obstacle put a 0 there

```cpp
class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        int m = obstacleGrid.size();
        int n = obstacleGrid[0].size();
        vector<vector<long>>memo(m+1,vector<long>(n+1,0));
        memo[0][1]=1;
        for(int i = 1;i<=m;i++){
            for(int j = 1;j<=n;j++){
                if(obstacleGrid[i-1][j-1]==0)
                memo[i][j] = memo[i-1][j]+memo[i][j-1];
               
            }
        }
        return memo[m][n];
    }
```
pay atention to 2d Vector initialization 