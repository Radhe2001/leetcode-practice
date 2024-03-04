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

function addOne(node) {
	let current = node;
	let left = node;
	while (current) {
		if (current.data < 9) {
			left = current;
		}
		current = current.next;
	}
	if (left.next === current) {
		left.data = left.data + 1;
	} else {
		let sum = left.data + 1;
		if (sum === 10) {
			left.data = 1;
		} else {
			left.data = sum;
		}
		left = left.next;
		while (left.next) {
			left.data = 0;
			left = left.next;
		}
		left.data = 0;
		if (sum === 10) {
			let temp = new Node(0);
			left.next = temp;
		}
	}
	return node;
}

let list = new LinkedList();
list.appendList([8,8,7]);
print(addOne(list.head));
