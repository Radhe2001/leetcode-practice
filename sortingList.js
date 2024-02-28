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
list.appendList([-1, 5, 3, 4, 0]);
let LL = sortList(list.head);
print(LL);
