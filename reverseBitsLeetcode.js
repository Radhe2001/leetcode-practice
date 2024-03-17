var reverseBits = function (n) {
	let mul = 1,
		i = 0;
	total = 0;
	while (i < n.length) {
		total += parseInt(n[i]) * mul;
		mul *= 2;
		i++;
	}
	return total;
};
console.log(reverseBits("00000010100101000001111010011100"));
