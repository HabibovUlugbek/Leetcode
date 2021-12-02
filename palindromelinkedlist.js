/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    var temp =head;
    var arr = [];

    while(temp){
        arr.push(temp.val);
        temp=temp.next
    }
    
    for(var i =0; i<Math.floor(arr.length/2);i++){
        if(arr[i]!== arr[arr.length-1-i]) return false
    }
    return true;
};