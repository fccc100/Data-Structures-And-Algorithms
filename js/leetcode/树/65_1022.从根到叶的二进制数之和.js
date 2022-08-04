// 1022. 从根到叶的二进制数之和
// 给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

// 例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
// 对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

// 返回这些数字之和。题目数据保证答案是一个 32 位 整数。

// 示例 1：

// 输入：root = [1,0,1,0,1,0,1]
// 输出：22
// 解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
// 示例 2：

// 输入：root = [0]
// 输出：0

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
var sumRootToLeaf = function (root) {
  if (root == null) {
    return 0;
  }
  let res = 0;

  function dfs(node, pre) {
    let cur = pre + node.val;

    if (node.left == null && node.right == null) {
      res += parseInt(cur, 2);
    }

    if (node.left != null) {
      dfs(node.left, cur);
    }
    if (node.right != null) {
      dfs(node.right, cur);
    }
  }

  dfs(root, '');
  return res;
};