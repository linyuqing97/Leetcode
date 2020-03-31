---
permalink: /MinimumPathSum/
title: "Minimum Path Sum"
---



DP solution with O(1)space and O(mn) time complexity

```cpp
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        for(int i = n-1;i>=0;i--){
            for(int j = m-1;j>=0;j--){
               if(i == n-1 && j!=m-1 ){
                   grid[i][j] = grid[i][j+1]+grid[i][j];
                   continue;
               }
                
                if(i!=n-1 && j==m-1 ){
                    grid[i][j] = grid[i][j]+grid[i+1][j];
                    continue;
                }
                else if (i!=n-1 &&j!=m-1)
                    grid[i][j] = grid[i][j]+min(grid[i+1][j],grid[i][j+1]);
               
            }
        }
        return grid[0][0];
    }
};
```
先处理边角case， 这里是从第下M-1 N-1开始         注意是M-1不是M 应为grid[0].size 比实际大1