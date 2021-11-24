var deleteDuplicates = function(head) {
    var temp = head;
    
    while(temp) {
        if(temp.next !== null && temp.val == temp.next.val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    
    return head;
};