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
var removeNthFromEnd = function (head, n) {
	// let count = 0;
	// let current = head;
	// while (current) {
	// 	count++;
	// 	current = current.next;
	// }
	// current = head;
	// let index = count - n - 1;
	// console.log(`count = ${count} , n = ${n}`);
	// if (count === n) {
	// 	current = current.next;
	// 	return current;
	// }
	// count = 0;
	// while (count < index) {
	// 	count++;
	// 	current = current.next;
	// }
	// current.next = current.next.next;
	// return head;

	let first = head;
	let second = head;
	let count1 = 0;
	let count2 = 0;
	let count = 0;
	while (second) {
		if (count1 - count2 === n + 1) {
			count1++;
			second = second.next;
			count2++;
			first = first.next;
		} else {
			count1++;
			second = second.next;
		}
		count++;
	}
	if (count === n) {
		return first.next;
	}
	first.next = first.next.next;
	return head;
};

let list = new LinkedList();
list.appendList([1]);
let head = removeNthFromEnd(list.head, 1);
print(head);
