class Solution:
    def longestPalindrome(self, s: str) -> str:
        start=0
        end=0
        for i in range(0,len(s)):
            lenOdd = self.expandOverCenter(s,i,i)
            lenEven = self.expandOverCenter(s,i,i+1)
            finalMax = lenOdd if lenOdd > lenEven else lenEven
            if(end-start+1 < finalMax):
                start = int(i - int((finalMax -1)/2))
                end = int(i + int(finalMax/2))
        return s[start:end+1]
    def expandOverCenter(self,s,start,end):
        left=start
        right=end
        while left>=0 and right<len(s) and s[left] == s[right]:
            left=left-1
            right=right+1
        return right-left-1
            