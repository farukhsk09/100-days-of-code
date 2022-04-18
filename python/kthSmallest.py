# 230. Kth Smallest Element in a BST
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self,root):
        saveList=[]
        if root == None:
            return saveList
        saveList.append(root.val)
        if root.left != None:
            saveList.extend(self.dfs(root.left))
        if root.right !=None:
            saveList.extend(self.dfs(root.right))
        return saveList
            
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        # brute force --iterate over the items save in list and sort and send it back
        currPoint = root
        saveList=[]
        saveList=self.dfs(currPoint)
        #print(saveList)
        saveList.sort()
        return saveList[k-1]
            