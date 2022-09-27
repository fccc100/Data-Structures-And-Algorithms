// 1120. 子树的最大平均值
// 给你一棵二叉树的根节点 root，找出这棵树的 每一棵 子树的 平均值 中的 最大 值。

// 子树是树中的任意节点和它的所有后代构成的集合。

// 树的平均值是树中节点值的总和除以节点数。

// 示例：

// 输入：[5,6,1]
// 输出：6.00000
// 解释： 
// 以 value = 5 的节点作为子树的根节点，得到的平均值为 (5 + 6 + 1) / 3 = 4。
// 以 value = 6 的节点作为子树的根节点，得到的平均值为 6 / 1 = 6。
// 以 value = 1 的节点作为子树的根节点，得到的平均值为 1 / 1 = 1。
// 所以答案取最大值 6。

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
var maximumAverageSubtree = function(root) {
  let max = -Infinity;

  // 返回以node为根的子树的节点个数 count 和子树的和 sum
  function f(node) {
    if (node == null) {
      max = Math.max(max, 0);
      return [0, 0];
    }

    // 叶子节点
    if (node.left == null && node.right == null) {
      max = Math.max(max, node.val);
      return [1, node.val];
    }

    // 分别求左右子树的节点个数和子树和
    let left = f(node.left);
    let right = f(node.right);

    let curSum = left[1] + right[1] + node.val;
    let curCount = left[0] + right[0] + 1;
    
    max = Math.max(max, curSum / curCount);
    return [curCount, curSum];
  }

  f(root);
  return max;
};