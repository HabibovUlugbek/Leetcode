/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    let diff = 0;
    let str1 = "";
    let str2 = "";
    let hash = {};
    if(s.length !== goal.length) return false;
    for(let i=0 ;i<s.length; i++){
        if(s[i] !== goal[i]){
            diff++;
            str1+=s[i];
            str2+=goal[i];
        }
        if(hash[s[i]])hash[s[i]]++
            else hash[s[i]]=1;
    }
    let values = Object.values(hash);
    if(diff !== 2 && diff !== 0) return false;
    if(diff === 2 ) {
        return str1.split("").reverse().join("") === str2
    }
    if(diff ===0) {
        console.log("ish")
        for(let i=0; i<values.length; i++){
            if(values[i] >=2 ) return true;
        }
    }
    return false;
};