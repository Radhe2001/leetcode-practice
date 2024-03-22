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

var removeElements = function (head, val) {
	if (!head) return head;
	let prev = head,
		current = head;
	while (current) {
		if (current.data === val) {
			if (current === head) {
				head = head.next;
				current = current.next;
				prev = prev.next;
			} else {
				current = current.next;
				prev.next = current;
			}
		} else {
			prev = current;
			current = current.next;
		}
	}
	return head;
};

let list = new LinkedList();
list.appendList([7,7,7,7]);
print(removeElements(list.head, 7));
