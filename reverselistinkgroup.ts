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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let arr = [] 
    let result = [];
    let count = 0;
    let temp = head;
    while(temp){
        arr.push(temp.val);
        count++;
        if(count === k) {
             arr = arr.reverse();
        result.push(...arr);
           
            arr= [];
            count=0;
        }
        temp =temp.next;
       
    }
    result.push(...arr)
    count =0;
    temp =head ;
    while(temp){
        temp.val = result[count]
        count++;
    temp = temp.next;
    }
    temp = head;
    return head
};
