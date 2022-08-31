/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
	const obj = {}
    garbage.filter((item,idx) => {
        if (item.includes('P')) obj['P'] = idx    
        if (item.includes('G')) obj['G'] = idx        
        if (item.includes('M')) obj['M'] = idx
    })
    let count = 0
    count += garbage[0].length
    for (let i=1; i<garbage.length; i++) {
        count += garbage[i].length
        if (obj['P'] >= i) count += travel[i-1]        
        if (obj['G'] >= i) count += travel[i-1]        
        if (obj['M'] >= i) count += travel[i-1]
    }
    return count
};