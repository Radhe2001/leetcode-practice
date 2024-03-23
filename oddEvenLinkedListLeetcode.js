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

var oddEvenList = function (head) {
    if (!head) return null;
	let current = head,
		count = 1,
		odd = null,
		even = null,
		temp1 = null,
		temp2 = null;
	try {
		while (current) {
			if (count % 2 === 0) {
				if (even === null) {
					even = current;
					temp1 = even;
					current = current.next;
					temp1.next = null;
				} else {
					temp1.next = current;
					current = current.next;
					temp1 = temp1.next;
					temp1.next = null;
				}
			} else {
				if (odd === null) {
					odd = current;
					temp2 = odd;
					current = current.next;
					temp2.next = null;
				} else {
					temp2.next = current;
					current = current.next;
					temp2 = temp2.next;
					temp2.next = null;
				}
			}
			count++;
		}
	} catch {}

	temp2.next = even;
	return odd;
};

let list = new LinkedList();
list.appendList([2, 1, 3, 5, 6, 4, 7]);
print(oddEvenList(list.head));
