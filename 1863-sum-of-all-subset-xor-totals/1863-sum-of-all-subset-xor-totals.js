/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    const subsets = [[]]
    let sum = 0
    for(const el of nums){
        const last = subsets.length-1
        for(let i = 0; i<=last; i++){
            subsets.push([...subsets[i],el])
        }
    }
    
    for(let j = 0; j<subsets.length;j++){
        if (subsets[j].length === 0) sum = sum +0
        else if(subsets[j].length === 1) sum = sum + parseInt(subsets[j])
        else sum = sum + parseInt(subsets[j].reduce((acc,curr) => acc^curr))   
    }
    return sum
};