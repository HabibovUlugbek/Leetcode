function canMakeArithmeticProgression(arr: number[]): boolean {
    arr = arr.sort((a,b)=> a-b);
    for(let i:number = 0; i<arr.length-2; i++){
        if(arr[i] - arr[i+1] !== arr[i+1] - arr[i+2]) return false
    }
    return true;
};