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

var swapNodes = function (head, k) {
	// TODO:Can be optimized more
	// let current = head;
	// let count = 1;
	// while (current) {
	// 	count++;
	// 	current = current.next;
	// }
	// current = head;
	// let temp = 1;
	// let prev = null;
	// let next = null;
	// while (current) {
	// 	if (temp === k) {
	// 		prev = current;
	// 	}
	// 	if (temp === count - k) {
	// 		next = current;
	// 	}
	// 	temp++;
	// 	current = current.next;
	// }
	// let c = prev.data;
	// prev.data = next.data;
	// next.data = c;
	// return head;

	let prev = head,
		next = head;
	for (let i = 1; i < k; i++) {
		prev = prev.next;
	}
	let current = prev.next;
	while (current) {
		current = current.next;
		next = next.next;
	}
	let c = prev.data;
	prev.data = next.data;
	next.data = c;
	return head;
};

let list = new LinkedList();
list.appendList([1, 2, 3, 4, 5]);
print(swapNodes(list.head, 2));
