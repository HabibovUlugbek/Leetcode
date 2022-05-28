function numberOfWeeks(milestones: number[]): number {
    let count = 0 ;
    let sum  = milestones.reduce((prev,curr) => prev+=curr);
    let max = Math.max(...milestones);
    
    if(max > sum - max + 1) count = sum - max + (sum - max +1) ;
    else count  = sum 
    return count;
};