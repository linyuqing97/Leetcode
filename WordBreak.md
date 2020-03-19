## World Break II 140

Using DFS and DP for the solution:
```cpp
class Solution {
public:
     int findMax(vector<string>&dict){
        int maxlength = 0;
        for(auto it = dict.begin();it!=dict.end();it++){
            maxlength = max(maxlength, static_cast<int>((*it).size()));
        }
            return maxlength;
    }
    vector<string> dfs(string &s,int start,int max,unordered_set<string> &wordDict,unordered_map<int,vector<string> >&umap){
        
        if(umap.find(start) != umap.end())return umap[start];
        
        string str;
        
        for(int i = start; i < s.length() && str.length()<=max;i++){
            str+=(s[i]);
            cout<<str<<endl;
            if(wordDict.find(str) == wordDict.end())continue;
            if(i == s.length()-1){
                umap[start].push_back(str);
            }
            else{
                vector<string>path = dfs(s,i+1,max,wordDict,umap);
                for(auto &index:path){
                    //cout<<index<<endl;
                    umap[start].push_back(str+" "+index);
                }
            }
        }
        return umap[start];
    }
    
    vector<string> wordBreak(string s, vector<string>& wordDict) {
       // if(s.length() ==0 || wordDict.size() == 0);
        unordered_set<string>uset;
        for(auto &it:wordDict){
            uset.insert(it);
        }
        int maxlength = findMax(wordDict);
        unordered_map<int,vector<string>>umap;
        return dfs(s,0,maxlength,uset,umap);
    }
    
};
```
    
