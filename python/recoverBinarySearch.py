#99. Recover Binary Search Tree
# DFS inorder was needed , 
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorder(self,root,pre,firstMistake,secondMistake):
        if root == None:
            return firstMistake,secondMistake,pre
        firstMistake,secondMistake,pre = self.inorder(root.left,pre,firstMistake,secondMistake)
        
        if firstMistake == None and root.val < pre.val:
            print(pre.val)
            print(root.val)
            print("first")
            firstMistake = pre
        if firstMistake!=None and root.val < pre.val:
            print(pre.val)
            print(root.val)
            print("second")
            secondMistake = root
        pre= root
        firstMistake,secondMistake,pre=self.inorder(root.right,pre,firstMistake,secondMistake)
        return firstMistake,secondMistake,pre
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        #inorder traversal / DFS on the tree and find two mistakes , firstMistake and secondMistake
        pre = TreeNode(-inf)
        firstMistake = None
        secondMistake = None
        firstMistake,secondMistake,pre=self.inorder(root,pre,firstMistake,secondMistake)
        # print(firstMistake.val)
        # print(secondMistake.val)
        temp = firstMistake.val
        firstMistake.val=secondMistake.val
        secondMistake.val=temp
        return root
        