class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        #have a window of size k , slide 1 by 1
        #for each slide remember start,end and end <n
        #start=0
        #end=k-1
        #first iteration
        #start looping from start to end and add to a hashmap with counts as values 
        #end iteration
        #sort values and calcValue = largest+(count) if calcValue > n: calcValue=n
        #second iteration
        #remove start from dict , dict[s[start]]-=1
        #add end+1 to the dict , start+=1 ,end+=1
        start=0
        end=k
        dictStorage={}
        discardedStorage={}
        maxCount=-1
        n=len(s)
        #first
        while(end<n):
            if len(dictStorage.values()) == 0:
                for j in range(start,end+1):
                    if s[j] in dictStorage:
                        dictStorage[s[j]]+=1
                    else:
                        dictStorage[s[j]]=1
            else:
                if s[end] in dictStorage:
                    dictStorage[s[end]]+=1
                else:
                    dictStorage[s[end]]=1
            windowSize= end-start+1
            if windowSize - max(dictStorage.values()) <=k:
                maxCount = max(maxCount,windowSize)
            else:
                dictStorage[s[start]]-=1
                start+=1
            end+=1
        return maxCount
            