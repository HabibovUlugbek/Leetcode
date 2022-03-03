function digitSum(num:number):number {
    let sum :number = 0;
    while (num) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    return sum;
}

function countEven(num: number): number {

    let count:number = 0;
    for (let n:number = 1; n <= num; n++) {
         if(digitSum(n) % 2 === 0)count++;
    }
    return count;
};