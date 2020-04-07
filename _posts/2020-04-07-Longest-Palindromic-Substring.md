---
title: "Move Zeros"
last_modified_at: 2020-04-07
categories:
  - Leetcode
tags:
  - String
  - Medium
classes: wide
---
This is a very classic problem, I had this problem on my Amazon online assesnment last fall.
So the Idea is to solve this in a brute force mana base on the middle index each. 
The Time complexity would be O(n^2) with constant space. 
There are also a O(n) solution using Manancher's Algorithm

``` java
class Solution {
    public String longestPalindrome(String s) {
        // check input
        if(s == null || s.length() == 0)return "";

        int start = 0,len = 0,longest = 0;
    
        for(int i = 0;i<s.length();i++){
            //check if the LPS is a odd length string
            len = findLongest(s,i,i);
            if(len>longest){
                longest = len;
                start = i- len/2;
            }
            //check if the LPS is a even length string
            len = findLongest(s,i,i+1);
             if(len>longest){
                longest = len;
                start = i - len/2+1;
            }
        }
        return s.substring(start,start+longest);
   
    }
    public int findLongest(String s, int left,int right){
        int len = 0;
        while(left>=0 && right < s.length()){
            if(s.charAt(left) != s.charAt(right)){
                break;
            }
            len += left == right?1:2;
            left--;
            right++;
        }
        return len;
    }
}
```