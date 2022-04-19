import enum
import queue


# you can write to stdout for debugging purposes, e.g.
# print("this is a debug message")
from collections import deque

def fillDown(B,i,j):
    row_len = len(B[0])
    column_len = len(B)
    for k in range(i,column_len):
        if(B[k][j] == 'A'):
            #assasin in sight 
            return True
        if B[k][j] != '.' and k!=i and B[k][j] != 'Y':
            # there is a wall or person
            return False
        else:
            B[k][j]='Y'
def fillUp(B,i,j):
    row_len = len(B[0])
    column_len = len(B)
    for k in range(0,i+1):
        if(B[k][j] == 'A'):
            #assasign in sight 
            return True
        if B[k][j] != '.' and k!=i and B[k][j] != 'Y' :
            # there is a wall or person
            return False
        else:
            B[k][j]='Y'

def fillRight(B,i,j):
    row_len = len(B[0])
    column_len = len(B)
    for k in range(j,row_len):
        if(B[i][k] == 'A'):
            #assasign in sight 
            return True
        if B[i][k] != '.' and k!=j and B[i][k] != 'Y' :
            # there is a wall or person
            return False
        else:
            B[i][k]='Y'

def fillLeft(B,i,j):
    row_len = len(B[0])
    column_len = len(B)
    for k in range(0,j+1):
        if(B[i][k] == 'A'):
            #assasign in sight 
            return True
        if B[i][k] != '.' and k!=j and B[i][k] != 'Y':
            # there is a wall or person
            return False
        else:
            B[i][k]='Y'
def solution(B):
    M=len(B[0])
    N=len(B)
    print(N,M)
    myQueue = []
    for i,_ in enumerate(B):
        B[i] = list(B[i])
        print(B[i])
    # write your code in Python 3.6
    for i,_ in enumerate(B):
        for j,_ in enumerate(B[i]):
            if B[i][j] == '>':
                blocked = fillRight(B,i,j)
                if blocked:
                    return False
            elif B[i][j] == '<':
                blocked = fillLeft(B,i,j)
                if blocked:
                    return False
            elif B[i][j] == '^':
                blocked = fillUp(B,i,j)
                if blocked:
                    return False
            elif B[i][j] == 'v':
                blocked = fillDown(B,i,j)
                if blocked:
                    return False
            if B[i][j] == 'A':
                #print(i,j)
                myQueue.append((i,j))
    for i,_ in enumerate(B):
        print(B[i])
    
    # Now find the path to the target (N-1)(M-1)
    while(len(myQueue)!=0):
        source = myQueue.pop(0)
        #print(source[0],source[1])
        if (source[0] < 0 or source[0] >= N or source[1] < 0 or source[1] >= M):
                continue
        if B[source[0]][source[1]] == 'X' or B[source[0]][source[1]] == 'Y':
            # there is a wall or will be watched by a guard
            continue
        if source[0] == N-1 and source[1] == M-1:
            return True
        B[source[0]][source[1]] = 'X' # mark as wall after visitation
        #push all four edges to queue
        for k in range(-1,2,2):
            myQueue.append((source[0],source[1]+k))
            myQueue.append((source[0]+k,source[1]))
        #loop again
    return False


B= ['X.....>', '..v..X.', '.>..X..', 'A......']
print(solution(B))
myQueue = []
myQueue.append((1,2))
print(myQueue.pop()[0])

saveList=[]
saveList.extend([1,2])