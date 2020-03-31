---
permalink: /LongestSubstringWithoutRepeatingCharacters/
title: "Longest Substring Without Repeating Characters"
classes: wide
---



[link](https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/)

## Brutforce 
checking all charcters one at a time and looking for dupictate
time complexity: O(n^2)

## Approach 2: Sliding Window
Since we know the local longest substring length, there is no need to recheck a substring if the length is less then the local longest substring. Therefore a slide windows method can be use to optimze this problem

```cpp 
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int r = s.length();
        unordered_set<int> set;
        int res = 0;
        int i = 0;
        int j = 0;
        while(i<r && j<r){
            if(set.find(s[j]) == set.end()){
                    set.insert(s[j++]);
                    res = max(res,(j-i));
            }
            else{
                set.erase(s[i]);
                i++;
            }
        }
        return res;
    }
};
```
## Approach 3: Sliding Window Optimized

using ascii table to uptimized it
The reason is that if s[j]s[j] have a duplicate in the range [i, j)[i,j) with index j'j , we don't need to increase ii little by little. We can skip all the elements in the range [i, j'][i,j ] and let ii to be j' + 1j +1 directly.

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int>index(128,0);
        int res = 0;
        
        for(int i =0,j=0;j<s.size();j++){
            i = max(index[s[j]],i);
            res = max(j-i+1,res);
            index[s[j]]=j+1;
        }
        return res;
    }
};
```