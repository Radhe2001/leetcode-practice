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

var reorderList = function (head) {
	let current = head;
	let arr = [];
	while (current) {
		arr.push(current.data);
		current = current.next;
	}
	let l = arr.length;
	let n = Math.floor(l / 2);
	let i = 0;
	let newArr = [];
	while (i < n) {
		newArr.push(arr[i]);
		newArr.push(arr[l - 1 - i]);
		i++;
	}
	if (l % 2 == 1) {
		newArr.push(arr[i]);
	}
	current = head;
	i = 0;
	while (current) {
		current.data = newArr[i++];
		current = current.next;
	}
	return head;
};

let list = new LinkedList();
list.appendList([1, 2, 3, 4]);
print(reorderList(list.head));
