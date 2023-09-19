function checkDate(dateChoice) {
	let datee = new Date(dateChoice);
	let day = datee.getDay();
	if (day == 0 || day == 6) {
		return "Weekend";
	} else {
		return "Work Day";
	}
}

function gcdTwoNumber(a, b) {
	while (b) {
		let c = b;
		b = a % b;
		a = c;
	}
	return a;
}

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
	} while (true);
}

function mostCharracter(text) {
	const string = text.toLowerCase().split("").sort();
	console.log(string);
	let counter = {};
	let penampung = [];

	for (let x of string) {
		if (x in counter) {
			counter[x] += 1;
		} else {
			counter[x] = 1;
		}
	}
	for (let x in counter) {
		penampung.push(counter[x]);
		penampung.sort((a, b) => a - b);
	}
	let theMost = penampung[penampung.length - 1];
	for (let x in counter) {
		if (counter[x] === theMost) {
			return x;
		}
	}
}

module.exports = {
	checkDate,
	gcdTwoNumber,
	lcmTwoNumber,
	mostCharracter,
};
