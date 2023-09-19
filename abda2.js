function gcdTwoNumber(a, b) {
	while (b) {
		let c = b;
		b = a % b;
		a = c;
	}
	return a;
}
