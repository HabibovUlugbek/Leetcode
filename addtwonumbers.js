var addTwoNumbers = function(l1, l2) {
    let lastNode = l1.head;
    let lastNode2 = l2.head;
    class ListNode {
        constructor(data) {
            this.data = data
            this.next = null                
        }
    }
    let x=0;
    if (lastNode) {
        var i=0;
        while (lastNode.next) {
            x+=lastNode.data*Math.pow(10,i)
            lastNode = lastNode.next
            i++
        }
    }
    while(x<10) {

    }
     
};