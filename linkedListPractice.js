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

	delete(data) {
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

let list = new LinkedList();
list.append(60);
list.append(50);
list.append(70);
list.delete(70);
list.print();
