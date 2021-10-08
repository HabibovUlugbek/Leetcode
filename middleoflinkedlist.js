var middleNode = function(head) {

    let fast = head;
     let slow = head;

     while (fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;
     }
       // var List = new ListNode(0);
   var head1 = slow; 
   


   return head1
};