from heapq import merge


class Solution:
    def overlap(self,selection,item):
        if selection[0]<=item[0] and selection[1]<item[0]:
            return [-1,-1]
        elif selection[0]<=item[0] and selection[1]==item[0]:
            return [selection[0],item[1]]
        elif selection[0]<=item[0] and selection[1]<=item[1]:
            return [selection[0],item[1]]
        elif selection[0]<=item[0] and selection[1]>item[1]:
            return [selection[0],selection[1]]
        elif selection[0]>=item[0] and selection[1]<=item[1]:
            return [item[0],item[1]]
        elif selection[0]>=item[0] and selection[0]<=item[1]:
            return [item[0],selection[1]]
        else:
            return [-1,-1]
        

    def merge(self, intervals):
        #traverse the intervals
        #if start<newInterval[start] and newInterval[start]<end:
            #if newInterval[end]<end
            #do nothing
            #if newInterval[end]>end
            #end=newInterval[end]
            #propogate from here
        #elif start>newInterval[start] and start>newInterval[end]:
        #place new interval in the prev position
        #elif start>newInterval[start] and start<newInterval[end]:
        #start=newInterval[start]
        #if newInterval[end]>end
            #end=newInterval[end]
            #propogate from here
        #
        intervals_final=[]
        newInterval=[intervals[0][0],intervals[0][1]]
        sorted(intervals,key=lambda x: x[0],reverse=True)
        selected=[-1,-1]
        for index,[start,end] in enumerate(intervals):
            if selected == [-1,-1]:
                selected=[start,end]
                intervals_final.append(selected)
                continue
            else:
                merged =self.overlap(selected,[start,end])
                if merged != [-1,-1]:
                    intervals_final.pop()
                    intervals_final.append(merged)
                    selected=merged
                else:
                    intervals_final.append([start,end])
                    selected=[-1,-1]
                    
        return intervals_final

a=Solution()
print(a.merge([[2,3],[4,5],[6,9],[7,8]]))