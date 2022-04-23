#76. Minimum Window Substring
from collections import defaultdict
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        #have a dataset chars of t and their counts - negated
        #starting position = 0
        # go through s:
            # find a match add +1 to the dataset of t
            # if all matches found - all values are >=0
                # start from pos and go to right one by one until conflict
                # by removing from the dataset
                # update min everytime
                # save result
            #new position found 
        #return result
        countDict = defaultdict(int)
        for i in t:
            countDict[i] -=1
        stringList = list(s)
        pos=0
        minl=inf
        res=(0,0)
        for i,c in enumerate(stringList):
            countDict[c]+=1
            while min(countDict.values()) >=0:
                if i-pos+1 < minl:
                    minl = i-pos+1
                    res=(pos,i+1)
                countDict[stringList[pos]]-=1
                pos+=1
        # print(res)
        return s[res[0]:res[1]]
            
        