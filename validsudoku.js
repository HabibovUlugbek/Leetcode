var isValidSudoku = function(board) {
    //check each row
    for(let i=0; i<9; i++) {
        if(!validate(board[i])) return false
    }
    //check each col
    for(let i=0; i<9; i++) {
        let arr = [];
        for(let j=0; j<9; j++) {
            arr.push(board[j][i]);
        }
        if(!validate(arr)) return false;
    }
    //check each 3*3
    let row = [[0,1,2], [3,4,5], [6,7,8]]
    let col = [[0,1,2], [3,4,5], [6,7,8]]
    for(let i of row) {
        for(let j of col) {
            let arr = [];
            for(let num1 of i) {
                for(let num2 of j){
                    arr.push(board[num1][num2]);
                }
            }
            if(!validate(arr)) return false;
        }
    }
    return true
};

function validate(arr) {
	//just checks in an array if it contains duplicates
    let set1 = new Set();
    for(let i=0; i< arr.length; i++) {
        if(arr[i] === '.') continue;
        if(set1.has(arr[i])) return false
        set1.add(arr[i]);
    }
    return true
}