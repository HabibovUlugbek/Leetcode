var kthSmallest = function (root, k) {
  let temp = root,
    count = 1,
    val;
  function inOrder(temp) {
    if (!temp) return;

    inOrder(temp.left);

    if (count === k) {
      val = temp.val;
    }
    count++;

    inOrder(temp.right);
  }
  inOrder(temp);
  return val;
};