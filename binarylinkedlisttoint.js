/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    var temp = head;
    var nums =[];
    while(temp){
        nums.push(temp.val)
        temp = temp.next;
    }
  var num =  nums.join("")
  num = parseInt(num,2)
    return num;
};