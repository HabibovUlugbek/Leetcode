/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    var temp =head;
    var arr = [];

    while(temp){
        arr.push(temp.val);
        temp=temp.next
    }

    temp = head;
     arr = arr.reverse();
    while(temp){
            var val =  arr.shift();
            temp.val = val;
        temp = temp.next
    }
    return head;
};