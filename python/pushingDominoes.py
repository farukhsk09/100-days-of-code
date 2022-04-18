#838. Push Dominoes

class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        #if . then find its left most domino that was pushed and right most domino that was pushed
        # if right most has left and left most has right - divide the .'s count into even ( if odd one will be .)'
        #if right most is right no effect on this ( if left effect is left) , left most is left no effect ( if right effect is right)
        dom = list(dominoes)
        for i,d in enumerate(dom):
            if dom[i] == '.':
                left_bias =0
                right_bias =0
                k=i-1
                while(k>=0):
                    if dom[k] == 'R':
                        left_bias=1
                        break
                    if dom[k] == 'L':
                        left_bias=0
                        break
                    k-=1
                left_bias_index=k
                k=i+1
                while(k<len(dom)):
                    if dom[k] == 'L':
                        right_bias = -1
                        break
                    if dom[k] == 'R':
                        right_bias =0
                        break
                    k+=1
                right_bias_index=k
                if left_bias == 1 and right_bias == 0:
                    dom[i] = 'R'
                if left_bias == 0 and right_bias == -1:
                    dom[i] = 'L'
                if left_bias == 1 and right_bias == -1:
                    mid = (right_bias_index - left_bias_index )//2
                    if right_bias_index - left_bias_index > 2:
                        if ((right_bias_index - left_bias_index)%2 != 0) :
                            for kk in range(left_bias_index+1,left_bias_index+mid+1):
                                dom[kk] = 'R'
                            for kk in range(right_bias_index-mid,right_bias_index):
                                dom[kk] = 'L'
                        else:
                            for kk in range(left_bias_index+1,left_bias_index+mid):
                                dom[kk] = 'R'
                            for kk in range(right_bias_index-mid+1,right_bias_index):
                                dom[kk] = 'L'
        # print(dom)
        return "".join(dom)
        