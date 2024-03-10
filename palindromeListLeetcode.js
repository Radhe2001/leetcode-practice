//  Done the problem successfully
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	append(data) {
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			return;
		}

		let current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
		return;
	}

	appendList(arr) {
		for (let i = 0; i < arr.length; i++) {
			this.append(arr[i]);
		}
	}

	print() {
		let current = this.head;
		if (!current) {
			return;
		}

		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

function print(head) {
	let current = head;
	if (!current) {
		return;
	}

	while (current) {
		console.log(current.data);
		current = current.next;
	}
}

var isPalindrome = function (head) {
	let current = head;
	let arr = [];
	while (current) {
		arr.push(current.data);
		current = current.next;
	}
	let l = arr.length;
	let n = Math.floor(l / 2);
	for (let i = 0; i < n; i++) {
		if (arr[i] !== arr[l - i - 1]) return false;
	}
	return true;
};

let list = new LinkedList();
list.appendList([1, 2]);
console.log(isPalindrome(list.head));
