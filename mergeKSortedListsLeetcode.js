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

// FIXME: Dont know why it throwing error on leetcode but it is working
// var mergeTwoLists = function (list1, list2) {
// 	let current1 = list1;
// 	let current2 = list2;
// 	let prev = list1;
// 	while (current1 && current2) {
// 		if (current1.data <= current2.data) {
// 			prev = current1;
// 			current1 = current1.next;
// 		} else {
// 			if (prev === current1) {
// 				let temp = current2.next;
// 				current2.next = current1;
// 				current1 = current2;
// 				list1 = current1;
// 				current2 = temp;
// 			} else {
// 				prev.next = current2;
// 				current2 = current2.next;
// 				prev.next.next = current1;
// 				prev = prev.next;
// 			}
// 		}
// 	}
// 	if (prev !== null) {
// 		prev.next = current2;
// 	} else {
// 		list1 = list2;
// 	}
// 	return list1;
// };

var mergeKLists = (lists) => {
	const mergeTwoLists = (list1, list2) => {
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
	for (let i = 1; i < lists.length; i++) {
		if (lists.length === 0) return null;
		lists[0] = mergeTwoLists(lists[0], lists[i]);
	}
	return lists[0];
};

let arr = [
	[1, 4, 5],
	[1, 3, 4],
	[2, 6],
];
let listItems = [];
for (let i = 0; i < arr.length; i++) {
	let list = new LinkedList();
	list.appendList(arr[i]);
	listItems.push(list.head);
}
print(mergeKLists(listItems));
