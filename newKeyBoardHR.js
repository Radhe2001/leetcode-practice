function receivedText(S) {
	let str = '';
	let symbol = '>';
	let numLock = false;
	for (let i = 0; i < S.length; i++) {
		if (S[i] === '*') {
			str = str.slice(0, str.length - 1);
			continue;
		}
		if (S[i] === '#') {
			numLock = !numLock;
			continue;
		}
		if (S[i] === '>' || S[i] === '<') {
			symbol = S[i];
			continue;
		}

		if (symbol === '>') {
			if (numLock) {
				if (
					S[i] !== '0' &&
					S[i] !== '1' &&
					S[i] !== '2' &&
					S[i] !== '3' &&
					S[i] !== '4' &&
					S[i] !== '5' &&
					S[i] !== '6' &&
					S[i] !== '7' &&
					S[i] !== '8' &&
					S[i] !== '9'
				) {
					str += S[i];
				}
			} else {
				str += S[i];
			}
		} else {
			if (numLock) {
				if (
					S[i] !== '0' &&
					S[i] !== '1' &&
					S[i] !== '2' &&
					S[i] !== '3' &&
					S[i] !== '4' &&
					S[i] !== '5' &&
					S[i] !== '6' &&
					S[i] !== '7' &&
					S[i] !== '8' &&
					S[i] !== '9'
				) {
					str = S[i] + str;
				}
			} else {
				str = S[i] + str;
			}
		}
    }
    return str;
}
console.log(receivedText('HE*<LL>O'));
