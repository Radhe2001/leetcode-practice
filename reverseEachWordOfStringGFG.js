function reverseWords(s) {
	let arr = s.split('.');
	s = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		if (i === 0) {
			s += arr[i];
			break;
		}
		s += arr[i] + '.';
    }

    return s;
}

console.log(reverseWords('i.like.this.program.very.much'));
