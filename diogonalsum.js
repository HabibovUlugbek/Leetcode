var diagonalSum = function(mat) {
    let primary = 0,
        secondary = 0;
    
	// storing the sum of all vaues in both diagonals 
    for(let i = 0; i < mat.length; i++) {
        primary += mat[i][i];
        secondary += mat[i][mat.length - i - 1];
        
    }
    
	// if its an odd matrix then we subtract the mid item form the total sum. Else we just return the primary and secondary sum;
	
    if(mat.length === mat[0].length && mat[0].length % 2 !== 0) {
        let centerIdx = Math.floor(mat.length/2);
        return primary + secondary - mat[centerIdx][centerIdx];
    } else {
        return primary+secondary;
    }
};