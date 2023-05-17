
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