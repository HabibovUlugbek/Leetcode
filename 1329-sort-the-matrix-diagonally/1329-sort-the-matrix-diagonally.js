var diagonalSort = function(mat) {
    let map = {}
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            if(!map[d]){
                map[d]=[]
            }
            map[d].push(mat[i][j])
        }
    }
    for(let key in map){
        map[key].sort((a,b)=>{return a-b})
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            let d = i-j
            mat[i][j] = map[d].shift()
        }
    }
    return mat
};