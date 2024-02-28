// FIXME: Needs to be fixed as it is not giving the correect output

var hammingWeight = function (n) {
	n = n.toString();
	let count = 0;
	for (let i = 0; i < n.length; i++) {
		if (n[i] === '1') {
			count++;
		}
	}
	return count;
};
console.log(hammingWeight(00001011));
