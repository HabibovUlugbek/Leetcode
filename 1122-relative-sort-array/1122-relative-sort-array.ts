function relativeSortArray(arr1: number[], arr2: number[]): number[] {
let arr = [];
    let not = [];
    for(let i=0; i<arr2.length;i++){
        for(let j=0 ; j<arr1.length; j++){
            if(arr1[j] === arr2[i]) arr.push(arr1[j]);
        }
    }
     for(let i=0; i<arr1.length;i++){
        if(!arr2.includes(arr1[i])) not.push(arr1[i])
    }
    not = not.sort((a,b) => a-b);
    return [...arr, ...not]
};