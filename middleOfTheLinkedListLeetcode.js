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

var middleNode = function (head) {
	if (head === null) return head;
	// let current = head;
	// let count = 0;
	// while (current) {
	// 	count++;
	// 	current = current.next;
	// }
	// let i = 0;
	// current = head;
	// let result = Math.floor(count / 2);
	// while (i < result) {
	// 	i++;
	// 	current = current.next;
	// }
	// return current;

	let fast = head;
	let slow = head;
	try {
		while (slow !== null && fast.next !== null) {
			slow = slow.next;
			fast = fast.next.next;
		}
	} catch {}
	return slow;
};

let list = new LinkedList();
list.appendList([1]);
print(middleNode(list.head));
