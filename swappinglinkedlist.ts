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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let arr: number[] = [];
  let temp = head;
  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }
  let change = arr[k - 1];
  arr[k - 1] = arr[arr.length - k];
  arr[arr.length - k] = change;

  temp = head;
  while (temp) {
    temp.val = arr.shift();
    temp = temp.next;
  }
  return head;
}
