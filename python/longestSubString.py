#3. Longest Substring Without Repeating Characters
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start=0
        end=-1
        buffer=0
        hashTable={}
        maxBuffer=0
        s=list(s)
        for i,c in enumerate(s):
            if c not in hashTable:
                end+=1
                hashTable[c] = i
                buffer=end-start+1
            else:
                for elem in s[start:hashTable[c]]:
                    hashTable.pop(elem)
                end+=1
                start=hashTable[c]+1
                hashTable.pop(c)
                hashTable[c]=i
                buffer=end-start+1
            if maxBuffer < buffer:
                    maxBuffer = buffer
        return maxBuffer
                