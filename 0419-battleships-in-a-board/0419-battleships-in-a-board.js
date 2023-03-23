/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    
    function dfs(x, y){
        if(board[x][y] === "X" ){
            board[x][y] = ""
            if(x+1<board.length) dfs(x+1,y)
            if(x-1>=0) dfs(x-1,y)
            if(y+1<board[x].length) dfs(x,y+1)
            if(y-1>=0) dfs(x, y-1)
        }
        
    }
    
    let count = 0;
    for(let i=0; i<board.length; i++){
        for(let j=0;j<board[i].length; j++){
            if(board[i][j] === "X") {
                dfs(i,j)
                count++;
            }
        }
    }
    return count
    
};