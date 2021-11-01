var removeNthFromEnd = function(head, n) { 
    let res = new ListNode(0, head);
    let curr = res;
    let node = head;
    let count = 1;
    while (node.next) {
        if (count === n) {
            curr = curr.next;
        } else {
            count++;
        }
        node = node.next;
    }
    curr.next = curr.next.next;
    return res.next;
};