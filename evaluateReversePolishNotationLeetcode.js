var evalRPN = function (tokens) {
    // TODO:Can you reduce the time complexity more
	let p = 0,
		n = 0;
	while (n < tokens.length) {
		if (
			tokens[n] === '+' ||
			tokens[n] === '-' ||
			tokens[n] === '*' ||
			tokens[n] === '/'
		) {
			switch (tokens[n]) {
				case '+':
					tokens[p - 1] =
						parseInt(tokens[p]) + parseInt(tokens[p - 1]);
					break;
				case '-':
					tokens[p - 1] =
						parseInt(tokens[p - 1]) - parseInt(tokens[p]);
					break;
				case '*':
					tokens[p - 1] =
						parseInt(tokens[p]) * parseInt(tokens[p - 1]);
					break;
				case '/':
					let y = parseInt(tokens[p - 1]),
						z = parseInt(tokens[p]);
					let x = Math.floor(y / z);
					if (y % z !== 0 && x < 0) x++;
					tokens[p - 1] = x;
					break;
			}
			tokens = tokens
				.slice(0, p)
				.concat(tokens.slice(n + 1, tokens.length));

			p = p - 1;
			n = p;
		} else {
			p = n;
			n++;
		}
		console.log(tokens);
	}
	return tokens[0];
};
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']));
