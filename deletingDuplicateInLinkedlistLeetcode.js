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

	delete(data) {
		try {
			let current = this.head;
			if (current.data === data) {
				this.head = current.next;
				return;
			}
			while (current.next.data !== data) {
				current = current.next;
			}
			current.next = current.next.next;
			return;
		} catch (err) {
			console.log(err.message);
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

var deleteDuplicates = function (head) {
	if (!head) return head;
	let prev = head;
	let later = prev.next;
	while (later) {
		try {
			while (later.data === prev.data) {
				prev.next = later.next;
				later = prev.next;
			}
			prev = prev.next;
			later = prev.next;
		} catch (err) {
			console.log(err.stack);
		}
	}
	return head;
};

let list = new LinkedList();
list.appendList([1, 1, 2]);
let LL = deleteDuplicates(list.head);
print(LL);
