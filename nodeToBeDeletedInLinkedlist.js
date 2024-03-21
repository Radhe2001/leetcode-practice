var deleteNode = function (node) {
	let c = node.val;
	node.val = node.next.val;
	node.next.val = c;
	node.next = node.next.next;
};
