class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # loop throught the two dimension matrix
        # if zero continue
        #if 1 , have a visited matrix - check if its already visited else
        #dive in - visit all its neighbours - dive in for each 1 - update visited to true 
        #count+1 after came back to the home
        def checkInside(i,j):
            if (i < 0 or i>n):
                return False
            if (j < 0 or j>m):
                return False
            return True
        def dfs(grid,i,j):
            #left 
            if not((i-1 < 0 or i-1>=n) or (j < 0 or j>=m)):
                if grid[i-1][j] == '1' and visited[i-1][j]==False:
                    visited[i-1][j] = True
                    dfs(grid,i-1,j)
            #right 
            if not((i+1 < 0 or i+1>=n) or (j < 0 or j>=m)):
                if grid[i+1][j] == '1'and visited[i+1][j]==False:
                    visited[i+1][j] = True
                    dfs(grid,i+1,j)
            #up 
            if not((i < 0 or i>=n) or (j-1 < 0 or j-1>=m)):
                if grid[i][j-1] == '1'and visited[i][j-1]==False:
                    visited[i][j-1] = True
                    dfs(grid,i,j-1)
            #down 
            if not((i < 0 or i>=n) or (j+1 < 0 or j+1>=m)):
                if grid[i][j+1] == '1' and visited[i][j+1]==False:
                    visited[i][j+1] = True
                    dfs(grid,i,j+1)
        visited=[]
        n=len(grid)
        m=len(grid[0])
        for i in range(0,len(grid)):
            visited.append([])
            for j in range(0,len(grid[i])):
                visited[i].append(False)
        # print(visited)
        count=0
        for i,_ in enumerate(grid):
            for j,val in enumerate(grid[i]):
                if val == '0':
                    continue
                elif (val == '1' and visited[i][j]==False):
                    visited[i][j]=True
                    dfs(grid,i,j)
                    count+=1
        return count