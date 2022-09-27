// 589. N 叉树的前序遍历
// 给定一个 n 叉树的根节点  root ，返回 其节点值的 前序遍历 。

// n 叉树 在输入中按层序遍历进行序列化表示，每组子节点由空值 null 分隔（请参见示例）。

// 示例 1：

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[1,3,5,6,2,4]

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  function __preorder(node) {
    if (node == null) return;

    res.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      __preorder(node.children[i]);
    }
  }
  __preorder(root);
  return res;
};