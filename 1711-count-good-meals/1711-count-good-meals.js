/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function(deliciousness) {
    deliciousness.sort((a,b)=>a-b);
    let map = new Map();
    let res = 0;
    let two = 1;
    for(let i = 0; i < deliciousness.length; i++){
        while(deliciousness[i]>=two) two*=2;
        if(map.get(two-deliciousness[i])) res+=map.get(two-deliciousness[i]);
        if(map.get(0)&&deliciousness[i]===two/2) res+=map.get(0);
        map.set(deliciousness[i], map.get(deliciousness[i]) + 1 || 1);
    }     
    
    return res % 1000000007;
};