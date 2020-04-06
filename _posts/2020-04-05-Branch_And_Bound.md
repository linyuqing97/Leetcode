---
title: "Branch and Bound for 0/1 Knapsack Problem "
last_modified_at: 2020-04-05
categories:
  - Algorithm 
tags:
  - Dynamic Programming

classes: wide
---

## Solve the 0/1 knapsack Problem using Branch and Bound Algorithm 

There are two approchs for this problem, one is using queue and Breath First Search(BFS) and the other one is using priority queue where nodes with maximum upperbound would be pop first and visite for counting toward the final optimal solution.

### Branch and Bound With Breadth First Search
1. The value of each child u is used to update best
2. Only child u with bound(u) better than best are added to the queue

``` 
    void BFS_B&B(st_sp_tr T, number& best) {
        queue_of_node Q; node u, v;
        initialize(Q); 
        v=root of T; 
        best=value(v);
        insert(Q,v);
        while (! empty(Q)) {
	        remove(Q, v);
            if (bound(v) is better than best)
	        for (each child u of v) {
		        if (value(u) is better than best)
			    best=value(u); 
		        if (bound(u) is better than best)  
			    insert(Q, u) 
                }
            }
        }
```
### Procedure Knapsack
```
    void knapsack2(int n,const int p[ ], const int w[ ],int W, int maxprofit);	{
            queue_of_node Q;    node u,v;
            //initialize
	        init(Q); maxprofit=0; //v is root
            v.level=0; v.profit=0; v.weight=0;
            enqueue(Q, v);
            while (! empty(Q)) {
                dequeue(Q, v); 
                u.level= v.level+1; //u child of v
                //“yes” child
                u.weight= v.weight+w[u.level];
                u.profit= v.profit+p[u.level];
                //update maxprofit
                if ((u.weight<=W) &&(u.profit>maxprofit))
		        maxprofit=u.profit;
                //add to queue if bound > maxprofit
	            if (bound(u)>maxprofit)
                    enqueue(Q, u);
	            //“no” child
                u.weight= v.weight; //not included
                u.profit= v.profit;	
                //add to queue if bound > maxprofit
	            if (bound(u)>maxprofit)
                enqueue(Q, u);
            }
        }		

```

## B&B With Best-First Search for Optimality Problems
1. Branch and bound  with best-first search  for maximum:
2. Nodes with the highest upper bounds have the best potential of producing the optimal solution and therefore should be thefirst to expand
3. Use priority queue

```cpp
#include<iostream>
#include<vector>
#include<fstream>
#include<sstream>
#include<queue>
#include <algorithm>

using namespace std;
int WEIGHT; // total weight of the knapsack
int globalUpperBound;
int TOTALSIZE;

class Node{
    public:
        int upperBound;
        double maxProfit;
        int level; //level
        int localWeight;
        bool isRight = false;
        Node* parent;
        Node(){
            this->maxProfit = 0;
            this->upperBound = 0;
            this->level = 0;
            this->localWeight = 0;
            this->parent = NULL;
        }

};

struct pqCmp{
    bool operator() (Node *n1,Node *n2){
        return n1->upperBound < n2->upperBound;
    }
};

double maxBound(vector<vector<int> >&memo,Node* cur, bool isRight){

    //inital the first node
    //include all possible solutions at the best case
    double upperBound = cur->maxProfit;
    int resCapacity = WEIGHT - cur->localWeight;
    int tempWeight = 0;
    //cout<<" res capactiy: "<<resCapacity<<endl;
    if(isRight)cur->isRight=true;
    for(int i= 0;i<memo.size();i++){
        if(isRight){
            if(i <= cur->level-1){
                continue;
            }
        }
        if(tempWeight+memo[i][0] < resCapacity ){
            upperBound+=memo[i][1];
            tempWeight+=memo[i][0];
           // cout<<upperBound<<endl;;
        }
        else{
           // cout<<"upperbound now: "<<upperBound<<endl;
            int rWeight = resCapacity - tempWeight;// give me what's weight left in pack for upper bound
            if(rWeight > 0){
                int profitPerUnit = memo[i][1]/memo[i][0];
                upperBound =upperBound+(profitPerUnit*rWeight);
             //cout<<"uppBound: "<<upperBound<<rWeight<<" "<<profitPerUnit<< endl;
                break;
            }
        }
    }
    //globalUpperBound = upperBound;
   return upperBound;
}


vector<vector<int> >readFile(string inputFileName){
    ifstream infile(inputFileName);
    string line;
    int size = 0;
    char dummy;     //skip the comma de;
    getline(infile,line);
    stringstream s(line);
    s>>TOTALSIZE>>dummy>>WEIGHT;
    vector<vector<int> >memo(TOTALSIZE,vector<int>(1,0));
    int i = 0; int j = 0;

    // memo[i][j] In each row 0 col store weight, 1 col store profits
    while(getline(infile,line)){
        stringstream ss(line);
        ss>>memo[i][j] >> dummy >> memo[i][j+1];
        i++;
    }
    infile.close();
    return memo;
}


bool sortMethod(const vector<int>&v1,const vector<int>&v2){
    //sort the 2d vector base on decreasing order of profit/weight,
    return (v1[1] / v1[0]) > (v2[1] / v2[0]);
}


void resultOutput(vector<int>&backTrack, vector<vector<int> >&memo,int maxProfit,string output,int numberOfLeafVisited,int numberOfNodeVisited){
    ofstream outfile(output);
    outfile<<TOTALSIZE<<","<<maxProfit<<endl;
    outfile<<numberOfNodeVisited<<","<<numberOfLeafVisited<<endl;
    for(int i = 0;i<backTrack.size();i++){
        if(backTrack[i]){
            outfile<<memo[i][0]<<","<<memo[i][1]<<endl;
        }
    }
}


bool isLeaf(Node*cur,int globalMaxProfit,int &numberOfLeafVisited){
    if(cur->upperBound < globalMaxProfit){
        numberOfLeafVisited++;
        return true;
    }
    if(cur->localWeight > WEIGHT){
        numberOfLeafVisited++;
        return true;
    }
    if(cur->level >= TOTALSIZE){
        numberOfLeafVisited++;
        return true;
    }
    return false;
}


void branchAndBound(vector<vector<int> >&memo,string output){
    int globalMaxProfit = 0;
    Node*maxNode = new Node();Node*firstNode = new Node();
    int numberOfLeafVisited = 0;int numberOfNodeVisited = 0;

    priority_queue<Node *, vector<Node*>, pqCmp>pq;// max heap by profit/weight
 
    globalUpperBound = maxBound(memo,firstNode,false);
    firstNode->upperBound = globalUpperBound;
    maxNode = firstNode;
    pq.push(firstNode);
    
    while(!pq.empty()){
        Node*curNode = pq.top();pq.pop();numberOfNodeVisited = numberOfNodeVisited+1;
        // cout<<"cur node: "<<curNode->upperBound<<"global profit"<<globalMaxProfit<<"level: "<<curNode->level<<endl;
        if(isLeaf(curNode,globalMaxProfit,numberOfLeafVisited)){
            continue;
        }
        // form up left child

        Node* leftChild = new Node();
        leftChild->localWeight = curNode->localWeight + memo[curNode->level][0];
        leftChild-> maxProfit = curNode->maxProfit+ memo[curNode->level][1];
        leftChild->level = curNode->level+1;
        leftChild->parent = curNode;
        leftChild->upperBound = curNode->upperBound;
        if(leftChild->maxProfit > globalMaxProfit && leftChild->localWeight<= WEIGHT){
            globalMaxProfit = leftChild->maxProfit;
            maxNode = leftChild;
        }
        pq.push(leftChild);
  
        //formup right child
        Node* rightChild = new Node();
        rightChild->maxProfit = curNode->maxProfit;
        rightChild->localWeight = curNode->localWeight;
        rightChild->level=curNode->level+1;
        rightChild->parent=curNode;
        rightChild->upperBound = maxBound(memo,rightChild,true);
        pq.push(rightChild);
    }

    Node*temp = maxNode;
    vector<int>backTrack; // back track all nodes that form up the result;
    while(temp->parent){
        if(!temp->isRight){
            backTrack.push_back(1);
        }
        else backTrack.push_back(0);
        temp=temp->parent;
    }
    reverse(backTrack.begin(),backTrack.end());
    cout<<maxNode->maxProfit<<maxNode->level<<endl;
    resultOutput(backTrack,memo,maxNode->maxProfit,output,numberOfLeafVisited,numberOfNodeVisited);
}


int main(int args, char*argv[]){
    string inputFileName = argv[1];
    string outPutFileName = argv[2];
    vector<vector<int> >memo = readFile(inputFileName);
    sort(memo.begin(),memo.end(),sortMethod);
    branchAndBound(memo,outPutFileName);
    return 0;
}
``` 