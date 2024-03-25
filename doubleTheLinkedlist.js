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

var doubleIt = function (head) {
	let current = head;
	let arr = [];
	while (current) {
		arr.push(current.data);
		current = current.next;
	}
	let rem = 0;
	for (let i = arr.length - 1; i >= 0; i--) {
		let res = arr[i] * 2 + rem;
		if (res > 9) {
			arr[i] = res % 10;
			rem = 1;
		} else {
			arr[i] = res;
			rem = 0;
		}
	}
	if (rem === 1) arr = [1].concat(...arr);
	let i = 0;
    current = head;
    let prev = null;
	while (current) {
        current.data = arr[i++];
        prev = current;
		current = current.next;
    }
    if (i === arr.length - 1) prev.next = new Node(arr[i])
	return head;
};

let list = new LinkedList();
list.appendList([9,9]);
print(doubleIt(list.head));
