# bad way of doing it , should be simplified 
# after simplification , all the commented code was not needed . saves memory and is simple and readable
from collections import defaultdict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        #hashTable with counts 
        hashTableElementKey=defaultdict(int)
        #hashTableCountKey={}
        for elem in nums: #n
            if elem in hashTableElementKey: #check dict so o(1)
                # hashTableCountKey[hashTableElementKey[elem]].remove(elem)
                hashTableElementKey[elem] +=1
                # if hashTableElementKey[elem] in hashTableCountKey.keys():
                    # hashTableCountKey[hashTableElementKey[elem]].append(elem)
                # else:
                    # hashTableCountKey[hashTableElementKey[elem]]=[]
                    # hashTableCountKey[hashTableElementKey[elem]].append(elem)
            else:
                hashTableElementKey[elem]=1
                # if hashTableElementKey[elem] in hashTableCountKey.keys():
                #     hashTableCountKey[hashTableElementKey[elem]].append(elem)
                # else:
                #     hashTableCountKey[hashTableElementKey[elem]]=[]
                #     hashTableCountKey[hashTableElementKey[elem]].append(elem)
        # print(hashTableCountKey)
        # listCounts = list(hashTableCountKey.keys())
        # listCounts.sort()
        # # print(listCounts)
        # result=[]
        # i=0
        # keytracker=-1
        # while(i<k):
        #     for elem in hashTableCountKey[listCounts[keytracker]]:
        #         result.append(elem)
        #         i+=1
        #     keytracker-=1
        hashTableElementKey=sorted(hashTableElementKey,key= lambda x: hashTableElementKey[x])
        
                
        return hashTableElementKey[-k:]