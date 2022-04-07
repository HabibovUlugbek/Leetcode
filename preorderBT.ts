/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  var list = [];

  function order(root, list) {
    if (root == null) return list;
    list.push(root.val);
    for (let child of root.children) {
      order(child, list);
    }
    return list;
  }

  return order(root, list);
}
