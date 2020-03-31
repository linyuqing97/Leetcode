---
permalink: /WordBreak/
title: "Word Break"
---

# [leetcode link](https://leetcode.com/problems/word-break/) 

## Recursion with memoization
```cpp
class Solution {
public:
    int findMax(vector<string>&wordDict){
        int maxLength = 0;
        for(int i = 0;i<wordDict.size();i++){
            maxLength = max(maxLength,static_cast<int>(wordDict[i].length()));
        }
        return maxLength;
    }
    bool dfs(string &s, int start,int max,unordered_set<string>&wordDict,unordered_map<int,bool>&memo){
        if(memo.find(start)!=memo.end())return memo[start];
         if(start == s.length()) {
                return true;       
            }
        string str;
        for(int i = start+1;i<start+max+1;i++){
            str = s.substr(start,i-start);
            if(wordDict.find(str)!=wordDict.end()){
               if(dfs(s,i,max,wordDict,memo)){
                  return memo[start]=true;
               }
            }
        }
        return memo[start] = false;
    }
    bool wordBreak(string s, vector<string>& wordDict) {
        int max = findMax(wordDict);
        unordered_set<string>uset;
        unordered_map<int,bool>memo;
        for(auto &it : wordDict){
            uset.insert(it);
        }
        return dfs(s,0,max,uset,memo);
        
    }
};
```
