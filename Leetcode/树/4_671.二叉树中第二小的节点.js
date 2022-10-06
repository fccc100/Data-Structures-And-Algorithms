// 671. 二叉树中第二小的节点
// 给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

// 更正式地说，即 root.val = min(root.left.val, root.right.val) 总成立。

// 给出这样的一个二叉树，你需要输出所有节点中的 第二小的值 。

// 如果第二小的值不存在的话，输出 -1 。

// 示例 1：

// 输入：root = [2,2,5,null,null,5,7]
// 输出：5
// 解释：最小的值是 2 ，第二小的值是 5 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
  if (root.left == null && root.right == null) return -1;
  let min1 = Infinity;
  let min2 = Infinity;
  function __inorder(node) {
    if (node == null) return;

    __inorder(node.left);
    if (node.val < min1) {
      min2 = min1;
      min1 = node.val;
    } else if (node.val != min1 && node.val < min2) {
      min2 = node.val;
    }
    __inorder(node.right);
  }
  __inorder(root);
  return min2 == Infinity ? -1 : min2;
};