const palindrome = (num) => {
	if (num < 0) {
		return false;
    } else {
        let str = num.toString();
        for (let i = 0; i < str.length; i++) { 
            if (str[i]!== str[str.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
};

console.log(palindrome(121));
