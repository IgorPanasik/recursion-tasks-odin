const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	const mid = Math.floor(arr.length / 2);

	const leftPart = mergeSort(arr.slice(0, mid));
	const rightPart = mergeSort(arr.slice(mid));

	return merge(leftPart, rightPart);
};

function merge(left, right) {
	const result = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
