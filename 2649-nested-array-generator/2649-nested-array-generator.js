/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
     // Helper function to perform inorder traversal recursively
  function* traverse(node) {
    if (Array.isArray(node)) {
      for (let subArray of node) {
        yield* traverse(subArray);
      }
    } else {
      yield node;
    }
  }

  yield* traverse(arr);
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */