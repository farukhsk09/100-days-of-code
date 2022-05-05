class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stackVal=[]
        for i in tokens:
            if i == "+":
                a=int(stackVal.pop())
                b=int(stackVal.pop())
                val=a+b
                stackVal.append(val)
            elif i == "-":
                a=int(stackVal.pop())
                b=int(stackVal.pop())
                val=b-a
                stackVal.append(val)
            elif i == "*":
                a=int(stackVal.pop())
                b=int(stackVal.pop())
                val=a*b
                stackVal.append(val)
            elif i == "/":
                a=int(stackVal.pop())
                b=int(stackVal.pop())
                val=b/a
                stackVal.append(val)
            else:
                stackVal.append(i)
        return int(stackVal.pop())
                