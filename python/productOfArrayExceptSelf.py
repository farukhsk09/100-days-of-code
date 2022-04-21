#238. Product of Array Except Self
#Overcomplicated due to use of reduce but starting to learn lambda's
from functools import reduce
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        value = reduce(lambda a,b : a if b == 0 else a*b , nums)
        zeroDefault=False
        zeroList = list(filter(lambda x: x==0, nums))
        if len(zeroList) >0 :
            zeroDefault=True
        result=[]
        for elem in nums:
            if elem == 0 and len(zeroList) == 1:
                result.append(value)
            elif zeroDefault:
                result.append(0)
            else:
                result.append(value//elem)
        return result