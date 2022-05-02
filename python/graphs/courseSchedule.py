class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        def dfsCycle(savedArray,i):
            if visited[i] and dfsVisited[i]:
                return True
            if visited[i]:
                return False
            visited[i]=True
            dfsVisited[i]=True
            for j in savedArray[i]:
                if dfsCycle(savedArray,j):
                    return True
            dfsVisited[i]=False
            return False
        # cycle find in a graph
        savedArray=[]
        visited=[]
        dfsVisited=[]
        for i in range(0,numCourses):
            savedArray.append(set())
            visited.append(False)
            dfsVisited.append(False)
        for i in prerequisites:
            course,prereq = i
            savedArray[course].add(prereq)
        
        for i in range(0,numCourses):
            if dfsCycle(savedArray,i):
                return False
            
        return True