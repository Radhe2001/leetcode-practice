var getIntersectionNode = function (headA, headB) {
	let set = new Set();
	let current = headA;
	while (current) {
		if (!set.has(current)) set.add(current);
		current = current.next;
	}
	current = headB;
	while (current) {
		if (set.has(current)) return current;
		current = current.next;
	}
	return null;
};
