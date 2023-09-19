function lcmTwoNumber(a, b) {
	let sumA = [];
	let sumB = [];
	let i = 1;
	do {
		sumA.push(a * i);
		sumB.push(b * i);
		i++;
		for (let x in sumA) {
			for (let y of sumB) {
				if (sumA[x] == y) {
					return y;
				}
			}
		}
	}
	while (true);
}
