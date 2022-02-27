function hIndex(citations: number[]): number {
	const length:number = citations.length;

	for (let index:number = length - 1; index >= 0; index--) {
		const times = length - index;

		if (citations[index] < times) return times - 1;
	}

	return length;
};