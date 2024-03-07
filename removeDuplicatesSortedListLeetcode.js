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
var deleteDuplicates = function (head) {
	let current = head;
	let prev = head;
	let arr = [];
	while (current) {
		arr.push(current.data);
		current = current.next;
	}
	if (arr.length === 0) return head;
	for (let i = arr.length - 1; i >= 0; ) {
		let index = arr.indexOf(arr[i]);
		if (index !== i) {
			arr.splice(index, i - index + 1);
			i = index - 1;
		} else {
			i--;
		}
    }
    if (arr.length === 0) return null;
	let i = 0;
	current = head;
	while (i < arr.length) {
		current.data = arr[i++];
		prev = current;
		current = current.next;
	}
	prev.next = null;
	return head;
};

let list = new LinkedList();
list.appendList([1, 1]);
print(deleteDuplicates(list.head));
