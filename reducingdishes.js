/**
 * @param {number[]} satisfaction
 * @return {number}
 */
 var maxSatisfaction = function(s) {
	s = s.sort((a, b) =>a - b)
    let result = 0, len = s.length
    for(let i = 0; i < len; i++){
        let current = 0
        for(let j = i; j < len; j++){
            current += (s[j] * (j - i + 1))
        }
        if (current > result) result = current 
    }
    return result
};