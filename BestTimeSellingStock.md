# Best Time Selling Stock [leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```cpp
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = INT_MAX;
        int maxPro = 0;
        for(int i = 0;i<prices.size();i++){
            if(prices[i]<minPrice){
                minPrice = min(minPrice,prices[i]);
            }
            maxPro = max(maxPro,prices[i]-minPrice);
        }
        return maxPro;
    }
};
```
The idea is to constanly update both buying price and max profits
Don't overthink the problem.