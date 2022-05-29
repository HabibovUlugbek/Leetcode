function rearrangeArray(nums: number[]): number[] {
    let positive = [];
    let negative = [];
    for(let i=0;i<nums.length; i++){
        if(nums[i]>0) positive.push(nums[i]);
        else negative.push(nums[i]);
    }
    let result = [];
    let index= 0;
    while(negative.length >0 || positive.length > 0){
        if(index%2 === 0) result.push(positive.shift())
        else result.push(negative.shift());
        index++;
    }
    return result;
};