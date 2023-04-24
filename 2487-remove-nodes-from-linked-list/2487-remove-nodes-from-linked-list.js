var removeNodes = function(head) {
    
    if(!head) return null
    
    head.next = removeNodes(head.next)
    
    if(head.next && head.val < head.next.val) return head.next
    
    return head
    
};