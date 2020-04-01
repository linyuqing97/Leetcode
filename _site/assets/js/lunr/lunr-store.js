var store = [{
        "title": "Best Time to Buy and Sell Stock",
        "excerpt":"leetcode class Solution { public: int maxProfit(vector&lt;int&gt;&amp; prices) { int minPrice = INT_MAX; int maxPro = 0; for(int i = 0;i&lt;prices.size();i++){ if(prices[i]&lt;minPrice){ minPrice = min(minPrice,prices[i]); } maxPro = max(maxPro,prices[i]-minPrice); } return maxPro; } }; The idea is to constanly update both buying price and max profits Don’t overthink the problem....","categories": ["Leetcode"],
        "tags": ["Array"],
        "url": "http://localhost:4000/leetcode/Maximum-Subarray/",
        "teaser": null
      },{
        "title": "WordBreak II",
        "excerpt":"Using DFS and DP for the solution: class Solution { public: int findMax(vector&lt;string&gt;&amp;dict){ int maxlength = 0; for(auto it = dict.begin();it!=dict.end();it++){ maxlength = max(maxlength, static_cast&lt;int&gt;((*it).size())); } return maxlength; } vector&lt;string&gt; dfs(string &amp;s,int start,int max,unordered_set&lt;string&gt; &amp;wordDict,unordered_map&lt;int,vector&lt;string&gt; &gt;&amp;umap){ if(umap.find(start) != umap.end())return umap[start]; string str; for(int i = start; i &lt; s.length() &amp;&amp;...","categories": ["Leetcode"],
        "tags": ["Dynamic Programming"],
        "url": "http://localhost:4000/leetcode/WordBreakII/",
        "teaser": null
      }]
