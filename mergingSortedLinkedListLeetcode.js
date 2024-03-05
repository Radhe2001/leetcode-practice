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

var mergeTwoLists = function (list1, list2) {
	let current = list1;
	let arr1 = [];
	while (current) {
		arr1.push(current.data);
		current = current.next;
	}
	current = list2;
	let arr2 = [];
	while (current) {
		arr2.push(current.data);
		current = current.next;
	}
	let l = 0;
	let m = 0;
	let arr = [];
	while (l < arr1.length) {
		arr.push(arr1[l++]);
	}
	while (m < arr2.length) {
		arr.push(arr2[m++]);
	}
	arr = arr.sort((a, b) => a - b);
	current = null;
	for (let i = 0; i < arr.length; i++) {
		let node = new Node(arr[i]);
		if (current === null) {
			current = node;
			list1 = current;
		} else {
			current.next = node;
			current = current.next;
		}
	}
	return list1;
};

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.appendList([1, 2, 4]);
list2.appendList([1, 3, 4]);
print(mergeTwoLists(list1.head, list2.head));
