/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
	if (!root) return root;
	const getNext = (next) => {
		if (!next) return null;
		const nextLeft = next?.left;
		const nextRight = next?.right;
		return nextLeft ?? nextRight ?? getNext(next.next);
	};

	if (root.left) root.left.next = root.right ?? getNext(root?.next); 
	if (root.right) root.right.next = getNext(root?.next);

	connect(root.right);
	connect(root.left);
	return root;
};