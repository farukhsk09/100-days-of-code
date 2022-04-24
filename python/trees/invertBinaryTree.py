# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root == None:
            return None
        #binary tree has atmost two childs , can have any one none or both none.
        #looper
        if root.left!=None:
            root.left = self.invertTree(root.left)
        if root.right!=None:
            root.right = self.invertTree(root.right)
        #swapper
        # if root.left !=None and root.right !=None:
        left = root.left
        right=root.right
        root.left=right
        root.right=left
        return root
        
            