var leftRigthDifference = function(nums) {
     let leftSum = 0;
    let rightSum = nums.reduce((sum,curr)=>sum += curr,0);

    return nums.map((curr,i)=>{
        //leftSum - (rightSum - curr)
        rightSum -= curr;
        let res = Math.abs(leftSum - rightSum );
        leftSum += curr;
        return res
    });
};