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

var addTwoNumbers = function (l1, l2) {
	let carry = 0;
	let temp = (head = null);
	while (l1 || l2) {
		if (l1 && l2) {
			let sum = l1.data + l2.data + carry;
			l1 = l1.next;
			l2 = l2.next;
			if (sum >= 10) {
				sum = sum % 10;
				carry = 1;
			} else {
				carry = 0;
			}
			if (!head) {
				head = new Node(sum);
				temp = head;
			} else {
				temp.next = new Node(sum);
				temp = temp.next;
			}
		} else if (l1) {
			let sum = l1.data + carry;
			l1 = l1.next;
			if (sum >= 10) {
				sum = sum % 10;
				carry = 1;
			} else {
				carry = 0;
			}
			if (!head) {
				head = new Node(sum);
				temp = head;
			} else {
				temp.next = new Node(sum);
				temp = temp.next;
			}
		} else {
			let sum = l2.data + carry;
			l2 = l2.next;
			if (sum >= 10) {
				sum = sum % 10;
				carry = 1;
			} else {
				carry = 0;
			}
			if (!head) {
				head = new Node(sum);
				temp = head;
			} else {
				temp.next = new Node(sum);
				temp = temp.next;
			}
		}
	}
	if (carry === 1) temp.next = new Node(carry);
	return head;
};

let list1 = new LinkedList();
list1.appendList([2, 4, 3]);
let list2 = new LinkedList();
list2.appendList([5, 6, 4]);
let list = addTwoNumbers(list1.head, list2.head);
print(list);
