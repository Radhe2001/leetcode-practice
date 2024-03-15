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

function sort(head) {
	// FIXME: Though it works try to solve it without using any other datatypes such as array
	let arr = [];
	let current = head;
	while (current) {
		arr.push(current.data);
		current = current.next;
	}
	arr.sort((a, b) => a - b);
	let i = 0;
	current = head;
	while (current) {
		current.data = arr[i];
		current = current.next;
		i++;
	}
	return head;
}

let list = new LinkedList();
list.appendList([1, 9, 2, 8, 3, 7]);
print(sort(list.head));
