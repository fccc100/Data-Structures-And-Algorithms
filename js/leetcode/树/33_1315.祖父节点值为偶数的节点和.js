// 1315. 祖父节点值为偶数的节点和
// 给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

// 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
// 如果不存在祖父节点值为偶数的节点，那么返回 0 。

// 示例：

// 输入：root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// 输出：18
// 解释：图中红色节点的祖父节点的值为偶数，蓝色节点为这些红色节点的祖父节点。

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
var sumEvenGrandparent = function(root) {
  let res = 0;

  // 返回以node为根节点的子树的满足条件的节点和
  function dfs(node, parentVal, gParentVal) {
    if (node == null) return 0;

    dfs(node.left, node.val, parentVal);
    dfs(node.right, node.val, parentVal);
    if (gParentVal > 0 && gParentVal % 2 == 0) {
      res += node.val;
    }
  }
  
  dfs(root, -1, -1);
  return res;
};