from numpy import diagonal


def conintuePlaying(pos,pos1,state):
    #validate if there is a win
    #go validical
    curr=state[pos][pos1]
    #nextStep,Win
    valid=(False,True)
    for i in range(0,3):
        if state[pos][i]!=curr:
            valid=(True,False)
    if valid == (False,True):
        print(state)
        return valid
    valid=(False,True)
    for i in range(0,3):
        if state[i][pos1]!=curr:
            valid=(True,False)
    if valid == (False,True):
        print(state)
        return valid
    # for i in range(-1,1):
    #     if state[(pos-i)%3][pos1]!=curr:
    #         valid=(True,False)
    # if valid == (False,True):
    #     print(state)
    #     return valid
    
    #two diagnals
    diaognal1=[(0,0),(1,1),(2,2)]
    diaognal2=[(0,2),(1,1),(2,0)]
    valid=(True,False)
    if (pos,pos1) in diaognal1:
        valid = (False,True)
        for i in diaognal1:
            if state[i[0]][i[1]]!=curr:
                valid=(True,False)
        if valid == (False,True):
            print(state)
        return valid
    if (pos,pos1) in diaognal2:
        valid = (False,True)
        for i in diaognal2:
            if state[i[0]][i[1]]!=curr:
                valid=(True,False)
        if valid == (False,True):
            print(state)
        return valid
    
    if valid == (False,True):
        print(state)
        return valid
    print(state)
    #validate if no move is possible 
    return valid
def playTicTac():
    #user input - read , update
    #input format - pos,user
    #start with a base array of empty positions
    arr=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]
    user=0
    while(True):
        #user input - pos , pos1
        #get input 
        pos,pos1=input().split(' ')
        if user>=2:
            user=0
        if arr[int(pos)][int(pos1)]==-1:
            arr[int(pos)][int(pos1)]=user
        else:
            print("please use different positions")
            continue
        #return if nextPlay is possible or WIN state is achieved.
        nextPlay,win = conintuePlaying(int(pos),int(pos1),arr)
        if win:
            print("user "+str(user)+" has won")
            break
        else:
            user+=1
            continue

playTicTac()