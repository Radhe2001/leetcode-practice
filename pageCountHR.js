function pageCount(n, p) {
	let d = Math.floor(n / 2);
	if (p > d)
		return n % 2 === 0
			? Math.floor((n - p) / 2) + 1
			: Math.floor((n - p) / 2);
	else return Math.floor(p / 2);
}
console.log(pageCount(6, 5));
