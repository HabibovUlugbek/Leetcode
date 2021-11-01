var solve = function(board) {
    let row = board.length;
    let col = board[0].length;
    for (let i = 0; i < row; i ++) {
        if (board[i][0] == 'O') defense(board, i, 0);
        if (board[i][col - 1] == 'O') defense(board, i, col - 1)
    }
   
    for (let i = 0; i < col; i ++) {
        if (board[0][i] == 'O') defense(board, 0, i);
        if (board[row - 1][i] == 'O') defense(board, row - 1, i);
    }
    
    for (let i = 0; i < row; i ++) {
        for (let j = 0; j < col; j ++) {
            if (board[i][j] == 'V') {
                board[i][j] = 'O'
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
    return board;
};

const defense = (board, i, j) => {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length -1 || board[i][j] !== 'O') return;
    board[i][j] = 'V';
    defense(board, i - 1, j);
    defense(board, i, j - 1);
    defense(board, i + 1, j);
    defense(board, i, j + 1);
}