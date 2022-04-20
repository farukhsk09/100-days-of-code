#1299. Replace Elements with Greatest Element on Right Side
#Easy
#Hint when u want to find the right most try to iterate from right . 
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        # replace each element with greatest element from its right
        finalSol=[-1]*len(arr)
        if len(arr) == 1:
            return finalSol
        maxSoFar = max(arr[-1],arr[-2])
        finalSol[-2]=arr[-1]
        for i in range(-2,-len(arr),-1):
            if maxSoFar < arr[i]:
                maxSoFar = arr[i]
            finalSol[i-1]=maxSoFar
        return finalSol
