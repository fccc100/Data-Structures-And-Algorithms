// 515. 在每个树行中找最大值
// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

// 示例1：

// 输入: root = [1,3,2,5,3,null,9]
// 输出: [1,3,9]
// 示例2：

// 输入: root = [1,2,3]
// 输出: [1,3]

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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (root == null) return [];
  let queue = [];
  queue.push(root);

  let res = [];
  while(queue.length) {
    let len = queue.length;
    let max = -Infinity;

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      max = Math.max(max, curNode.val);

      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
    res.push(max);
  }
  return res;
};