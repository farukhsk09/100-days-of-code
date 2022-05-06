# Node of a doubly linked list
class Node:
    def __init__(self, next=None, prev=None, data=None,val=None):
        self.next = next # reference to next node in DLL
        self.prev = prev # reference to previous node in DLL
        self.data = data
        self.val=val

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity=capacity
        self.head=Node(None,None,-1,-1)
        self.end=None
        self.dictSelf={}
    def display(self):
        current = self.head
        if(self.head == None):
            print("List is empty")
            return
        while(current!=None):
            print(current.data)
            print(current.prev)
            current = current.next

    def get(self, key: int) -> int:
        # self.display()
        if key in self.dictSelf:
            if len(self.dictSelf) == 1:
                return self.head.val
            else:
                if key == self.head.data:
                    self.head=self.head.next
                elif key == self.end.data:
                    return self.end.val 
                else:
                    nodeVal=self.dictSelf[key]
                    prev=nodeVal.prev
                    nextVal=nodeVal.next
                    prev.next=nextVal
                    nextVal.prev=prev
                    
                value=self.dictSelf[key].val
                self.end.next=Node(None,self.end,key,value)
                self.end=self.end.next
                self.dictSelf[key]=self.end
                return value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.dictSelf.keys():
            self.dictSelf[key].val=value
            self.get(key)
            return
                
        if len(self.dictSelf.keys()) == self.capacity:
            ejectVal=self.head.data
            self.dictSelf.pop(ejectVal)
            if self.head !=self.end and self.head.next!=None:
                self.head=self.head.next
                self.head.prev=None
                self.end.next=Node(None,self.end,key,value)
                self.end=self.end.next
                self.dictSelf[key]=self.end
            else:
                # print("yes")
                self.head=Node(None,None,key,value)
                self.dictSelf[key]=self.head
        else:
            if self.head.data == -1:
                self.head.data=key
                self.head.val=value
                self.dictSelf[key]=self.head
            elif self.end == None:
                self.head.next=Node(None,None,key,value)
                self.end=self.head.next
                self.end.prev=self.head
                self.dictSelf[key]=self.end
            else:
                self.end.next=Node(None,self.end,key,value)
                self.end=self.end.next
                self.dictSelf[key]=self.end


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)