/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var pairSum = function(head) {
    let arr=[];
    while(head){
        arr.push(head.val);
        head=head.next;
    }
    let max=0;
    let start=0; let end=arr.length-1;
    while(start<end){
        max=Math.max(arr[start]+arr[end],max);
        start++; end--;
    }
    return max;
};