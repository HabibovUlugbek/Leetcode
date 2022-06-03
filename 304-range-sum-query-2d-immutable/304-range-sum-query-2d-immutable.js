class NumMatrix{
    constructor(matrix){
        this.matrix=matrix;
        let m=this.matrix.length;
        let n=this.matrix[0].length;
        this.arr=new Array(m).fill(0).map(()=>new Array(n).fill(0));
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(i===0 && j===0){
                    this.arr[i][j]=this.matrix[i][j]
                }
                if(i===0 && j!==0){
                    this.arr[i][j]=this.arr[i][j-1]+this.matrix[i][j];
                }
                if(i!==0 && j===0){
                    this.arr[i][j]=this.arr[i-1][j]+this.matrix[i][j];
                }
                if(i>0 && j>0){
                    this.arr[i][j]=this.arr[i-1][j]+this.arr[i][j-1]-this.arr[i-1][j-1]+this.matrix[i][j];
                }
            }
        }
    }
    sumRegion(row1,col1,row2,col2){
        return this.arr[row2][col2]-(row1>0?this.arr[row1-1][col2]:0)-(col1>0?this.arr[row2][col1-1]:0)+(row1>0&&col1>0?this.arr[row1-1][col1-1]:0);
    }
}