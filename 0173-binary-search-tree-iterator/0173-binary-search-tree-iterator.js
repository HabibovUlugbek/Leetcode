var BSTIterator = function (root) {
    this.parents = []

    while (root) {
        this.parents.push(root)
        root = root.left
    }
};

BSTIterator.prototype.next = function () {
    let cur = this.parents.pop()
    const val = cur.val
    if (cur.right) {
        cur = cur.right
        while (cur) {
            this.parents.push(cur)
            cur = cur.left
        }
    }
    return val
};

BSTIterator.prototype.hasNext = function () {
    return this.parents.length > 0
};