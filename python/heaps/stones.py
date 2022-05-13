import heapq


class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        heap=[]
        heapq.heapify(heap)
        for i in stones:
            heapq.heappush(heap,-1*i)
        print(heap)
        while(len(heap)!=1):
            y=heapq.heappop(heap)
            x=heapq.heappop(heap)
            heapq.heappush(heap,-1*(-y+x))
            # print(heap)
        return -1*heap[0]