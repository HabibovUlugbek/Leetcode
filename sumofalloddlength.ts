function sumOddLengthSubarrays(arr: number[]): number {
	let sum :number = 0;

	for (let i :number = 1; i <= arr.length; i += 2) {
	
		for (let j :number = 0; j <= arr.length - i; j++) {
			let odd:number[] = arr.slice(j, j + i);

			sum += odd.reduce((acc, cv) => acc + cv, 0);
		}
	}

	return sum;
};