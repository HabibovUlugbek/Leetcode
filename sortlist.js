const sortList = (head) => {
    if(!head) {
        return head;
    }
    const arr = [];
    let temp = head;
    while(temp) {
        arr.push(temp.val);
        temp = temp.next;
    }
    arr.sort((a , b) => a > b ? 1 : -1);
    let i = 0;
    temp = head;
    while(temp) {
        temp.val = arr[i];
        i++;
        temp = temp.next;
    }    
    return head;
};