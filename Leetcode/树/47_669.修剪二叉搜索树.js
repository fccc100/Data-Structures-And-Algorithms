// 669. 修剪二叉搜索树
// 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。
// 修剪树 不应该 改变保留在树中的元素的相对结构 (即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。

// 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

// 示例 1：

// 输入：root = [1,0,2], low = 1, high = 2
// 输出：[1,null,2]
// 示例 2：

// 输入：root = [3,0,4,null,2,null,null,1], low = 1, high = 3
// 输出：[3,2,null,1]

//                3                     3
//             0     4       =>       2
//               2                  1  
//             1

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  // 空节点返回空
  if (root == null) {
    return null;
  }

  // 叶子节点且值不在区间内，返回空
  if (root.left == null && root.right == null && (root.val < low || root.val > high)) {
    return null;
  }

  // 分别处理左右子树
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  // 处理完左右子树后可能当前节点又是空了
  if (root.left == null && root.right == null) {
    if (root.val < low || root.val > high) {
      return null;
    }
    return root;
  }

  // 当前节点值不在区间内，如果当前值都不在区间内了，那左右子树必有一边为空，因为左右子树的值都是大于当前值或者小于当前值的
  if (root.val < low || root.val > high) {
    if (root.left == null) {
      return root.right;
    }
    if (root.right == null) {
      return root.left;
    }
  }

  return root;
};