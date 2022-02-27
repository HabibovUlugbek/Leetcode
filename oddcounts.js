/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    let count = 0;
    for(let i=low; i<=high ; i++){
        if(i%2 !==0) count ++;
    }
    return count;
};

var countOdds = function(low, high) {
	const c = Math.round((high-low) / 2);//

    return low % 2 === 1 && high % 2 === 1 ? c+1 : c;
}

