/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let answer = []
    nums.sort((a,b) => a-b) 
    for(let  i= 0; i<queries.length; i++){
        let sum=0;
        let count=0;
        for(let j=0 ; j<nums.length; j++){
            if(sum+nums[j]<=queries[i]){
                sum+=nums[j];
                count++;
            }else break;
        }
        answer.push(count)
    }
    return answer
};