# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def __init__(self,head=None,tail=None):
        self.head=head
        self.tail=tail
    def reverseListRememberTail(self,head):
        if head == None or head.next == None:
            self.tail=head
            return head
        current=head
        prevNode=self.reverseListRememberTail(current.next)
        current.next=None
        prevNode.next=current
        return current
        
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        current=self.reverseListRememberTail(head)
        return self.tail
            