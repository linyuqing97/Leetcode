---
permalink: /ReverseInteger/
title: "Reverse Integer"
classes: wide
---

[leetcode link](https://leetcode.com/problems/reverse-integer/)
```cpp
class Solution {
public:
    int reverse(int x) {
        long result = 0;
        while(x!=0){
            result = result*10+x%10;
            x=x/10;
        }
        if(result >INT_MAX || result<INT_MIN)return 0;
        return result;
    }
};
```