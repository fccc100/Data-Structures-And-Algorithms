// 剑指 Offer 32 - III. 从上到下打印二叉树 III
// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  let queue = [];
  queue.push(root);
  let dir = 0;
  let res = [];
  while (queue.length) {
    let len = queue.length;

    let curLevel = [];
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      curLevel.push(cur.val);

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }

    if (dir == 0) {
      res.push(curLevel);
    } else {
      res.push(curLevel.reverse());
    }
    dir = 1 - dir;
  }
  return res;
};