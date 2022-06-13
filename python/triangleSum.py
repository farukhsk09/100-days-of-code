#120. Triangle

class Solution:
    def minTotal(self,t,dp,chosen,level):
        if level >= len(t)-1:
            return 0
        if dp[level][chosen] != -9999:
            return dp[level][chosen]
        else:
            dp[level][chosen] = min(t[level+1][chosen]+self.minTotal(t,dp,chosen,level+1),t[level+1][chosen+1]+self.minTotal(t,dp,chosen+1,level+1))
            return dp[level][chosen]
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        #get current index , current level
        #if dp already has it use it . 
        #get the triangle edges (triangle[level+1][index],triangle[level+1][index])
        #count= min(minTotal(dp,chosen=index,level+1) ,minTotal(dp,chosen=index+1,level+1)
        #dp[index][level]=count
        dp=[[-9999 for i in range(len(triangle[j]))] for j in range(len(triangle))]
        # print(dp)
        dp[0][0]=triangle[0][0]
        if len(triangle)==1:
            return dp[0][0]
        count =dp[0][0]+ min(triangle[1][0]+self.minTotal(triangle,dp,0,1),triangle[1][1]+self.minTotal(triangle,dp,1,1))
        return count