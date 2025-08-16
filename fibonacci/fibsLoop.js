const fibsLoop = (n) => {
	let a = 0;
	let b = 1;

	const result = [a, b];
	for (let i = 2; i < n; i++) {
		const next = a + b;
		result.push(next);
		a = b;
		b = next;
	}
	return result;
};
console.log(fibsLoop(8));
