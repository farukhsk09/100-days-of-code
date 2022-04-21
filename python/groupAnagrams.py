#49. Group Anagrams
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        #hashTable and array 
        # create a hashing stratergy where for each string you count chars and if the combination count is same they go in the same place
        hashTable={}
        for eachString in strs:
            stringlist = list(eachString)
            stringlist.sort()
            if str(stringlist) in hashTable.keys():
                hashTable[str(stringlist)].append(eachString)
            else:
                hashTable[str(stringlist)]=[]
                hashTable[str(stringlist)].append(eachString)
        return hashTable.values()