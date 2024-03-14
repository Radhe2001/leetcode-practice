var reverseList = function (head) {
	// TODO:Can be optimized more
	// let current = head;
	// let arr = [];
	// while (current) {
	// 	arr.push(current.val);
	// 	current = current.next;
	// }
	// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
	// 	let c = arr[arr.length - 1 - i];
	// 	arr[arr.length - 1 - i] = arr[i];
	// 	arr[i] = c;
	// }
	// current = head;
	// let i = 0;
	// while (current) {
	// 	current.val = arr[i];
	// 	current = current.next;
	// 	i++;
	// }
	// return head;

	if (head === null || head.next === null) return head;
	let current = head.next;
	let prev = head;
    prev.next = null;
    while (current.next) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    current.next = prev;
    return current;
};
