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

var swapPairs = function (head) {
	if (head === null) return head;
	try {
		let prev = head;
		let current = head.next;
		while (prev && current) {
			let c = current.data;
			current.data = prev.data;
			prev.data = c;
			prev = current.next;
			current = prev.next;
		}
	} catch {}
	return head;
};

let list = new LinkedList();
list.appendList([]);
print(swapPairs(list.head));
