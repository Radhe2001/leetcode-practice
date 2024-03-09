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

var reverseBetween = function (head, left, right) {
	if (left === right) return head;
	let count = 0;
	let current = head;
	let arr = [];
	while (count++ < right) {
		if (count >= left && count <= right) {
			arr.push(current.data);
		}
		current = current.next;
	}
	let arr1 = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		arr1.push(arr[i]);
	}
	count = 0;
    let i = 0;
    current = head;
	while (count++ < right) {
		if (count >= left && count <= right) {
			current.data = arr1[i++];
		}
		current = current.next;
	}
	return head;
};

let list = new LinkedList();
list.appendList([1, 2, 3, 4, 5]);
print(reverseBetween(list.head, 2, 4));
