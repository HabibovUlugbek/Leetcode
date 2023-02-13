function digitCount(num: string): boolean {
    const arr = Array(num.length).fill(0);
    for (const char of num) {
        arr[Number(char)]++;
    }
    return arr.join('') === num;
};