/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
   let hashtable = {};
    
    for(let i=0; i<logs.length; i++){
        if(hashtable[logs[i][0]]){
            if(!hashtable[logs[i][0]].includes(logs[i][1])) hashtable[logs[i][0]].push(logs[i][1]);
        }else 
            hashtable[logs[i][0]] = [logs[i][1]]
    }
    let hash = (Object.values(hashtable));
    let answer = Array(k).fill(0);
    
    for(let i=0 ; i<hash.length; i++){
        answer[hash[i].length -1]++;
    }
    
    return answer;
};