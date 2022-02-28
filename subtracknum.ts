function subtractProductAndSum(n: number): number {
    let prod : number = 1, sum : number = 0;
    if (n===0) {
        return 0;
    } else {
        while(n>0) {
            prod *= (n%10);
            sum += (n%10);
            n = Math.floor(n/10);
        }
        return prod - sum;
    }
}