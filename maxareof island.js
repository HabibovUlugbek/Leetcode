/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let count=0,maxArea=0;
        for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1){
				
                let island=[[i,j]];  
                while(island.length>0){
                    let [k,l]=island.shift();
                    if(k>=0 && k<grid.length && l>=0 && l<grid[k].length && grid[k][l]==1)
                        {
                            count++;
                            island.push([k+1,l]);
                            island.push([k-1,l]);
                            island.push([k,l+1]);
                            island.push([k,l-1]);
                            grid[k][l]=2;
                        }
                    }
                if(count>maxArea) maxArea=count;
                count=0;
                }
            }
        }
    return maxArea;
};