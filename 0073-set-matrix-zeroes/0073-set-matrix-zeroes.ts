function setZeroes(matrix: number[][]): void {
    const rows: Set<number> = new Set();
    const cols: Set<number> = new Set();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for (let i of rows.values()) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let j of cols.values()) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    }
};