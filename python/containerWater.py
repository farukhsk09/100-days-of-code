#11. Container With Most Water
#Two Pointers problem
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left=0
        right=len(height)-1
        maxValue = -1
        while(left<right):
            if height[left]<height[right]:
                if maxValue < height[left]*(right-left):
                    maxValue = height[left]*(right-left)
                left+=1
            else:
                if maxValue < height[right]*(right-left):
                    maxValue = height[right]*(right-left)
                right-=1
        return maxValue