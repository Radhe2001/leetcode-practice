var multiply = function (num1, num2) {
	return (BigInt(num1) * BigInt(num2)).toString();
};
console.log(multiply('123456789', '987654321'));
