class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
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
        for start,end in intervals:
            if start>newInterval[0] and start>newInterval[1] and newInterval[0]!=-1:
                intervals_final.append(newInterval)
                intervals_final.append([start,end])
                newInterval=[-1,-1]
                continue
            elif start<=newInterval[0] and newInterval[0]<=end and newInterval[0]!=-1:
                if newInterval[1]<end:
                    intervals_final.append([start,end])
                    newInterval=[-1,-1]
                else:
                    # intervals_final.append([start,newInterval[1]])
                    newInterval=[start,newInterval[1]]
            elif start>newInterval[0] and start<=newInterval[1] and newInterval[0]!=-1:
                if newInterval[1]<end:
                    intervals_final.append([newInterval[0],end])
                    newInterval=[-1,-1]
                else:
                    continue
            else:
                intervals_final.append([start,end])
            # print(start,end)
        if newInterval[0] ==-1:
            return intervals_final
        else:
            intervals_final.append(newInterval)
        return intervals_final