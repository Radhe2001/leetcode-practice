var addBinary = function (a, b) {
    let length = a.length > b.length ? a.length : b.length;
    let sum = "";
    let carry = "0";
    for (let i = length - 1; i >= 0; i--){
        if (a[i] === b[i]) {
            if (a[i] === "0") {
                if (carry === "1") {
                    sum += '1';
                    carry = "0";
                } else {
                    sum += '1';
                }
            } else {
                if (carry === '1') {
					sum += '1';
					carry = '1';
				} else {
                    sum += '0' ;
                    carry = "1"
				}
            }
        } else {
            if (carry === "1") {
                sum += '0';
            } else {
                sum += '1';
                carry = "0"
            }
        }
    }
    return sum + carry;
};
console.log(addBinary('11', '1'));
