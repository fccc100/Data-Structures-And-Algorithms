// 1302. 层数最深叶子节点的和
// 给你一棵二叉树的根节点 root ，请你返回 层数最深的叶子节点的和 。

// 示例 1：

// 输入：root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// 输出：15
// 示例 2：

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：19

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
var deepestLeavesSum = function(root) {
  if (root == null) {
    return 0;
  }
  let queue = [];
  queue.push(root);

  let res = 0;
  while (queue.length) {
    let len = queue.length;

    let curSum = 0;
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      curSum += cur.val;

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res = curSum;
  }
  return res;
};