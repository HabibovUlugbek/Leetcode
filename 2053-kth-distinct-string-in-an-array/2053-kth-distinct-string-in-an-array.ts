function kthDistinct(arr: string[], k: number): string {
let hashtable = {};
    for(let i=0; i<arr.length; i++){
        if(hashtable[arr[i]])hashtable[arr[i]]++
        else (hashtable[arr[i]]) =1;
    }
    
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(hashtable[arr[i]] === 1) count++;
        if(count === k) return arr[i];
    }
    return ''
};