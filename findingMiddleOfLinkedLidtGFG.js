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

	getMiddle(node) {
		if (!node) return -1;
		let count = 0;
		let temp = node;
		while (temp) {
			count++;
			temp = temp.next;
		}
		let mid = Math.floor(count / 2);
		count = 0;
		temp = node;
		while (count <= mid) {
			if (count === mid) {
				return temp.data;
			}
			count++;
			temp = temp.next;
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

var sortList = function (head) {
	let temp = head;
	let arr = [];
	while (temp) {
		arr.push(temp.data);
		temp = temp.next;
	}
	arr = arr.sort((a, b) => a - b);
	let count = 0;
	temp = head;
	while (temp) {
		temp.data = arr[count];
		temp = temp.next;
		count++;
	}
	return head;
};

let list = new LinkedList();
list.appendList([2, 4, 6, 7, 5, 1]);
// let LL = sortList(list.head);
// print(LL);
console.log(list.getMiddle(list.head));
// print(list.head);
