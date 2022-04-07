# 74. Search a 2D Matrix
# Medium

# 7119

# 262

# Add to List

# Share
# Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

# Integers in each row are sorted from left to right.
# The first integer of each row is greater than the last integer of the previous row.

class Solution:
    def checkTarget(self, target: int,left : int,right :int):
        if(target>left and target<right):
            return True,True
        if(target<left):
            return False,False
        return False,True
    def binarySearch(self,row,target,left,right):
        middle = left + (right-left)//2
        if(left>right):
            return False
        if(target == row[middle]):
            return True
        if(target < row[middle]):
            return self.binarySearch(row,target,left,middle-1)
        else:
            return self.binarySearch(row,target,middle+1,right)
        
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        for row in matrix:
            checkCurrent, checkPossibility=self.checkTarget(target,row(0),row(1))
            if checkCurrent:
                return self.binarySearch(row,len(row),target,0,len(row)-1)
            if not checkPossibility:
                return False
        return False