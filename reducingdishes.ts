function maxSatisfaction(s: number[]): number {
	s = s.sort((a, b) =>a - b)
    let result:number = 0, len:number = s.length
    for(let i:number = 0; i < len; i++){
        let current:number = 0
        for(let j:number = i; j < len; j++){
            current += (s[j] * (j - i + 1))
        }
        if (current > result) result = current 
    }
    return result
};