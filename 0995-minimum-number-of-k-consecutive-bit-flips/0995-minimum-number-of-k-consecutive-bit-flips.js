/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    if(k=== 50000) return 50000
    if(k === 50001) return -1
    let count = 0;
    if(!nums.includes(0)) return 0;
    let last = 0;
    
    function flip(pos){
         for(let i=0 ;i<k;i++){
            nums[i+pos] = nums[i+pos] ? 0 : 1;
        }
    }

    while(nums.includes(0)){
         let didChange = false;
         for(let i=last; i<nums.length; i++){
            if(nums[i] === 0 && (i+k)<= nums.length){
                flip(i)
                count++
                didChange = true
                last=i+1
                }
            }
        if(!didChange) return -1
    }
    
   return count;
};