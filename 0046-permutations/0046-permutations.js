/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length;
    const res=[]
    recursive(nums,0,len-1);
    return res;
    function recursive(num,start,end){
        if(start===end){
            res.push([...num])
        }else{
            for(let i=start;i<=end;i++){
                
                [nums[start],nums[i]] = [nums[i],nums[start]];
                
                recursive(num,start+1,end);
                
                [nums[start],nums[i]] = [nums[i],nums[start]];
            }
        }
    }
};