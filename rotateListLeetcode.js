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

var rotateRight = function (head, k) {
	// let arr = [];
	// let current = head;
	// while (current) {
	// 	arr.push(current.data);
	// 	current = current.next;
	// }
	// let t = k % arr.length;
	// while (t--) {
	// 	let data = arr.pop();
	// 	arr = [data, ...arr];
	// }
	// current = head;
	// let i = 0;
	// while (current) {
	// 	current.data = arr[i++];
	// 	current = current.next;
	// }
	// return head;

	if (k === 0 || head === null) return head;
	let current = head;
	let count = 0;
	let prev = null;
	while (current) {
		count++;
		prev = current;
		current = current.next;
	}
	let last = prev;
	let t = count - (k % count);
	current = head;
	prev = null;
	let i = 0;
	while (i++ < t) {
		prev = current;
		current = current.next;
	}
	last.next = head;
	current = prev.next;
	prev.next = null;
	return current;
};

let list = new LinkedList();
list.appendList([0, 1, 2]);
print(rotateRight(list.head, 4));
