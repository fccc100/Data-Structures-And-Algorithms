// 559. N 叉树的最大深度
// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

// 示例 1：

// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：3

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  function __maxDepth(node) {
    if (node == null) return 0;

    let max = 0;
    for (let i = 0; i < node.children.length; i++) {
      max = Math.max(max, __maxDepth(node.children[i]));
    }
    return max + 1;
  }

  return __maxDepth(root);
};