/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {

    let count = 0;
    
    let current = list1;

    let temp;                            // the head of list1 after deletion
    
    while(current){
        count++;                                 
        
        if(count - 1 === a - 1){        // when count that eqalus A is reached
            
            temp = current;
            
            while(temp){                // get the head of list1 after B

                if(count - 2 === b){
                    break;
                }
                
                count++;
     
                temp = temp.next;

            }
            
            current.next = list2;      // insert list2
            
            while(current.next){
                current = current.next;
           } 
            
            current.next = temp;       // insert end of list1 that was saved as temp variable
            
            while(current){
                current = current.next;
            }
            
            return list1;              
        }   
        current = current.next;   
    }
    
};