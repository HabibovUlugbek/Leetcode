function maximumWealth(accounts: number[][]): number {
    var max:number= 0;
    for(let i:number =0;i<accounts.length;i++){
        var sum:number = 0;
        for(let j:number=0;j<accounts[i].length; j++){
            sum+=accounts[i][j];
        }
        if(sum>max) max=sum
    }
    return max;
};