class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        #have a sum tracker going on , start,end - same at first
        #if current < 0 , start
        #[-2,1,-3,4,-1,2,1,-5,4]
        #prevSum=-100000
        #if current>prevSum : start=end ,prevSum=0,newSum=prevSum
        #newSum = prevSum+current
        #if newSum > maxSum : maxSum=newSum
        #if newSum<0 : start=end+1,end=end+1
        start=0
        end=0
        prevSum=-100000
        newSum=-100000
        maxSum=-100000
        while(end<len(nums)):
            if nums[end] > prevSum and prevSum<0:
                start=end
                prevSum=0
            newSum=prevSum+nums[end]
            # pint(newSum)
            if newSum > maxSum:
                maxSum=newSum
            if newSum <0:
                start=end+1
                newSum=0
            end=end+1
            prevSum=newSum
        return maxSum
            