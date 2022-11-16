const addTwoNumbers = (l1, l2) => {
	let n1 = '';
	let n2 = '';

	while (l1 || l2) {
		if (l1) {
			n1 += l1.val;
			l1 = l1.next;
		}
		if (l2) {
			n2 += l2.val;
			l2 = l2.next;
		}
	}

	n1 = BigInt(n1);
	n2 = BigInt(n2);

	const sum = (n1 + n2).toString();
	let i = 0;
	let sentinel = new ListNode(0);
	let tail = sentinel;

	while (i < sum.length) {
		const node = new ListNode(parseInt(sum[i++]));

		tail.next = node;
		tail = node;
	}

	return sentinel.next;
};