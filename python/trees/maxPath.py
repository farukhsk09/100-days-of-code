#124. Binary Tree Maximum Path Sum

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def f(node):
            if not node:
                return 0
            l, r = f(node.left), f(node.right)
            self.res = max(self.res, node.val, node.val + max(l,r), node.val+l+r) # cur node, cur node with a child path, cur node with both child path
            return max(node.val, node.val+max(l,r)) # cur node only or cur node with a child path
        self.res = -inf
        f(root)
        return self.res