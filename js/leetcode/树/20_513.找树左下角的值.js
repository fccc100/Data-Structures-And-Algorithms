// 513. 找树左下角的值
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

// 示例 1:

// 输入: root = [2,1,3]
// 输出: 1
// 示例 2:

// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7

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
// 层序遍历
var findBottomLeftValue = function (root) {
  let queue = [];
  queue.push(root);

  let res;
  while (queue.length) {
    let len = queue.length;
    res = queue[0].val;

    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
  }
  return res;
};