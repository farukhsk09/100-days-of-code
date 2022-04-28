#39. Combination Sum

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start,end,candidates,target,tmp):
            if target == 0:
                listVal.append(tmp[:])
            elif target >0:
                for i in range(start,end):
                    tmp.append(candidates[i])
                    backtrack(i,end,candidates,target-candidates[i],tmp)
                    tmp.pop()
        listVal=[]
        backtrack(0,len(candidates),candidates,target,[])
        return listVal