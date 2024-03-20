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

var mergeInBetween = function (list1, a, b, list2) {
	let current = list1,
		count = 1,
		temp1 = null,
		temp2 = null;
	while (current) {
		if (count === a) temp1 = current;
		if (count === b) temp2 = current.next;
		current = current.next;
		count++;
	}
	current = list2;
	while (current.next) {
		current = current.next;
	}
	temp1.next = list2;
	current.next = temp2.next;
	return list1;
};

let list1 = new LinkedList();
list1.appendList([0, 1, 2]);
let list2 = new LinkedList();
list2.appendList([1000000, 1000001, 1000002, 1000003]);
print(mergeInBetween(list1.head, 1, 1, list2.head));
