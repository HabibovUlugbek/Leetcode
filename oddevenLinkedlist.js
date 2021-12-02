/**
 * Definition for singly-linked temp.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    var odd =[];
    var even =[];
    var temp = head;
    var k=1;
    while(temp){
        if(k%2 === 1) odd.push(temp.val);
        else even.push(temp.val);
        k++;
        temp =temp.next;
    }
    temp = head;
    while(temp){
        if(odd.length){
            var val =  odd.shift();
            
            temp.val = val;
        }else {
             var val =  even.shift();
            temp.val = val;
        }
        temp = temp.next
    }
     
    return head;
};