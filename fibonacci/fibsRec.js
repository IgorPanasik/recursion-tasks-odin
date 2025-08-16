const fibsRec = (n, init = [0, 1]) => {
	console.log('This was printed recursively');
	if (init.length >= n) return init;

	const next = [...init, init[init.length - 1] + init[init.length - 2]];
	return fibsRec(n, next);
};
console.log(fibsRec(8));
