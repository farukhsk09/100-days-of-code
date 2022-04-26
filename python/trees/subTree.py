# took me 11 submissions - 22 mins for the changes
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def dfs(self,root,subRoot,checker):
        if root == None:
            if subRoot == None: # both root and subRoot has ended - match
                return True
            return False
        if subRoot == None: # root hasn't ended but subRoot has - no match
            return False
        if root.val == subRoot.val:
            # root val and subroot val matches so both root left,right and subroot left,right should match
            if (self.dfs(root.left,subRoot.left,True) and self.dfs(root.right,subRoot.right,True)):
                # print(root.val)
                return True
            elif checker == True: # if a match pattern is going on return immediate false , so we move on to other possibilites
                return False
        else:
            if checker == True: # if a match pattern and root it self doesn't match is going on return immediate false , so we move on to other possibilites
                return False
        return (self.dfs(root.left,subRoot,False) or self.dfs(root.right,subRoot,False)) #move on 
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        return self.dfs(root,subRoot,False)