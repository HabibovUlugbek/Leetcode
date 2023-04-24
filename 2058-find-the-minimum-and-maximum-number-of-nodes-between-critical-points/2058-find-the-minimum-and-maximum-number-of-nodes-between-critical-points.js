/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let arr = [];
    let prev = null;
    let curr = head ; 
    let next = null
    let index = 1;
    while(curr){
        next = curr.next;
        if(next && prev && ((curr.val > prev.val && curr.val > next.val) || (curr.val < prev.val && curr.val < next.val))){
            arr.push(index)
        }
        index++;
        prev = curr 
        curr = curr.next;
    }
    if(arr.length < 2) return [-1,-1]
    // console.log(arr)
    let minDistance = Infinity
    for(let i = 0; i<arr.length -1; i++){
        minDistance = Math.min(minDistance, arr[i+1] -arr[i])
    }
    let maxDistance =  arr[arr.length -1] - arr[0]
    return [minDistance, maxDistance]
};