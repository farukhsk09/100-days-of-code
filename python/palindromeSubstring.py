class Solution:
    def countExpandPalindromes(self,i,j,s):
        count=0
        while i>=0 and j<len(s) and s[i] == s[j]:
            i-=1
            j+=1
            count+=1
        return count
    def countSubstrings(self, s: str) -> int:
        #count =0
        #count = len(s)+count
        #loop thru the str
        #mid=current pos
        #left=mid , right=mid
        #right++ , if right valid and right == left , add +1 count
        #if right!=valid break
        #left-- , if left valid and left == right , add +1 count
        #if left!valid or left!=right break
        count=0
        s=list(s)
        for index,val in enumerate(s):
            mid=index
            count += self.countExpandPalindromes(mid,mid,s)+self.countExpandPalindromes(mid,mid+1,s)
        return count