# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        sampler=[]
        currNode = root
        #define index =0
        #add root to the str at index
        #add left to the array
        #add right to the array
        #index =1
        #while index < list size
        #if ref(index) == null
        #move on to next
        #if index.left is none add null
        #else add the ref
        #if index.right is none add null
        #else add ref
        #index+=1
        if currNode == None:
            return ""
        index=0
        sampler.append(currNode)
        sampler.append(currNode.left)
        sampler.append(currNode.right)
        index=1
        while index < len(sampler):
            if sampler[index] == None:
                index+=1
                continue
            if sampler[index].left != None:
                sampler.append(sampler[index].left)
            else:
                sampler.append(None)
            if sampler[index].right != None:
                sampler.append(sampler[index].right)
            else:
                sampler.append(None)
            index+=1
        newStr=""
        for i in sampler:
            if i == None:
                newStr+="null,"
                continue
            newStr+=str(i.val)+","
        return newStr
            
            

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        returnType=[]
        for i in data.strip().split(','):
            if i == "null":
                returnType.append(None)
            else:
                try:
                    returnType.append(int(i))
                except ValueError:
                    continue
        index=0
        for i,num in enumerate(returnType[-1::-1]):
            if num == None or num == "":
                index-=1
            else:
                break
        ending=len(returnType)+index
        return returnType[:ending]
        

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))