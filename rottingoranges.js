/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    
    const orangeState = {
        empty: 0,
        fresh: 1,
        rotten: 2
    }
    
    const rottenOranges = []
    const freshOranges = []
    
    const up = (i,j) => i>0 && grid[i-1][j] === orangeState.fresh
    
    const down = (i,j) => i<grid.length-1 && grid[i+1][j] === orangeState.fresh
    
    const left = (i,j) => j>0 && grid[i][j-1] === orangeState.fresh
    
    const right = (i,j) => j<grid[i].length-1 && grid[i][j+1] === orangeState.fresh
    
    const rottenNeighbors = (i,j) => {
        let rotted = false
        if(grid[i][j] === orangeState.rotten){
            if(right(i,j)){
                grid[i][j+1] = orangeState.rotten
                rotted = true
            }
            if(left(i,j)){
                grid[i][j-1] = orangeState.rotten
                rotted = true
            }
            if(up(i,j)){
                grid[i-1][j] = orangeState.rotten
                rotted = true
            }
            if(down(i,j)){
                grid[i+1][j] = orangeState.rotten
                rotted = true
            }
        }
        return rotted
    }
    
    const loadOranges = () => {
        //clear
        rottenOranges.length = 0
        freshOranges.length = 0
        
        for(let k=0; k<grid.length; k++){
            let columnLength = grid[k].length
            for(let l=0; l<columnLength; l++){
                if(grid[k][l] === orangeState.rotten){
                    rottenOranges.push([k,l])
                }
                if(grid[k][l] === orangeState.fresh){
                     freshOranges.push([k,l])
                 }
            }
        }
    }
    
    let numMinutes = 0
    let continueRotting = true
    loadOranges()
    if(freshOranges.length === 0)
        return 0
    if(rottenOranges.length === 0)
        return -1
    
    while(continueRotting && freshOranges.length > 0){
        continueRotting = false
        while(rottenOranges.length > 0){
            let rottenOrange = rottenOranges.pop()
            let rotted = rottenNeighbors(rottenOrange[0],rottenOrange[1])
            if(rotted){
                continueRotting = true
            }
        }
        loadOranges()
        numMinutes++
    }
    if(continueRotting === false && freshOranges.length > 0)
        return -1
    return numMinutes
        
};